// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let holdings     = JSON.parse(localStorage.getItem('ph2_holdings') || '[]');
let priceCache   = {};
let historyCache = {};
let chartInst = null, donutInst = null, barInst = null;
let chartMode = 'asset';
let sliderDates = [];
const COLORS = ['#7c5cfc','#00d4aa','#ff4d6a','#f5a623','#4fc3f7','#81c784','#ce93d8','#ffb74d'];

// ═══════════════════════════════════════
// UTILS
// ═══════════════════════════════════════
const fNum = (n, d=0) => (n==null||isNaN(n)) ? '—' : n.toLocaleString('ko-KR',{minimumFractionDigits:d,maximumFractionDigits:d});

function toast(msg, type='ok') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = `toast ${type} show`;
  setTimeout(() => el.className = 'toast', 3500);
}

function updateClock() {
  const el = document.getElementById('htime');
  if (el) {
    el.textContent = new Date().toLocaleString('ko-KR',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  }
}
setInterval(updateClock, 1000); updateClock();

(function initDates(){
  const e = new Date(), s = new Date();
  s.setMonth(s.getMonth()-3);
  const dEnd = document.getElementById('dEnd');
  const dStart = document.getElementById('dStart');
  if (dEnd) dEnd.value = e.toISOString().split('T')[0];
  if (dStart) dStart.value = s.toISOString().split('T')[0];
})();

// ═══════════════════════════════════════
// AI API CALL (Anthropic Proxy/Placeholder)
// ═══════════════════════════════════════
async function callAI(userMsg) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model:      'claude-sonnet-4-20250514',
      max_tokens: 1500,
      tools:      [{ type: 'web_search_20250305', name: 'web_search' }],
      system:     'You are a financial data API. Always respond with ONLY raw JSON. No markdown, no explanation, no code fences. No text before or after the JSON.',
      messages:   [{ role: 'user', content: userMsg }],
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(()=>({}));
    throw new Error('API 오류 ' + res.status + ': ' + (err?.error?.message || res.statusText));
  }

  const data = await res.json();
  const text = (data.content||[])
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('')
    .trim();
  console.log('[AI response]', text.slice(0,200));
  return text;
}

// 재시도 래퍼 (최대 3회, exponential backoff)
async function withRetry(fn, retries=3) {
  let lastErr;
  for (let i=0; i<retries; i++) {
    try { return await fn(); }
    catch(e) {
      lastErr = e;
      if (i < retries-1) {
        const wait = 1200 * Math.pow(2, i); // 1.2s → 2.4s → 4.8s
        console.warn(`[retry ${i+1}/${retries}] ${e.message} — ${wait}ms 후 재시도`);
        await new Promise(r => setTimeout(r, wait));
      }
    }
  }
  throw lastErr;
}

