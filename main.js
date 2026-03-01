// ═══════════════════════════════════════
// I18N DICTIONARY
// ═══════════════════════════════════════
const i18n = {
  ko: {
    title: "포트폴리오 대시보드",
    logo_sub: "대시보드",
    ai_sync: "AI 데이터 연동",
    summary_invested: "총 투자금액",
    summary_current: "현재 평가금액",
    summary_pnl: "총 손익",
    summary_return: "수익률",
    basis_buy: "매수가 기준",
    basis_market: "시장가 기준",
    unrealized_pnl: "미실현 손익",
    entire_portfolio: "전체 포트폴리오",
    add_title: "종목 추가",
    label_ticker: "종목 코드",
    label_currency: "통화",
    label_price: "매수가",
    label_shares: "수량 (주)",
    opt_usd: "🇺🇸 달러 (USD)",
    opt_krw: "🇰🇷 원화 (KRW)",
    btn_add: "+ 추가",
    chart_asset: "자산 추이",
    chart_return: "수익률 추이",
    tab_asset: "자산",
    tab_return: "수익률",
    btn_load: "조회",
    holdings_title: "보유 종목",
    btn_refresh: "새로고침",
    allocation_title: "비중 배분",
    pnl_by_asset: "종목별 손익률",
    empty_holdings: "아직 추가된 종목이 없습니다",
    empty_chart: "종목을 추가하면 그래프가 표시됩니다",
    empty_after_add: "종목 추가 후 표시",
    toast_added: "추가 완료!",
    toast_updated: "업데이트 완료",
    toast_input_ticker: "종목 코드를 입력하세요",
    toast_input_price: "매수가를 입력하세요",
    toast_input_shares: "수량을 입력하세요",
    toast_fetch_fail: "조회 실패 — 종목 코드를 확인하세요",
    toast_loading: "📡 데이터 조회 중...",
    asset_val: "평가금액",
    pnl_val: "손익",
    return_val: "수익률",
    loading_history: "히스토리 로딩 중...",
    fetching_stock: "조회 중...",
    data_not_found: "데이터를 불러오지 못했습니다",
    ex_rate: "적용 환율"
  },
  en: {
    title: "Portfolio Dashboard",
    logo_sub: "Dashboard",
    ai_sync: "AI Sync Active",
    summary_invested: "Total Invested",
    summary_current: "Current Value",
    summary_pnl: "Total P&L",
    summary_return: "Return Rate",
    basis_buy: "Based on Buy Price",
    basis_market: "Based on Market Price",
    unrealized_pnl: "Unrealized P&L",
    entire_portfolio: "Entire Portfolio",
    add_title: "Add Asset",
    label_ticker: "Symbol",
    label_currency: "Currency",
    label_price: "Buy Price",
    label_shares: "Shares",
    opt_usd: "🇺🇸 USD",
    opt_krw: "🇰🇷 KRW",
    btn_add: "+ Add",
    chart_asset: "Asset Trend",
    chart_return: "Return Trend",
    tab_asset: "Asset",
    tab_return: "Return",
    btn_load: "Load",
    holdings_title: "Holdings",
    btn_refresh: "Refresh",
    allocation_title: "Allocation",
    pnl_by_asset: "P&L by Asset",
    empty_holdings: "No assets added yet",
    empty_chart: "Add an asset to see the chart",
    empty_after_add: "Shown after adding",
    toast_added: "Added successfully!",
    toast_updated: "Updated successfully",
    toast_input_ticker: "Enter ticker symbol",
    toast_input_price: "Enter buy price",
    toast_input_shares: "Enter shares quantity",
    toast_fetch_fail: "Fetch failed — Check ticker symbol",
    toast_loading: "📡 Fetching data...",
    asset_val: "Value",
    pnl_val: "P&L",
    return_val: "Return",
    loading_history: "Loading history...",
    fetching_stock: "Fetching...",
    data_not_found: "Data not found",
    ex_rate: "Exchange Rate"
  }
};

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let currentLang  = localStorage.getItem('ph2_lang') || 'ko';
let holdings     = JSON.parse(localStorage.getItem('ph2_holdings') || '[]');
let usdKrwRate   = 1350; // 기본값
let priceCache   = {};
let historyCache = {};
let chartInst = null, donutInst = null, barInst = null;
let chartMode = 'asset';
let sliderDates = [];
const COLORS = ['#7c5cfc','#00d4aa','#ff4d6a','#f5a623','#4fc3f7','#81c784','#ce93d8','#ffb74d'];