// JSON 안전 추출
function safeJSON(raw, type='object') {
  if (!raw) return null;
  let clean = raw
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/gi, '')
    .replace(/^[^[{]*/s, s => s.includes('[') || s.includes('{') ? s : '')
    .trim();
  if (type === 'array') {
    const s = clean.indexOf('['), e = clean.lastIndexOf(']');
    if (s !== -1 && e > s) {
      try { return JSON.parse(clean.slice(s, e+1)); } catch {}
    }
    const rows = clean.split('\n').map(l=>l.trim()).filter(l=>l.startsWith('{'));
    const out = [];
    for (const r of rows) { try { out.push(JSON.parse(r.replace(/,$/,''))); } catch {} }
    return out.length ? out : null;
  } else {
    const s = clean.indexOf('{'), e = clean.lastIndexOf('}');
    if (s !== -1 && e > s) {
      try { return JSON.parse(clean.slice(s, e+1)); } catch {}
    }
    return null;
  }
}

// ═══════════════════════════════════════
// STOCK DATA FETCHING
// ═══════════════════════════════════════
async function fetchPrice(symbol) {
  if (priceCache[symbol] && Date.now()-priceCache[symbol].ts < 60000)
    return priceCache[symbol].data;

  const isKR = symbol.endsWith('.KS') || symbol.endsWith('.KQ');
  const cur  = isKR ? 'KRW' : 'USD';

  const raw = await withRetry(() => callAI(
    `Use web_search to find the current stock price of ticker "${symbol}".

CRITICAL: Your entire response must be ONLY this JSON object. Start with { and end with }. No markdown, no explanation.

{"price":0,"prevClose":0,"name":"","currency":"${cur}"}

price = current market price as plain number
prevClose = previous day close as plain number  
name = company name${isKR?' in Korean':''}
currency = "${cur}"

DO NOT use markdown code fences. Output raw JSON only.`
  ));

  const r = safeJSON(raw, 'object');
  if (!r || typeof r.price !== 'number' || r.price <= 0)
    throw new Error(`"${symbol}" 가격 파싱 실패 — 종목 코드를 확인하세요`);

  r.symbol = symbol;
  priceCache[symbol] = { data: r, ts: Date.now() };
  return r;
}

async function fetchHistory(symbol, start, end) {
  const key = `${symbol}|${start}|${end}`;
  if (historyCache[key]) return historyCache[key];

  const endD = new Date(end);
  const stD  = new Date(start);

  const months = [];
  let cur = new Date(stD.getFullYear(), stD.getMonth(), 1);
  while (cur <= endD) {
    const ms = cur.toISOString().split('T')[0];
    const nextMonth = new Date(cur.getFullYear(), cur.getMonth()+1, 0); 
    const me = nextMonth > endD ? end : nextMonth.toISOString().split('T')[0];
    months.push({ ms, me });
    cur = new Date(cur.getFullYear(), cur.getMonth()+1, 1);
    if (months.length >= 3) break; 
  }

  const allData = [];

  for (const { ms, me } of months) {
    const prompt = `Search for ${symbol} stock closing prices for each trading day from ${ms} to ${me}.
Output ONLY a JSON array like this (NO other text, NO markdown):
[{"date":"${ms}","close":100.00},{"date":"...","close":...}]
Every trading day. date=YYYY-MM-DD, close=number.`;

    try {
      const raw = await withRetry(() => callAI(prompt), 2);
      const arr = safeJSON(raw, 'array');
      if (arr && arr.length > 0) {
        arr.forEach(d => {
          if (d?.date && d?.close != null && !isNaN(+d.close)) {
            allData.push({ date: d.date, close: +d.close });
          }
        });
      } else {
        console.warn(`[history] ${symbol} ${ms}~${me}: 빈 응답`);
      }
    } catch(e) {
      console.warn(`[history] ${symbol} ${ms}~${me} 실패:`, e.message);
    }
  }

  if (allData.length === 0) return [];

  const result = allData
    .filter((d,i,arr) => arr.findIndex(x=>x.date===d.date)===i) 
    .sort((a,b) => a.date.localeCompare(b.date));

  historyCache[key] = result;
  return result;
}

// ═══════════════════════════════════════
// HOLDINGS CRUD
// ═══════════════════════════════════════
async function addHolding() {
  let ticker  = document.getElementById('inTicker').value.trim().toUpperCase();
  const mkt   = document.getElementById('inMarket').value;
  const bpRaw = document.getElementById('inPrice').value;
  const shRaw = document.getElementById('inShares').value;

  if (!ticker)              { toast('종목 코드를 입력하세요','err'); return; }
  if (!bpRaw || +bpRaw<=0) { toast('매수가를 입력하세요','err'); return; }
  if (!shRaw || +shRaw<=0) { toast('수량을 입력하세요','err'); return; }
  if (mkt==='KR' && !ticker.includes('.')) ticker += '.KS';

  const btn = document.getElementById('addBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spin"></span>조회 중...';
  toast('📡 주가 조회 중... (최대 45초)');

  try {
    const info = await fetchPrice(ticker);
    holdings.push({
      id: Date.now(),
      symbol: ticker, name: info.name, market: mkt,
      buyPrice: +bpRaw, shares: +shRaw,
      currentPrice: info.price, prevClose: info.prevClose,
    });
    save(); renderAll();
    toast(`✅ ${info.name} 추가 완료!`);
    document.getElementById('inTicker').value  = '';
    document.getElementById('inPrice').value   = '';
    document.getElementById('inShares').value  = '';
  } catch(e) {
    console.error('[addHolding]', e);
    toast('❌ ' + e.message, 'err');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '+ 추가';
  }
}

function removeHolding(id) {
  holdings = holdings.filter(h => h.id !== id);
  historyCache = {};
  save(); renderAll();
}

function save() { localStorage.setItem('ph2_holdings', JSON.stringify(holdings)); }

// ═══════════════════════════════════════
// RENDER ALL
// ═══════════════════════════════════════
function renderAll() {
  renderCards(); renderHoldings(); renderDonut(); renderBar(); resetChartIfEmpty();
}

function resetChartIfEmpty() {
  if (!holdings.length) {
    const el = document.getElementById('chartArea');
    if (el) el.innerHTML = '<div class="empty">종목을 추가하면<br>그래프가 표시됩니다</div>';
    const mainChart = document.getElementById('mainChart');
    if (mainChart) mainChart.style.display = 'none';
    const sliderPanel = document.getElementById('sliderPanel');
    if (sliderPanel) sliderPanel.style.display = 'none';
    historyCache = {};
  }
}

// ── Summary Cards
function renderCards() {
  if (!holdings.length) {
    ['cInvested','cCurrent','cPnl','cRet'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.textContent = '—'; el.className = 'card-val'; }
    });
    return;
  }
  let invKR=0, curKR=0, invUS=0, curUS=0;
  holdings.forEach(h => {
    const inv = h.buyPrice * h.shares;
    const cur = (h.currentPrice || h.buyPrice) * h.shares;
    h.market==='KR' ? (invKR+=inv, curKR+=cur) : (invUS+=inv, curUS+=cur);
  });
  const hasKR=invKR>0, hasUS=invUS>0;
  if (hasKR && hasUS) {
    const cInv = document.getElementById('cInvested');
    if (cInv) cInv.textContent = `₩${fNum(invKR)} / $${fNum(invUS,2)}`;
    const cCur = document.getElementById('cCurrent');
    if (cCur) cCur.textContent  = `₩${fNum(curKR)} / $${fNum(curUS,2)}`;
    const pnl=(curKR-invKR)+(curUS-invUS)*1350;
    const ret=(pnl/(invKR+invUS*1350))*100;
    const pe=document.getElementById('cPnl'), re=document.getElementById('cRet');
    if (pe) { pe.textContent=(pnl>=0?'+':'')+fNum(pnl,0)+'(원환산)'; pe.className='card-val '+(pnl>=0?'up':'down'); }
    if (re) { re.textContent=(ret>=0?'+':'')+ret.toFixed(2)+'%';      re.className='card-val '+(ret>=0?'up':'down'); }
  } else {
    const isUS=hasUS, inv=isUS?invUS:invKR, cur=isUS?curUS:curKR;
    const pnl=cur-inv, ret=(pnl/inv)*100;
    const cInv = document.getElementById('cInvested');
    if (cInv) cInv.textContent = isUS?`$${fNum(inv,2)}`:`₩${fNum(inv)}`;
    const cCur = document.getElementById('cCurrent');
    if (cCur) cCur.textContent  = isUS?`$${fNum(cur,2)}`:`₩${fNum(cur)}`;
    const pe=document.getElementById('cPnl'), re=document.getElementById('cRet');
    if (pe) { pe.textContent=(pnl>=0?'+':'')+(isUS?`$${fNum(pnl,2)}`:`₩${fNum(pnl)}`); pe.className='card-val '+(pnl>=0?'up':'down'); }
    if (re) { re.textContent=(ret>=0?'+':'')+ret.toFixed(2)+'%'; re.className='card-val '+(ret>=0?'up':'down'); }
  }
}

// ── Holdings List
function renderHoldings() {
  const el = document.getElementById('holdList');
  if (!el) return;
  if (!holdings.length) { el.innerHTML='<div class="empty" style="padding:40px 10px;">아직 추가된 종목이 없습니다</div>'; return; }
  el.innerHTML = holdings.map(h => {
    const pnl = h.currentPrice ? (h.currentPrice-h.buyPrice)/h.buyPrice*100 : null;
    const cls = pnl==null?'':pnl>=0?'up':'down';
    const sign= pnl==null?'':pnl>=0?'+':'';
    const sym = h.symbol.replace('.KS','').replace('.KQ','');
    const isUS= h.market==='US';
    const badge= isUS?'<span class="badge badge-us">US</span>':'<span class="badge badge-kr">KR</span>';
    return `<div class="h-item">
      <div>
        <div class="h-ticker">${sym}${badge}</div>
        <div style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;margin-top:1px;">${h.shares}주@${isUS?'$':'₩'}${fNum(h.buyPrice,isUS?2:0)}</div>
      </div>
      <div class="h-name">${h.name}</div>
      <div class="h-right">
        <div class="h-price ${cls}">${h.currentPrice?(isUS?'$':'₩')+fNum(h.currentPrice,isUS?2:0):'—'}</div>
        <div class="h-pct ${cls}">${pnl!=null?sign+pnl.toFixed(2)+'%':'—'}</div>
      </div>
      <button class="h-del" onclick="removeHolding(${h.id})">✕</button>
    </div>`;
  }).join('');
}