// ═══════════════════════════════════════
// I18N ENGINE
// ═══════════════════════════════════════
function changeLang(lang) {
  currentLang = lang;
  localStorage.setItem('ph2_lang', lang);
  updateUI();
  renderAll();
}

function updateUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      if (key === 'ai_sync') {
        el.innerHTML = `<span class="pulse"></span>${i18n[currentLang][key]}`;
      } else {
        el.textContent = i18n[currentLang][key];
      }
    }
  });

  const logo = document.getElementById('logo');
  if (logo) {
    logo.innerHTML = currentLang === 'ko' ? `포트폴리오 <span>대시보드</span>` : `PORTFOLIO <span>DASHBOARD</span>`;
  }

  document.getElementById('lang-ko').classList.toggle('active', currentLang === 'ko');
  document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
  
  const chartTitle = document.getElementById('chartTitle');
  if (chartTitle) {
    chartTitle.textContent = chartMode === 'asset' ? i18n[currentLang].chart_asset : i18n[currentLang].chart_return;
  }
  
  updateExchangeRateDisplay();
}

function updateExchangeRateDisplay() {
  const el = document.getElementById('exRateDisplay');
  if (el) {
    el.textContent = `${i18n[currentLang].ex_rate}: ₩${usdKrwRate.toLocaleString('ko-KR', {minimumFractionDigits: 2})}`;
  }
}

window.changeLang = changeLang;