// ── Donut
function renderDonut() {
  const canvas=document.getElementById('donut'), list=document.getElementById('allocList');
  if (!canvas || !list) return;
  if (!holdings.length) {
    list.innerHTML='<div style="color:var(--text3);font-size:11px;font-family:\'Space Mono\',monospace;">종목 추가 후 표시</div>';
    if(donutInst){donutInst.destroy();donutInst=null;} return;
  }
  const vals=holdings.map(h=>(h.currentPrice||h.buyPrice)*h.shares);
  const total=vals.reduce((a,b)=>a+b,0);
  const labels=holdings.map(h=>h.symbol.replace('.KS','').replace('.KQ',''));
  if(donutInst)donutInst.destroy();
  donutInst=new Chart(canvas,{type:'doughnut',data:{labels,datasets:[{data:vals,backgroundColor:COLORS.slice(0,holdings.length),borderWidth:2,borderColor:'#0a0a0f',hoverOffset:5}]},options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>' '+(ctx.raw/total*100).toFixed(1)+'%'}}}}});
  list.innerHTML=holdings.map((h,i)=>{
    const pct=(vals[i]/total*100).toFixed(1);
    return `<div class="alloc-item"><div class="alloc-dot" style="background:${COLORS[i]}"></div><div class="alloc-name">${h.symbol.replace('.KS','').replace('.KQ','')}</div><div class="alloc-bar-bg"><div class="alloc-bar" style="width:${pct}%;background:${COLORS[i]}"></div></div><div class="alloc-pct">${pct}%</div></div>`;
  }).join('');
}

// ── Bar
function renderBar() {
  const canvas=document.getElementById('barChart'), wrap=document.getElementById('barWrap');
  if (!canvas || !wrap) return;
  if (!holdings.length) {
    canvas.style.display='none'; wrap.style.display='block';
    if(barInst){barInst.destroy();barInst=null;} return;
  }
  canvas.style.display='block'; wrap.style.display='none';
  const labels=holdings.map(h=>h.symbol.replace('.KS','').replace('.KQ',''));
  const data=holdings.map(h=>h.currentPrice?+((h.currentPrice-h.buyPrice)/h.buyPrice*100).toFixed(2):0);
  const colors=data.map(v=>v>=0?'rgba(0,212,170,.8)':'rgba(255,77,106,.8)');
  if(barInst)barInst.destroy();
  barInst=new Chart(canvas,{type:'bar',data:{labels,datasets:[{data,backgroundColor:colors,borderRadius:5,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>` ${ctx.raw.toFixed(2)}%`}}},scales:{x:{grid:{color:'rgba(42,42,62,.5)'},ticks:{color:'#8888aa',font:{family:'Space Mono',size:10}}},y:{grid:{color:'rgba(42,42,62,.5)'},ticks:{color:'#8888aa',font:{family:'Space Mono',size:10},callback:v=>v+'%'},border:{dash:[4,4]}}}}});
}

// ═══════════════════════════════════════
// CHART
// ═══════════════════════════════════════
function switchMode(mode) {
  chartMode=mode;
  const tabA = document.getElementById('tabA');
  const tabR = document.getElementById('tabR');
  const chartTitle = document.getElementById('chartTitle');
  const sliderPanel = document.getElementById('sliderPanel');
  if (tabA) tabA.classList.toggle('active',mode==='asset');
  if (tabR) tabR.classList.toggle('active',mode==='return');
  if (chartTitle) chartTitle.textContent=mode==='asset'?'자산 추이':'수익률 추이';
  if (mode==='return' && sliderPanel) sliderPanel.style.display='none';
  if (Object.keys(historyCache).length) drawChart();
}

async function loadChart() {
  if (!holdings.length) { toast('먼저 종목을 추가해주세요','err'); return; }
  const start=document.getElementById('dStart').value, end=document.getElementById('dEnd').value;
  if (!start||!end) { toast('날짜를 선택해주세요','err'); return; }

  const area=document.getElementById('chartArea'), canvas=document.getElementById('mainChart');
  if (area) {
    area.style.display='flex';
    area.innerHTML='<div class="empty"><span class="spin"></span>히스토리 로딩 중...</div>';
  }
  if (canvas) canvas.style.display='none';
  const sliderPanel = document.getElementById('sliderPanel');
  if (sliderPanel) sliderPanel.style.display='none';
  historyCache={};

  const errors=[];
  for (let i=0; i<holdings.length; i++) {
    const h=holdings[i], sym=h.symbol.replace('.KS','').replace('.KQ','');
    if (area) area.innerHTML=`<div class="empty"><span class="spin"></span>${sym} 조회 중... (${i+1}/${holdings.length})</div>`;
    try {
      const hist=await fetchHistory(h.symbol,start,end);
      if (!hist.length) { errors.push(sym+': 데이터 없음'); continue; }
      historyCache[h.symbol]=hist;
    } catch(e) {
      console.error(e); errors.push(sym+': '+e.message.slice(0,50));
    }
  }

  if (errors.length) toast('⚠️ '+errors.join(' / '),'err');

  if (!Object.keys(historyCache).length) {
    if (area) area.innerHTML=`<div class="empty">데이터를 불러오지 못했습니다<br><button class="btn-sm" style="margin-top:12px;" onclick="loadChart()">↻ 다시 시도</button></div>`;
    return;
  }
  drawChart();
}

function drawChart() {
  chartMode==='asset' ? drawAssetChart() : drawReturnChart();
}