// ═══════════════════════════════════════
// UTILS
// ═══════════════════════════════════════
const fNum = (n, d=0) => (n==null||isNaN(n)) ? '—' : n.toLocaleString(currentLang === 'ko' ? 'ko-KR' : 'en-US',{minimumFractionDigits:d,maximumFractionDigits:d});

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
    el.textContent = new Date().toLocaleString(currentLang === 'ko' ? 'ko-KR' : 'en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
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
// FREE DATA FETCHING
// ═══════════════════════════════════════
async function fetchFromYahoo(symbol, type = 'price', start = '', end = '') {
  const proxy = "https://api.allorigins.win/raw?url=";
  
  if (type === 'price') {
    try {
      const quoteUrl = `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;
      const qRes = await fetch(proxy + encodeURIComponent(quoteUrl));
      const qData = await qRes.json();
      const result = qData.quoteResponse.result[0];
      if (result && result.regularMarketPrice) {
        return {
          price: result.regularMarketPrice,
          prevClose: result.regularMarketPreviousClose,
          name: result.longName || result.shortName || symbol.split('.')[0],
          currency: result.currency,
          symbol: symbol
        };
      }
    } catch (e) { console.warn("Quote API failed"); }

    const chartUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`;
    const cRes = await fetch(proxy + encodeURIComponent(chartUrl));
    const cData = await cRes.json();
    const result = cData.chart.result[0];
    if (!result) throw new Error('Data not found');
    const meta = result.meta;
    return {
      price: meta.regularMarketPrice,
      prevClose: meta.previousClose || meta.chartPreviousClose,
      name: symbol.split('.')[0], 
      currency: meta.currency,
      symbol: symbol
    };
  } else {
    const period1 = Math.floor(new Date(start).getTime() / 1000);
    const period2 = Math.floor(new Date(end).getTime() / 1000);
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?period1=${period1}&period2=${period2}&interval=1d`;
    try {
      const response = await fetch(proxy + encodeURIComponent(url));
      const data = await response.json();
      const result = data.chart.result[0];
      if (!result || !result.timestamp) return [];
      const timestamps = result.timestamp;
      const quotes = result.indicators.quote[0].close;
      return timestamps.map((ts, i) => ({
        date: new Date(ts * 1000).toISOString().split('T')[0],
        close: quotes[i]
      })).filter(d => d.close != null);
    } catch (e) { return []; }
  }
}

async function updateUsdKrwRate() {
  try {
    const data = await fetchFromYahoo('USDKRW=X', 'price');
    if (data && data.price) {
      usdKrwRate = data.price;
      updateExchangeRateDisplay();
      renderAll();
    }
  } catch (e) { console.error("Failed to fetch exchange rate"); }
}

async function fetchPrice(symbol) {
  if (priceCache[symbol] && Date.now()-priceCache[symbol].ts < 60000)
    return priceCache[symbol].data;
  try {
    const r = await fetchFromYahoo(symbol, 'price');
    priceCache[symbol] = { data: r, ts: Date.now() };
    return r;
  } catch (error) { throw new Error(i18n[currentLang].toast_fetch_fail); }
}

async function fetchHistory(symbol, start, end) {
  const key = `${symbol}|${start}|${end}`;
  if (historyCache[key]) return historyCache[key];
  const arr = await fetchFromYahoo(symbol, 'history', start, end);
  if (arr.length > 0) historyCache[key] = arr;
  return arr;
}

// ═══════════════════════════════════════
// HOLDINGS CRUD
// ═══════════════════════════════════════
async function addHolding() {
  let ticker  = document.getElementById('inTicker').value.trim().toUpperCase();
  const currency = document.getElementById('inCurrency').value;
  const bpRaw = document.getElementById('inPrice').value;
  const shRaw = document.getElementById('inShares').value;

  if (!ticker)              { toast(i18n[currentLang].toast_input_ticker,'err'); return; }
  if (!bpRaw || +bpRaw<=0) { toast(i18n[currentLang].toast_input_price,'err'); return; }
  if (!shRaw || +shRaw<=0) { toast(i18n[currentLang].toast_input_shares,'err'); return; }
  
  // 한국 종목 자동 보정
  if (currency==='KRW' && !ticker.includes('.')) ticker += '.KS';

  const btn = document.getElementById('addBtn');
  btn.disabled = true;
  btn.innerHTML = `<span class="spin"></span>${i18n[currentLang].fetching_stock}`;
  toast(i18n[currentLang].toast_loading);

  try {
    const info = await fetchPrice(ticker);
    holdings.push({
      id: Date.now(),
      symbol: ticker, name: info.name, currency: currency,
      buyPrice: +bpRaw, shares: +shRaw,
      currentPrice: info.price, prevClose: info.prevClose,
    });
    save(); renderAll();
    toast(`✅ ${i18n[currentLang].toast_added}`);
    document.getElementById('inTicker').value  = '';
    document.getElementById('inPrice').value   = '';
    document.getElementById('inShares').value  = '';
  } catch(e) {
    toast('❌ ' + e.message, 'err');
  } finally {
    btn.disabled = false;
    btn.innerHTML = i18n[currentLang].btn_add;
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
    if (el) el.innerHTML = `<div class="empty">${i18n[currentLang].empty_chart}</div>`;
    const mainChart = document.getElementById('mainChart');
    if (mainChart) mainChart.style.display = 'none';
    const sliderPanel = document.getElementById('sliderPanel');
    if (sliderPanel) sliderPanel.style.display = 'none';
    historyCache = {};
  }
}

function renderCards() {
  if (!holdings.length) {
    ['cInvested','cCurrent','cPnl','cRet'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.textContent = '—'; el.className = 'card-val'; }
    });
    return;
  }
  
  let totalInvKrw = 0;
  let totalCurKrw = 0;

  holdings.forEach(h => {
    const rate = h.currency === 'USD' ? usdKrwRate : 1;
    totalInvKrw += (h.buyPrice * h.shares) * rate;
    totalCurKrw += ((h.currentPrice || h.buyPrice) * h.shares) * rate;
  });

  const pnl = totalCurKrw - totalInvKrw;
  const ret = totalInvKrw > 0 ? (pnl / totalInvKrw) * 100 : 0;

  document.getElementById('cInvested').textContent = `₩${fNum(totalInvKrw)}`;
  document.getElementById('cCurrent').textContent  = `₩${fNum(totalCurKrw)}`;
  
  const pe = document.getElementById('cPnl'), re = document.getElementById('cRet');
  if (pe) {
    pe.textContent = (pnl >= 0 ? '+' : '') + fNum(pnl);
    pe.className = 'card-val ' + (pnl >= 0 ? 'up' : 'down');
  }
  if (re) {
    re.textContent = (ret >= 0 ? '+' : '') + ret.toFixed(2) + '%';
    re.className = 'card-val ' + (ret >= 0 ? 'up' : 'down');
  }
}

function renderHoldings() {
  const el = document.getElementById('holdList');
  if (!el) return;
  if (!holdings.length) { el.innerHTML=`<div class="empty" style="padding:40px 10px;">${i18n[currentLang].empty_holdings}</div>`; return; }
  
  el.innerHTML = holdings.map(h => {
    const pnl = h.currentPrice ? (h.currentPrice-h.buyPrice)/h.buyPrice*100 : null;
    const cls = pnl==null?'':pnl>=0?'up':'down';
    const sign= pnl==null?'':pnl>=0?'+':'';
    const sym = h.symbol.replace('.KS','').replace('.KQ','');
    const isUsd = h.currency === 'USD';
    const badge = isUsd ? '<span class="badge badge-us">USD</span>' : '<span class="badge badge-kr">KRW</span>';
    
    return `<div class="h-item">
      <div style="flex:1; overflow:hidden;">
        <div class="h-ticker" style="display:flex; align-items:center; gap:4px;">${sym}${badge}</div>
        <div class="h-name" title="${h.name}">${h.name}</div>
        <div style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;margin-top:1px;">${h.shares}${currentLang==='ko'?'주':' Shares'}@${isUsd?'$':'₩'}${fNum(h.buyPrice,isUsd?2:0)}</div>
      </div>
      <div class="h-right">
        <div class="h-price ${cls}">${h.currentPrice?(isUsd?'$':'₩')+fNum(h.currentPrice,isUsd?2:0):'—'}</div>
        <div class="h-pct ${cls}">${pnl!=null?sign+pnl.toFixed(2)+'%':'—'}</div>
      </div>
      <button class="h-del" onclick="removeHolding(${h.id})">✕</button>
    </div>`;
  }).join('');
}

function renderDonut() {
  const canvas=document.getElementById('donut'), list=document.getElementById('allocList');
  if (!canvas || !list) return;
  if (!holdings.length) {
    list.innerHTML=`<div style="color:var(--text3);font-size:11px;font-family:'Space Mono',monospace;">${i18n[currentLang].empty_after_add}</div>`;
    if(donutInst){donutInst.destroy();donutInst=null;} return;
  }
  
  const valsKrw = holdings.map(h => {
    const rate = h.currency === 'USD' ? usdKrwRate : 1;
    return (h.currentPrice || h.buyPrice) * h.shares * rate;
  });
  
  const totalKrw = valsKrw.reduce((a,b)=>a+b,0);
  const labels = holdings.map(h=>h.symbol.replace('.KS','').replace('.KQ',''));
  
  if(donutInst)donutInst.destroy();
  donutInst = new Chart(canvas, {
    type:'doughnut',
    data:{labels,datasets:[{data:valsKrw,backgroundColor:COLORS.slice(0,holdings.length),borderWidth:2,borderColor:'#0a0a0f',hoverOffset:5}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>' '+(ctx.raw/totalKrw*100).toFixed(1)+'%'}}}}
  });
  
  list.innerHTML=holdings.map((h,i)=>{
    const pct=(valsKrw[i]/totalKrw*100).toFixed(1);
    return `<div class="alloc-item"><div class="alloc-dot" style="background:${COLORS[i]}"></div><div class="alloc-name">${h.symbol.replace('.KS','').replace('.KQ','')}</div><div class="alloc-bar-bg"><div class="alloc-bar" style="width:${pct}%;background:${COLORS[i]}"></div></div><div class="alloc-pct">${pct}%</div></div>`;
  }).join('');
}

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
  updateUI(); 
  document.getElementById('tabA').classList.toggle('active',mode==='asset');
  document.getElementById('tabR').classList.toggle('active',mode==='return');
  if (mode==='return' && document.getElementById('sliderPanel')) document.getElementById('sliderPanel').style.display='none';
  if (Object.keys(historyCache).length) drawChart();
}

async function loadChart() {
  if (!holdings.length) { toast(i18n[currentLang].empty_holdings,'err'); return; }
  const start=document.getElementById('dStart').value, end=document.getElementById('dEnd').value;
  if (!start||!end) { toast('Please select dates','err'); return; }

  const area=document.getElementById('chartArea'), canvas=document.getElementById('mainChart');
  if (area) {
    area.style.display='flex';
    area.innerHTML=`<div class="empty"><span class="spin"></span>${i18n[currentLang].loading_history}</div>`;
  }
  if (canvas) canvas.style.display='none';
  const sliderPanel = document.getElementById('sliderPanel');
  if (sliderPanel) sliderPanel.style.display='none';
  historyCache={};

  for (let i=0; i<holdings.length; i++) {
    const h=holdings[i], sym=h.symbol.replace('.KS','').replace('.KQ','');
    if (area) area.innerHTML=`<div class="empty"><span class="spin"></span>${sym} ${i18n[currentLang].fetching_stock} (${i+1}/${holdings.length})</div>`;
    const hist = await fetchHistory(h.symbol, start, end);
    if (hist && hist.length > 0) {
      historyCache[h.symbol] = hist;
    }
  }

  if (!Object.keys(historyCache).length) {
    if (area) area.innerHTML=`<div class="empty">${i18n[currentLang].data_not_found}<br><button class="btn-sm" style="margin-top:12px;" onclick="loadChart()">↻</button></div>`;
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
  
  let totalInvKrw = 0;
  holdings.forEach(h => {
    const rate = h.currency === 'USD' ? usdKrwRate : 1;
    totalInvKrw += (h.buyPrice * h.shares) * rate;
  });

  const lastClose={};
  const assetsKrw = allDates.map(date=>{
    let totKrw=0, any=false;
    for(const [sym,hist] of Object.entries(historyCache)){
      const h=hMap[sym]; if(!h)continue;
      const found=hist.find(x=>x.date===date);
      if(found) lastClose[sym]=found.close;
      if(lastClose[sym]){
        const rate = h.currency === 'USD' ? usdKrwRate : 1;
        totKrw += (lastClose[sym] * h.shares) * rate;
        any=true;
      }
    }
    return any?totKrw:null;
  });

  if(chartInst)chartInst.destroy();
  chartInst=new Chart(canvas,{
    type:'line',
    data:{datasets:[
      {label: i18n[currentLang].summary_current, data:allDates.map((d,i)=>({x:d,y:assetsKrw[i]})).filter(p=>p.y!=null),borderColor:'#7c5cfc',backgroundColor:'rgba(124,92,252,.1)',fill:true,tension:.3,pointRadius:0,borderWidth:2.5,yAxisID:'y',order:2},
      {label: i18n[currentLang].summary_invested, data:allDates.map(d=>({x:d,y:totalInvKrw})),borderColor:'rgba(85,85,106,.6)',fill:false,tension:0,pointRadius:0,borderWidth:1.5,borderDash:[5,4],yAxisID:'y',order:3},
      {label:'_cur',_cur:true,data:[{x:allDates[allDates.length-1],y:0},{x:allDates[allDates.length-1],y:totalInvKrw*3}],borderColor:'rgba(0,212,170,.7)',fill:false,pointRadius:0,borderWidth:1.5,borderDash:[3,3],yAxisID:'y',order:1},
    ]},
    options:{
      responsive:true,animation:false,interaction:{mode:'none'},
      plugins:{legend:{display:true,position:'top',labels:{color:'#8888aa',font:{family:'Space Mono',size:10},boxWidth:10,padding:12,filter:i=>i.text!=='_cur'}},tooltip:{enabled:false}},
      scales:{
        x:{type:'category',grid:{color:'rgba(42,42,62,.4)'},ticks:{color:'#55556a',font:{family:'Space Mono',size:9},maxTicksLimit:10}},
        y:{grid:{color:'rgba(42,42,62,.4)'},border:{dash:[4,4]},ticks:{color:'#55556a',font:{family:'Space Mono',size:9},callback:v=>(v>=1e8?'₩'+(v/1e8).toFixed(1)+'억':v>=1e4?'₩'+(v/1e4).toFixed(0)+'만':'₩'+fNum(v))}},
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

  let totalAssetKrw = 0;
  let totalInvKrw = 0;
  holdings.forEach(h => {
    const rate = h.currency === 'USD' ? usdKrwRate : 1;
    totalInvKrw += (h.buyPrice * h.shares) * rate;
  });

  const chips=[];
  for(const [sym,] of Object.entries(historyCache)){
    const h=hMap[sym]; if(!h)continue;
    const price=lastClose[sym]; if(!price)continue;
    const rate = h.currency === 'USD' ? usdKrwRate : 1;
    const valKrw = (price * h.shares) * rate;
    const invKrw = (h.buyPrice * h.shares) * rate;
    totalAssetKrw += valKrw;
    chips.push({sym,h,valKrw,pnlKrw:valKrw-invKrw,pct:(valKrw-invKrw)/invKrw*100,price});
  }

  const totalPnlKrw = totalAssetKrw - totalInvKrw;
  const totalPct = totalInvKrw > 0 ? (totalPnlKrw / totalInvKrw) * 100 : 0;
  const s = totalPnlKrw >= 0 ? '+' : '';

  const sliderStats = document.getElementById('sliderStats');
  if (sliderStats) {
    sliderStats.innerHTML=`
      <div class="sstat"><div class="sstat-label">${i18n[currentLang].asset_val}</div><div class="sstat-val" style="color:var(--text);">₩${fNum(totalAssetKrw)}</div></div>
      <div class="sstat"><div class="sstat-label">${i18n[currentLang].pnl_val}</div><div class="sstat-val ${totalPnlKrw>=0?'up':'down'}">${s}₩${fNum(totalPnlKrw)}</div></div>
      <div class="sstat"><div class="sstat-label">${i18n[currentLang].return_val}</div><div class="sstat-val ${totalPct>=0?'up':'down'}">${s}${totalPct.toFixed(2)}%</div></div>`;
  }

  const sliderChips = document.getElementById('sliderChips');
  if (sliderChips) {
    sliderChips.innerHTML=chips.map(r=>{
      const sign=r.pct>=0?'+':'', d=r.h.currency==='USD'?2:0, c=r.h.currency==='USD'?'$':'₩';
      const sym=r.sym.replace('.KS','').replace('.KQ','');
      return `<div class="chip"><div class="chip-sym">${sym}</div><div class="chip-price">${c}${fNum(r.price,d)}</div><div class="chip-pct ${r.pct>=0?'up':'down'}">${sign}${r.pct.toFixed(2)}%</div></div>`;
    }).join('');
  }

  if(chartInst&&chartMode==='asset'){
    const ds=chartInst.data.datasets.find(d=>d._cur);
    if(ds){
      const yMax=chartInst.scales?.y?.max||totalInvKrw*2, yMin=chartInst.scales?.y?.min||0;
      ds.data=[{x:date,y:yMin},{x:date,y:yMax}];
      chartInst.update('none');
    }
  }
}

async function refreshPrices() {
  if(!holdings.length) return;
  const icon=document.getElementById('refIcon');
  if (icon) icon.style.animation='sp .7s linear infinite';
  priceCache={};
  await updateUsdKrwRate(); // 환율도 함께 갱신
  let ok=0;
  for(const h of holdings){
    try{ const info=await fetchPrice(h.symbol); h.currentPrice=info.price; h.prevClose=info.prevClose; h.name=info.name; ok++; }
    catch(e){ console.error(e); }
  }
  save(); renderCards(); renderHoldings(); renderDonut(); renderBar();
  if (icon) icon.style.animation='';
  toast(`✅ ${i18n[currentLang].toast_updated}`);
}

window.addHolding = addHolding;
window.removeHolding = removeHolding;
window.switchMode = switchMode;
window.loadChart = loadChart;
window.onSlider = onSlider;
window.refreshPrices = refreshPrices;

document.addEventListener('DOMContentLoaded', async () => {
  await updateUsdKrwRate(); // 환율 먼저 가져오기
  updateUI();
  renderAll();
});