function drawAssetChart() {
  const area=document.getElementById('chartArea'), canvas=document.getElementById('mainChart');
  if (area) area.style.display='none';
  if (canvas) canvas.style.display='block';

  const hMap={}; holdings.forEach(h=>hMap[h.symbol]=h);
  const allDates=[...new Set(Object.values(historyCache).flatMap(a=>a.map(d=>d.date)))].sort();
  const totalInv=holdings.reduce((s,h)=>s+h.buyPrice*h.shares,0);
  const isUS=holdings.every(h=>h.market==='US');

  const lastClose={};
  const assets=allDates.map(date=>{
    let tot=0,any=false;
    for(const [sym,hist] of Object.entries(historyCache)){
      const h=hMap[sym]; if(!h)continue;
      const found=hist.find(x=>x.date===date);
      if(found) lastClose[sym]=found.close;
      if(lastClose[sym]){tot+=lastClose[sym]*h.shares;any=true;}
    }
    return any?tot:null;
  });

  if(chartInst)chartInst.destroy();
  chartInst=new Chart(canvas,{
    type:'line',
    data:{datasets:[
      {label:'평가금액',data:allDates.map((d,i)=>({x:d,y:assets[i]})).filter(p=>p.y!=null),borderColor:'#7c5cfc',backgroundColor:'rgba(124,92,252,.1)',fill:true,tension:.3,pointRadius:0,borderWidth:2.5,yAxisID:'y',order:2},
      {label:'투자원금',data:allDates.map(d=>({x:d,y:totalInv})),borderColor:'rgba(85,85,106,.6)',fill:false,tension:0,pointRadius:0,borderWidth:1.5,borderDash:[5,4],yAxisID:'y',order:3},
      {label:'_cur',_cur:true,data:[{x:allDates[allDates.length-1],y:0},{x:allDates[allDates.length-1],y:totalInv*3}],borderColor:'rgba(0,212,170,.7)',fill:false,pointRadius:0,borderWidth:1.5,borderDash:[3,3],yAxisID:'y',order:1},
    ]},
    options:{
      responsive:true,animation:false,interaction:{mode:'none'},
      plugins:{legend:{display:true,position:'top',labels:{color:'#8888aa',font:{family:'Space Mono',size:10},boxWidth:10,padding:12,filter:i=>i.text!=='_cur'}},tooltip:{enabled:false}},
      scales:{
        x:{type:'category',grid:{color:'rgba(42,42,62,.4)'},ticks:{color:'#55556a',font:{family:'Space Mono',size:9},maxTicksLimit:10}},
        y:{grid:{color:'rgba(42,42,62,.4)'},border:{dash:[4,4]},ticks:{color:'#55556a',font:{family:'Space Mono',size:9},callback:v=>isUS?(v>=1e6?'$'+(v/1e6).toFixed(1)+'M':'$'+fNum(v,0)):(v>=1e8?'₩'+(v/1e8).toFixed(1)+'억':v>=1e4?'₩'+(v/1e4).toFixed(0)+'만':'₩'+fNum(v))}},
      },
    }
  });

  sliderDates=allDates;
  const sl=document.getElementById('dateSlider');
  if (sl) {
    sl.max=allDates.length-1; sl.value=allDates.length-1;
    const slMin = document.getElementById('slMin');
    const slMax = document.getElementById('slMax');
    if (slMin) slMin.textContent=allDates[0]||'';
    if (slMax) slMax.textContent=allDates[allDates.length-1]||'';
    const sliderPanel = document.getElementById('sliderPanel');
    if (sliderPanel) sliderPanel.style.display='block';
    onSlider(allDates.length-1);
  }
}

function drawReturnChart() {
  const area=document.getElementById('chartArea'), canvas=document.getElementById('mainChart');
  if (area) area.style.display='none';
  if (canvas) canvas.style.display='block';
  const sliderPanel = document.getElementById('sliderPanel');
  if (sliderPanel) sliderPanel.style.display='none';

  const datasets=Object.keys(historyCache).map((sym,i)=>{
    const hist=historyCache[sym], base=hist[0]?.close;
    if(!base)return null;
    return {label:sym.replace('.KS','').replace('.KQ',''),data:hist.map(d=>({x:d.date,y:+((d.close-base)/base*100).toFixed(2)})),borderColor:COLORS[i%COLORS.length],backgroundColor:COLORS[i%COLORS.length]+'18',fill:false,tension:.3,pointRadius:0,pointHoverRadius:4,borderWidth:2};
  }).filter(Boolean);

  if(chartInst)chartInst.destroy();
  chartInst=new Chart(canvas,{type:'line',data:{datasets},options:{responsive:true,interaction:{mode:'index',intersect:false},plugins:{legend:{display:true,position:'top',labels:{color:'#8888aa',font:{family:'Space Mono',size:10},boxWidth:10,padding:12}},tooltip:{backgroundColor:'#1a1a26',borderColor:'#2a2a3e',borderWidth:1,titleColor:'#8888aa',bodyColor:'#e8e8f0',callbacks:{title:c=>c[0]?.raw?.x||'',label:c=>{const s=c.raw.y>=0?'+':'';return ` ${c.dataset.label}: ${s}${c.raw.y.toFixed(2)}%`;}}}},scales:{x:{type:'category',grid:{color:'rgba(42,42,62,.4)'},ticks:{color:'#55556a',font:{family:'Space Mono',size:9},maxTicksLimit:10}},y:{grid:{color:'rgba(42,42,62,.4)'},border:{dash:[4,4]},ticks:{color:'#55556a',font:{family:'Space Mono',size:9},callback:v=>v.toFixed(1)+'%'}}}}});
}

// ═══════════════════════════════════════
// SLIDER
// ═══════════════════════════════════════
function onSlider(idx) {
  idx=+idx;
  const date=sliderDates[idx]; if(!date)return;
  const sliderDate = document.getElementById('sliderDate');
  if (sliderDate) sliderDate.textContent=date;

  const hMap={}; holdings.forEach(h=>hMap[h.symbol]=h);
  const lastClose={};
  for(let i=0;i<=idx;i++){
    const d=sliderDates[i];
    for(const [sym,hist] of Object.entries(historyCache)){
      const found=hist.find(x=>x.date===d); if(found)lastClose[sym]=found.close;
    }
  }

  let totalAsset=0;
  const totalInv=holdings.reduce((s,h)=>s+h.buyPrice*h.shares,0);
  const chips=[];
  for(const [sym,] of Object.entries(historyCache)){
    const h=hMap[sym]; if(!h)continue;
    const price=lastClose[sym]; if(!price)continue;
    const val=price*h.shares, inv=h.buyPrice*h.shares;
    totalAsset+=val;
    chips.push({sym,h,val,pnl:val-inv,pct:(val-inv)/inv*100,price});
  }

  const totalPnl=totalAsset-totalInv, totalPct=totalInv>0?totalPnl/totalInv*100:0;
  const isUS=holdings.every(x=>x.market==='US'), dec=isUS?2:0, cur=isUS?'$':'₩';
  const s=totalPnl>=0?'+':'';

  const sliderStats = document.getElementById('sliderStats');
  if (sliderStats) {
    sliderStats.innerHTML=`
      <div class="sstat"><div class="sstat-label">평가금액</div><div class="sstat-val" style="color:var(--text);">${cur}${fNum(totalAsset,dec)}</div></div>
      <div class="sstat"><div class="sstat-label">손익</div><div class="sstat-val ${totalPnl>=0?'up':'down'}">${s}${cur}${fNum(totalPnl,dec)}</div></div>
      <div class="sstat"><div class="sstat-label">수익률</div><div class="sstat-val ${totalPct>=0?'up':'down'}">${s}${totalPct.toFixed(2)}%</div></div>`;
  }

  const sliderChips = document.getElementById('sliderChips');
  if (sliderChips) {
    sliderChips.innerHTML=chips.map(r=>{
      const sign=r.pct>=0?'+':'', d=r.h.market==='US'?2:0, c=r.h.market==='US'?'$':'₩';
      const sym=r.sym.replace('.KS','').replace('.KQ','');
      return `<div class="chip"><div class="chip-sym">${sym}</div><div class="chip-price">${c}${fNum(r.price,d)}</div><div class="chip-pct ${r.pct>=0?'up':'down'}">${sign}${r.pct.toFixed(2)}%</div></div>`;
    }).join('');
  }

  // Move cursor
  if(chartInst&&chartMode==='asset'){
    const ds=chartInst.data.datasets.find(d=>d._cur);
    if(ds){
      const yMax=chartInst.scales?.y?.max||totalInv*2, yMin=chartInst.scales?.y?.min||0;
      ds.data=[{x:date,y:yMin},{x:date,y:yMax}];
      chartInst.update('none');
    }
  }
}

// ═══════════════════════════════════════
// REFRESH PRICES
// ═══════════════════════════════════════
async function refreshPrices() {
  if(!holdings.length)return;
  const icon=document.getElementById('refIcon');
  if (icon) icon.style.animation='sp .7s linear infinite';
  priceCache={};
  let ok=0;
  for(const h of holdings){
    try{ const info=await fetchPrice(h.symbol); h.currentPrice=info.price; h.prevClose=info.prevClose; ok++; }
    catch(e){ console.error(e); }
  }
  save(); renderCards(); renderHoldings(); renderDonut(); renderBar();
  if (icon) icon.style.animation='';
  toast(`✅ ${ok}/${holdings.length}개 종목 업데이트 완료`);
}

// Expose to window
window.addHolding = addHolding;
window.removeHolding = removeHolding;
window.switchMode = switchMode;
window.loadChart = loadChart;
window.onSlider = onSlider;
window.refreshPrices = refreshPrices;

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  if(holdings.length) refreshPrices();
});
