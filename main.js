// ═══════════════════════════════════════
// I18N DICTIONARY
// ═══════════════════════════════════════
const i18n = {
  ko: {
    title: "Multifolios",
    ai_sync: "실시간 데이터 연동",
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
    label_currency: "기준 통화",
    label_price: "매수가",
    label_shares: "수량 (주)",
    opt_usd: "🇺🇸 달러 (USD)",
    opt_krw: "🇰🇷 원화 (KRW)",
    opt_jpy: "🇯🇵 엔화 (JPY)",
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
    toast_fetch_fail: "데이터를 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.",
    toast_loading: "📡 데이터 조회 중...",
    asset_val: "평가금액",
    pnl_val: "손익",
    return_val: "수익률",
    loading_history: "히스토리 로딩 중...",
    fetching_stock: "조회 중...",
    data_not_found: "데이터를 불러오지 못했습니다",
    ex_rate: "적용 환율",
    display_currency: "표시 통화",
    label_account: "계좌",
    opt_no_account: "계좌 없음",
    all_accounts: "전체",
    no_account: "미분류",
    acc_placeholder: "계좌명 (예: 키움)",
    toast_acc_exists: "이미 존재하는 계좌명입니다",
    login: "로그인",
    logout: "로그아웃",
    login_title: "클라우드 동기화",
    login_desc: "로그인하면 데이터가 클라우드에 저장되어 기기 간 동기화가 가능합니다.",
    login_google: "Google로 로그인",
    or: "또는",
    label_email: "이메일",
    label_password: "비밀번호",
    login_btn: "로그인",
    signup_btn: "회원가입",
    toast_login_ok: "로그인 완료!",
    toast_logout_ok: "로그아웃 완료",
    toast_no_data: "데이터 없음",
    contact_subject_ph: "문의 제목",
    contact_message_ph: "문의 내용을 입력해 주세요.",
    hero_headline: "언제까지 계좌 하나하나 볼꺼야?<br><span>한꺼번에 확인해!</span>",
    hero_sub: "미국 · 한국 · 일본 주식을 하나의 대시보드에서",
    intro_hide: "소개 접기",
    intro_show: "소개 펼치기",
    intro_title1: "복수국가의 증권계좌 관리가능",
    intro_desc1: "Multifolios에서는 국가와 상관없이 복수 계좌의 포트폴리오 관리가 가능합니다. 미국(NYSE·NASDAQ), 한국(KRX) 등 다양한 시장의 자산을 한눈에 확인하세요.",
    intro_title2: "수익률 그래프",
    intro_desc2: "기간별 자산 추이와 종목별 수익률을 인터랙티브 그래프로 확인하세요. 날짜를 선택하면 해당 시점의 포트폴리오 현황을 볼 수 있습니다.",
    intro_title3: "클라우드 동기화",
    intro_desc3: "로그인하면 PC, 태블릿, 스마트폰 어디서든 동일한 복수 증권계좌의 포트폴리오 데이터를 관리할 수 있습니다.",
    footer_desc: "미국·한국 주식 포트폴리오를 무료로 관리하세요. 실시간 주가, 수익률 차트, 자산 배분 분석을 제공합니다.",
    footer_privacy: "개인정보처리방침",
    footer_contact: "문의하기",
    contact_title: "문의하기",
    contact_desc: "궁금한 점이나 개선 사항을 보내주세요. 빠르게 답변 드리겠습니다.",
    contact_email: "이메일",
    contact_subject: "제목",
    contact_message: "내용",
    contact_send: "보내기",
    contact_cancel: "닫기",
    contact_ok: "문의가 접수되었습니다. 감사합니다!",
    contact_err: "전송에 실패했습니다. 다시 시도해 주세요."
  },
  en: {
    title: "Multifolios",
    ai_sync: "Real-time Sync",
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
    label_currency: "Base Currency",
    label_price: "Buy Price",
    label_shares: "Shares",
    opt_usd: "🇺🇸 USD",
    opt_krw: "🇰🇷 KRW",
    opt_jpy: "🇯🇵 JPY",
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
    toast_fetch_fail: "Fetch failed — Please try again.",
    toast_loading: "📡 Fetching data...",
    asset_val: "Value",
    pnl_val: "P&L",
    return_val: "Return",
    loading_history: "Loading history...",
    fetching_stock: "Fetching...",
    data_not_found: "Data not found",
    ex_rate: "Exchange Rate",
    display_currency: "Display Unit",
    label_account: "Account",
    opt_no_account: "No Account",
    all_accounts: "All",
    no_account: "Unassigned",
    acc_placeholder: "Account name",
    toast_acc_exists: "Account name already exists",
    login: "Login",
    logout: "Logout",
    login_title: "Cloud Sync",
    login_desc: "Sign in to save your data to the cloud and sync across devices.",
    login_google: "Sign in with Google",
    or: "OR",
    label_email: "Email",
    label_password: "Password",
    login_btn: "Sign In",
    signup_btn: "Sign Up",
    toast_login_ok: "Signed in!",
    toast_logout_ok: "Signed out",
    toast_no_data: "No data",
    contact_subject_ph: "Subject",
    contact_message_ph: "Enter your message here.",
    hero_headline: "Stop checking accounts one by one.<br><span>See them all at once!</span>",
    hero_sub: "US · Korean · Japanese stocks in one dashboard",
    intro_hide: "Hide intro",
    intro_show: "Show intro",
    intro_title1: "Multi-Country Account Management",
    intro_desc1: "Multifolios lets you manage multiple brokerage accounts across any country. Track US (NYSE·NASDAQ), Korean (KRX), and other markets all in one place.",
    intro_title2: "Return Charts",
    intro_desc2: "Visualize asset trends and per-stock returns with interactive charts. Select any date to see your portfolio snapshot.",
    intro_title3: "Cloud Sync",
    intro_desc3: "Sign in to manage multiple brokerage account portfolios from any device — PC, tablet, or smartphone.",
    footer_desc: "Free portfolio tracker for US & Korean stocks. Real-time prices, return charts, and allocation analysis.",
    footer_privacy: "Privacy Policy",
    footer_contact: "Contact",
    contact_title: "Contact Us",
    contact_desc: "Send us your questions or feedback. We'll get back to you as soon as possible.",
    contact_email: "Email",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_send: "Send",
    contact_cancel: "Close",
    contact_ok: "Your message has been sent. Thank you!",
    contact_err: "Failed to send. Please try again."
  },
  ja: {
    title: "Multifolios",
    ai_sync: "リアルタイム同期",
    summary_invested: "総投資額",
    summary_current: "現在評価額",
    summary_pnl: "損益",
    summary_return: "リターン",
    basis_buy: "取得価額基準",
    basis_market: "時価基準",
    unrealized_pnl: "含み損益",
    entire_portfolio: "ポートフォリオ全体",
    add_title: "銘柄追加",
    label_ticker: "ティッカー",
    label_currency: "通貨",
    label_price: "取得単価",
    label_shares: "株数",
    opt_usd: "🇺🇸 ドル (USD)",
    opt_krw: "🇰🇷 ウォン (KRW)",
    opt_jpy: "🇯🇵 円 (JPY)",
    btn_add: "+ 追加",
    chart_asset: "資産推移",
    chart_return: "リターン推移",
    tab_asset: "資産",
    tab_return: "リターン",
    btn_load: "表示",
    holdings_title: "保有銘柄",
    btn_refresh: "更新",
    allocation_title: "配分",
    pnl_by_asset: "銘柄別損益率",
    empty_holdings: "銘柄を追加してください",
    empty_chart: "銘柄を追加するとグラフが表示されます",
    empty_after_add: "銘柄追加後に表示",
    toast_added: "追加しました！",
    toast_updated: "更新しました",
    toast_input_ticker: "ティッカーを入力してください",
    toast_input_price: "取得単価を入力してください",
    toast_input_shares: "株数を入力してください",
    toast_fetch_fail: "データを取得できません。しばらくしてからお試しください。",
    toast_loading: "📡 データ取得中...",
    asset_val: "評価額",
    pnl_val: "損益",
    return_val: "リターン",
    loading_history: "履歴読み込み中...",
    fetching_stock: "取得中...",
    data_not_found: "データを取得できませんでした",
    ex_rate: "適用レート",
    display_currency: "表示通貨",
    label_account: "口座",
    opt_no_account: "口座なし",
    all_accounts: "全て",
    no_account: "未分類",
    acc_placeholder: "口座名",
    toast_acc_exists: "同じ口座名が既に存在します",
    login: "ログイン",
    logout: "ログアウト",
    login_title: "クラウド同期",
    login_desc: "ログインするとデータがクラウドに保存され、デバイス間で同期できます。",
    login_google: "Googleでログイン",
    or: "または",
    label_email: "メール",
    label_password: "パスワード",
    login_btn: "ログイン",
    signup_btn: "新規登録",
    toast_login_ok: "ログインしました！",
    toast_logout_ok: "ログアウトしました",
    toast_no_data: "データなし",
    contact_subject_ph: "件名を入力してください",
    contact_message_ph: "お問い合わせ内容を入力してください。",
    hero_headline: "いつまで口座をひとつひとつ確認するの？<br><span>まとめて確認しよう！</span>",
    hero_sub: "米国・韓国・日本株をひとつのダッシュボードで",
    intro_hide: "紹介を閉じる",
    intro_show: "紹介を開く",
    intro_title1: "複数国の証券口座管理",
    intro_desc1: "Multifoliosでは、国を問わず複数の証券口座のポートフォリオ管理が可能です。米国(NYSE·NASDAQ)、韓国(KRX)など様々な市場の資産を一目で確認できます。",
    intro_title2: "リターングラフ",
    intro_desc2: "期間別の資産推移と銘柄別リターンをインタラクティブなグラフで確認できます。日付を選択するとその時点のポートフォリオ状況が表示されます。",
    intro_title3: "クラウド同期",
    intro_desc3: "ログインすると、PC・タブレット・スマートフォンどこからでも同じポートフォリオデータを管理できます。",
    footer_desc: "米国・韓国株の無料ポートフォリオトラッカー。リアルタイム株価、リターングラフ、配分分析を提供します。",
    footer_privacy: "プライバシーポリシー",
    footer_contact: "お問い合わせ",
    contact_title: "お問い合わせ",
    contact_desc: "ご質問やご意見をお送りください。迅速にご返答いたします。",
    contact_email: "メール",
    contact_subject: "件名",
    contact_message: "内容",
    contact_send: "送信",
    contact_cancel: "閉じる",
    contact_ok: "お問い合わせを受け付けました。ありがとうございます！",
    contact_err: "送信に失敗しました。もう一度お試しください。"
  }
};

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let currentLang     = localStorage.getItem('ph2_lang') || 'ko';
let displayCurrency = localStorage.getItem('ph2_display_cur') || 'KRW';
let currentTheme    = localStorage.getItem('ph2_theme') || 'dark';
let holdings        = JSON.parse(localStorage.getItem('ph2_holdings') || '[]');
let accounts        = JSON.parse(localStorage.getItem('ph2_accounts') || '[]');
let holdAccFilter   = 'all';        // 'all' | accountId | '__none__'
let chartAccFilter  = new Set();    // empty = 전체, otherwise Set of accountId
let usdKrwRate      = 1350;
let usdJpyRate      = 150;
let priceCache      = {};
let historyCache    = {};
let chartInst = null, donutInst = null, barInst = null;
let chartMode = 'asset';
let sliderDates = [];
const COLORS = ['#7c5cfc','#00d4aa','#ff4d6a','#f5a623','#4fc3f7','#81c784','#ce93d8','#ffb74d'];
let currentUser = null;

// ═══════════════════════════════════════
// I18N & CURRENCY ENGINE
// ═══════════════════════════════════════
function changeLang(lang) {
  currentLang = lang;
  localStorage.setItem('ph2_lang', lang);
  updateUI();
  renderAll();
  if (Object.keys(historyCache).length) drawChart();
}

function setDisplayCurrency(cur) {
  displayCurrency = cur;
  localStorage.setItem('ph2_display_cur', cur);
  updateUI();
  renderAll();
  if (Object.keys(historyCache).length) drawChart();
}

function getChartTheme() {
  const dark = currentTheme === 'dark';
  return {
    grid:         dark ? 'rgba(42,42,62,.4)'  : 'rgba(180,180,210,.5)',
    tick:         dark ? '#55556a'             : '#888899',
    legend:       dark ? '#8888aa'             : '#555577',
    tooltipBg:    dark ? '#1a1a26'             : '#ffffff',
    tooltipBorder:dark ? '#2a2a3e'             : '#d4d4e8',
    tooltipTitle: dark ? '#8888aa'             : '#888899',
    tooltipBody:  dark ? '#e8e8f0'             : '#1a1a2e',
    donutBorder:  dark ? '#0a0a0f'             : '#f0f0f7',
  };
}

function toggleIntroPanel() {
  const panel = document.getElementById('introPanel');
  const icon = document.getElementById('introToggleIcon');
  const text = document.getElementById('introToggleText');
  const isHidden = panel.style.display === 'none';
  panel.style.display = isHidden ? 'block' : 'none';
  icon.textContent = isHidden ? '▲' : '▼';
  text.textContent = isHidden ? i18n[currentLang].intro_hide : i18n[currentLang].intro_show;
  localStorage.setItem('ph2_intro_visible', isHidden ? '1' : '0');
}
window.toggleIntroPanel = toggleIntroPanel;

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('ph2_theme', currentTheme);
  applyTheme();
  if (Object.keys(historyCache).length) drawChart();
  renderAll();
}

function applyTheme() {
  document.body.classList.toggle('light', currentTheme === 'light');
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  if (currentTheme === 'light') {
    // moon icon (다크모드로 전환)
    btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>`;
    btn.title = '다크 모드로 전환';
  } else {
    // sun icon (라이트모드로 전환)
    btn.innerHTML = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    btn.title = '라이트 모드로 전환';
  }
}

function updateUI() {
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang][key]) el.placeholder = i18n[currentLang][key];
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      if (key === 'ai_sync') {
        el.innerHTML = `<span class="pulse"></span>${i18n[currentLang][key]}`;
      } else if (key === 'hero_headline') {
        el.innerHTML = i18n[currentLang][key];
      } else {
        el.textContent = i18n[currentLang][key];
      }
    }
  });

  document.getElementById('lang-ko').classList.toggle('active', currentLang === 'ko');
  document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
  const langJa = document.getElementById('lang-ja');
  if (langJa) langJa.classList.toggle('active', currentLang === 'ja');
  
  const curKo = document.getElementById('cur-krw');
  const curEn = document.getElementById('cur-usd');
  const curJp = document.getElementById('cur-jpy');
  if (curKo) curKo.classList.toggle('active', displayCurrency === 'KRW');
  if (curEn) curEn.classList.toggle('active', displayCurrency === 'USD');
  if (curJp) curJp.classList.toggle('active', displayCurrency === 'JPY');

  const chartTitle = document.getElementById('chartTitle');
  if (chartTitle) {
    chartTitle.textContent = chartMode === 'asset' ? i18n[currentLang].chart_asset : i18n[currentLang].chart_return;
  }
  updateExchangeRateDisplay();
  renderLoginUI();
}

function updateExchangeRateDisplay() {
  const el = document.getElementById('exRateDisplay');
  if (!el) return;
  if (displayCurrency === 'JPY' || currentLang === 'ja') {
    el.textContent = `${i18n[currentLang].ex_rate}: 1$ = ¥${fNum(usdJpyRate, 1)}`;
  } else {
    el.textContent = `${i18n[currentLang].ex_rate}: 1$ = ₩${fNum(usdKrwRate, 1)}`;
  }
}

window.changeLang = changeLang;
window.setDisplayCurrency = setDisplayCurrency;

// ═══════════════════════════════════════
// UTILS
// ═══════════════════════════════════════
const fNum = (n, d=0) => (n==null||isNaN(n)) ? '—' : n.toLocaleString(currentLang === 'ko' ? 'ko-KR' : currentLang === 'ja' ? 'ja-JP' : 'en-US',{minimumFractionDigits:d,maximumFractionDigits:d});

function toast(msg, type='ok') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = `toast ${type} show`;
  setTimeout(() => el.className = 'toast', 3500);
}

function updateClock() {
  const el = document.getElementById('htime');
  if (el) el.textContent = new Date().toLocaleString(currentLang === 'ko' ? 'ko-KR' : 'en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
}
setInterval(updateClock, 1000); updateClock();

(function initDates(){
  const e = new Date(), s = new Date();
  s.setMonth(s.getMonth()-1);
  const dEnd = document.getElementById('dEnd');
  const dStart = document.getElementById('dStart');
  if (dEnd) dEnd.value = e.toISOString().split('T')[0];
  if (dStart) dStart.value = s.toISOString().split('T')[0];
})();

// ═══════════════════════════════════════
// FETCHING ENGINE
// Primary: Firebase Cloud Functions (서버사이드, 안정적)
// Fallback: CORS 프록시 (Firebase Functions 실패 시)
// ═══════════════════════════════════════

// Firebase Functions 인스턴스 (지연 초기화)
let _fbFn = null;
function getFbFn() {
  if (!_fbFn) {
    try { _fbFn = firebase.functions(); } catch(e) {}
  }
  return _fbFn;
}

// Firebase Functions 호출
async function callFn(symbol, type, start, end) {
  const fn = getFbFn();
  if (!fn) throw new Error('Firebase not ready');
  const callable = fn.httpsCallable('getStockData', { timeout: 15000 });
  const res = await callable({ symbol, type, start, end });
  if (!res.data) throw new Error('Empty response from function');
  return res.data;
}

// CORS 프록시 폴백 (Firebase Functions 실패 시에만 사용)
async function fetchWithProxy(url) {
  const q2url = url.replace('query1.finance.yahoo.com', 'query2.finance.yahoo.com');
  const isValid = (d) => d && (d.chart || d.quoteResponse || d.spark || d.quoteSummary || Array.isArray(d.quotes) || Array.isArray(d));
  const enc = encodeURIComponent;

  const tryFetch = (proxyUrl, parser, name) => {
    const ctrl = new AbortController();
    const id = setTimeout(() => ctrl.abort(), 8000);
    return fetch(proxyUrl, { signal: ctrl.signal })
      .then(async r => {
        clearTimeout(id);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data = await parser(r);
        if (!isValid(data)) throw new Error('invalid response');
        return data;
      })
      .catch(e => { clearTimeout(id); console.warn(`[Proxy] ${name}:`, e.message); throw e; });
  };

  return Promise.any([
    tryFetch(`https://corsproxy.io/?${enc(url)}`,                       r => r.json(), 'CORS.IO/q1'),
    tryFetch(`https://corsproxy.io/?${enc(q2url)}`,                      r => r.json(), 'CORS.IO/q2'),
    tryFetch(`https://api.allorigins.win/raw?url=${enc(url)}`,            r => r.json(), 'ALLORIGINS/q1'),
    tryFetch(`https://api.allorigins.win/raw?url=${enc(q2url)}`,           r => r.json(), 'ALLORIGINS/q2'),
    tryFetch(`https://api.allorigins.win/get?url=${enc(url)}`,            async r => { const j = await r.json(); return JSON.parse(j.contents); }, 'ALLORIGINS_GET'),
    tryFetch(`https://api.codetabs.com/v1/proxy?quest=${enc(url)}`,        r => r.json(), 'CODETABS/q1'),
    tryFetch(`https://api.codetabs.com/v1/proxy?quest=${enc(q2url)}`,       r => r.json(), 'CODETABS/q2'),
    tryFetch(`https://thingproxy.freeboard.io/fetch/${url}`,               r => r.json(), 'THINGPROXY/q1'),
    tryFetch(`https://thingproxy.freeboard.io/fetch/${q2url}`,              r => r.json(), 'THINGPROXY/q2'),
  ]).catch(() => { throw new Error("데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."); });
}

// Yahoo Finance 파싱 (CORS 프록시 폴백용)
function parseYahooResponse(data, symbol, type, start) {
  const result = data.chart?.result?.[0];
  if (!result) throw new Error("종목 코드를 확인해 주세요: " + symbol);

  if (type === 'price') {
    const meta = result.meta;
    return {
      price: meta.regularMarketPrice,
      prevClose: meta.previousClose || meta.chartPreviousClose,
      name: symbol.split('.')[0],
      currency: meta.currency,
      symbol: symbol
    };
  } else {
    if (!result.timestamp) return [];
    const quotes = result.indicators?.quote?.[0]?.close;
    if (!quotes) return [];
    return result.timestamp.map((ts, i) => ({
      date: new Date(ts * 1000).toISOString().split('T')[0],
      close: quotes[i]
    })).filter(d => d.close != null);
  }
}

// 통합 데이터 조회: Firebase Functions → CORS 프록시 순서로 시도
async function fetchFromYahoo(symbol, type = 'price', start = '', end = '') {
  // 1차: Firebase Cloud Functions (서버사이드, 신뢰성 높음)
  try {
    const data = await callFn(symbol, type, start, end);
    console.log(`[Firebase Fn] ${type} ${symbol} ✓`);
    return data;
  } catch (e) {
    console.warn(`[Firebase Fn] ${type} ${symbol} failed, using proxy:`, e.message);
  }

  // 2차: CORS 프록시 폴백
  let url;
  if (type === 'price') {
    url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`;
  } else {
    const p1 = Math.floor(new Date(start).getTime() / 1000);
    const p2 = Math.floor(new Date(end).getTime() / 1000);
    url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?period1=${p1}&period2=${p2}&interval=1d`;
  }
  const raw = await fetchWithProxy(url);
  return parseYahooResponse(raw, symbol, type, start);
}

// 종목명 조회: Firebase Functions → CORS 프록시 순서
async function fetchStockName(symbol) {
  // 1차: Firebase Functions search
  try {
    const data = await callFn(symbol, 'search');
    if (data?.name && data.name !== symbol) return data.name;
  } catch (e) {}

  // 2차: CORS 프록시 search 폴백
  try {
    const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${symbol}`;
    const data = await fetchWithProxy(url);
    const quote = data.quotes?.[0];
    return quote ? (quote.longname || quote.shortname || symbol) : symbol;
  } catch (e) {
    return symbol;
  }
}

// 환율 조회: open.er-api.com (CORS 허용, 무료, 키 불필요) → Yahoo Finance 폴백
async function updateUsdKrwRate() {
  // 1차: open.er-api.com (실시간 환율, CORS 직접 지원)
  try {
    const ctrl = new AbortController();
    const id = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch('https://open.er-api.com/v6/latest/USD', { signal: ctrl.signal });
    clearTimeout(id);
    if (res.ok) {
      const data = await res.json();
      if (data.result === 'success' && data.rates?.KRW) {
        usdKrwRate = data.rates.KRW;
        if (data.rates?.JPY) usdJpyRate = data.rates.JPY;
        updateExchangeRateDisplay();
        renderAll();
        console.log(`[Exchange Rate] 1 USD = ₩${usdKrwRate}, ¥${usdJpyRate} (open.er-api)`);
        return;
      }
    }
  } catch (e) {
    console.warn('[Exchange Rate] open.er-api failed:', e.message);
  }

  // 2차: Yahoo Finance via Firebase Functions
  try {
    const data = await fetchFromYahoo('USDKRW=X', 'price');
    if (data?.price) {
      usdKrwRate = data.price;
      updateExchangeRateDisplay();
      renderAll();
      console.log(`[Exchange Rate] 1 USD = ₩${usdKrwRate} (Yahoo Finance)`);
    }
  } catch (e) {
    console.error('[Exchange Rate] All methods failed, using cached rate:', usdKrwRate);
  }
}

async function fetchPrice(symbol) {
  if (priceCache[symbol] && Date.now()-priceCache[symbol].ts < 60000)
    return priceCache[symbol].data;

  const [r, name] = await Promise.all([
    fetchFromYahoo(symbol, 'price'),
    fetchStockName(symbol)
  ]);
  // Firebase Functions는 이미 실제 이름 반환, 아닌 경우 search 결과 사용
  r.name = (name && name !== symbol.split('.')[0]) ? name : r.name;
  priceCache[symbol] = { data: r, ts: Date.now() };
  return r;
}

async function fetchHistory(symbol, start, end) {
  try {
    return await fetchFromYahoo(symbol, 'history', start, end);
  } catch (e) { return []; }
}

// ═══════════════════════════════════════
// HOLDINGS CRUD
// ═══════════════════════════════════════
async function addHolding() {
  let ticker  = document.getElementById('inTicker').value.trim().toUpperCase();
  const currency = document.getElementById('inCurrency').value;
  const bpRaw = document.getElementById('inPrice').value;
  const shRaw = document.getElementById('inShares').value;
  const accountId = document.getElementById('inAccount')?.value || null;

  if (!ticker) { toast(i18n[currentLang].toast_input_ticker,'err'); return; }
  if (!bpRaw || +bpRaw<=0) { toast(i18n[currentLang].toast_input_price,'err'); return; }
  if (!shRaw || +shRaw<=0) { toast(i18n[currentLang].toast_input_shares,'err'); return; }

  if (currency==='KRW' && !ticker.includes('.') && /^\d+$/.test(ticker)) ticker += '.KS';
  if (currency==='JPY' && !ticker.includes('.') && /^\d+$/.test(ticker)) ticker += '.T';

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
      accountId: accountId || null,
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

function save() {
  localStorage.setItem('ph2_holdings', JSON.stringify(holdings));
  localStorage.setItem('ph2_accounts', JSON.stringify(accounts));
  saveToFirestore();
}

// ═══════════════════════════════════════
// AUTH & CLOUD SYNC
// ═══════════════════════════════════════
let _db = null;
function getDb() {
  if (!_db) {
    try { _db = firebase.firestore(); } catch(e) {}
  }
  return _db;
}

let _saveTimer = null;
function saveToFirestore() {
  if (!currentUser) return;
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(saveToFirestoreNow, 800);
}

async function saveToFirestoreNow() {
  if (!currentUser) return;
  const db = getDb();
  if (!db) return;
  try {
    await db.collection('users').doc(currentUser.uid).set({
      holdings,
      accounts,
      updatedAt: new Date().toISOString()
    });
    console.log('[Firestore] Saved');
  } catch(e) {
    console.error('[Firestore] Save failed:', e);
  }
}

async function loadFromFirestore() {
  if (!currentUser) return;
  const db = getDb();
  if (!db) return;
  try {
    const doc = await db.collection('users').doc(currentUser.uid).get();
    if (doc.exists) {
      const data = doc.data();
      holdings = data.holdings || [];
      accounts = data.accounts || [];
      localStorage.setItem('ph2_holdings', JSON.stringify(holdings));
      localStorage.setItem('ph2_accounts', JSON.stringify(accounts));
      console.log('[Firestore] Loaded from cloud');
    } else {
      // New user: migrate local data to cloud
      await saveToFirestoreNow();
      console.log('[Firestore] Migrated local data to cloud');
    }
  } catch(e) {
    console.error('[Firestore] Load failed:', e);
  }
}

function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => closeLoginModal())
    .catch(e => setAuthError(e.message));
}

function loginWithEmail() {
  const email = document.getElementById('authEmail')?.value?.trim();
  const password = document.getElementById('authPassword')?.value;
  if (!email || !password) { setAuthError('이메일과 비밀번호를 입력하세요'); return; }
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => closeLoginModal())
    .catch(e => setAuthError(e.message));
}

function signupWithEmail() {
  const email = document.getElementById('authEmail')?.value?.trim();
  const password = document.getElementById('authPassword')?.value;
  if (!email || !password) { setAuthError('이메일과 비밀번호를 입력하세요'); return; }
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => closeLoginModal())
    .catch(e => setAuthError(e.message));
}

function logout() {
  firebase.auth().signOut();
}

function openContactModal() {
  const m = document.getElementById('contactModal');
  if (m) { m.style.display = 'flex'; document.getElementById('contactStatus').textContent = ''; }
}
function closeContactModal() {
  const m = document.getElementById('contactModal');
  if (m) {
    m.style.display = 'none';
    document.getElementById('contactForm').reset();
    document.getElementById('contactStatus').textContent = '';
  }
}
async function submitContact(e) {
  e.preventDefault();
  const btn = document.getElementById('contactSubmitBtn');
  const status = document.getElementById('contactStatus');
  btn.disabled = true;
  btn.textContent = '...';
  try {
    const res = await fetch('https://formspree.io/f/mbdzjwez', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(document.getElementById('contactForm'))
    });
    if (res.ok) {
      status.style.color = 'var(--green)';
      status.textContent = i18n[currentLang].contact_ok;
      document.getElementById('contactForm').reset();
      setTimeout(closeContactModal, 2500);
    } else {
      status.style.color = 'var(--red)';
      status.textContent = i18n[currentLang].contact_err;
    }
  } catch {
    status.style.color = 'var(--red)';
    status.textContent = i18n[currentLang].contact_err;
  }
  btn.disabled = false;
  btn.textContent = i18n[currentLang].contact_send;
}

function openLoginModal() {
  const m = document.getElementById('loginModal');
  if (m) { m.style.display = 'flex'; setAuthError(''); }
}

function closeLoginModal() {
  const m = document.getElementById('loginModal');
  if (m) m.style.display = 'none';
  const email = document.getElementById('authEmail');
  const password = document.getElementById('authPassword');
  if (email) email.value = '';
  if (password) password.value = '';
  setAuthError('');
}

function setAuthError(msg) {
  const el = document.getElementById('authError');
  if (el) el.textContent = msg;
}

function renderLoginUI() {
  const area = document.getElementById('loginArea');
  if (!area) return;
  if (currentUser) {
    const name = currentUser.displayName || currentUser.email || 'User';
    const initial = name.charAt(0).toUpperCase();
    const photoUrl = currentUser.photoURL;
    const avatar = photoUrl
      ? `<img class="user-avatar" src="${photoUrl}" alt="${initial}">`
      : `<div class="user-avatar-init">${initial}</div>`;
    area.innerHTML = `<div class="user-info">${avatar}<span class="user-name">${name}</span><button class="btn-sm" onclick="logout()">${i18n[currentLang].logout}</button></div>`;
  } else {
    area.innerHTML = `<button class="btn-sm" onclick="openLoginModal()">${i18n[currentLang].login}</button>`;
  }
}

// ═══════════════════════════════════════
// ACCOUNT MANAGEMENT
// ═══════════════════════════════════════
function getAccName(id) {
  if (!id) return i18n[currentLang].no_account;
  return accounts.find(a => a.id === id)?.name || i18n[currentLang].no_account;
}

function getFilteredHoldings(filter) {
  if (!filter || filter === 'all') return holdings;
  if (filter === '__none__') return holdings.filter(h => !h.accountId);
  return holdings.filter(h => h.accountId === filter);
}

function getChartHoldings() {
  if (chartAccFilter.size === 0) return holdings;
  return holdings.filter(h => {
    if (!h.accountId) return chartAccFilter.has('__none__');
    return chartAccFilter.has(h.accountId);
  });
}

function addAccount() {
  const input = document.getElementById('inAccountName');
  const name = input?.value?.trim();
  if (!name) return;
  if (accounts.find(a => a.name === name)) { toast(i18n[currentLang].toast_acc_exists, 'err'); return; }
  accounts.push({ id: 'acc_' + Date.now(), name });
  save();
  input.value = '';
  renderAccountUI();
}

function removeAccount(id) {
  accounts = accounts.filter(a => a.id !== id);
  holdings.forEach(h => { if (h.accountId === id) h.accountId = null; });
  if (holdAccFilter === id) holdAccFilter = 'all';
  chartAccFilter.delete(id);
  save();
  renderAccountUI();
  renderAll();
}

function setHoldAccFilter(filter) {
  holdAccFilter = filter;
  renderAccountTabs();
  renderCards();
  renderHoldings();
  renderDonut();
  renderBar();
}

function toggleChartAccFilter(id) {
  // 처음 클릭 시: 전체에서 특정 계좌 제외 모드로 전환
  if (chartAccFilter.size === 0) {
    const allIds = accounts.map(a => a.id);
    if (holdings.some(h => !h.accountId)) allIds.push('__none__');
    allIds.forEach(i => chartAccFilter.add(i));
    chartAccFilter.delete(id);
  } else {
    if (chartAccFilter.has(id)) {
      chartAccFilter.delete(id);
      // 모두 선택 상태면 Set 초기화 (= 전체 선택)
      const allIds = accounts.map(a => a.id);
      if (holdings.some(h => !h.accountId)) allIds.push('__none__');
      if (allIds.every(i => chartAccFilter.has(i))) chartAccFilter.clear();
    } else {
      chartAccFilter.add(id);
    }
  }
  renderChartAccFilter();
  if (Object.keys(historyCache).length) drawChart();
}

function renderAccountUI() {
  renderAccountOptions();
  renderAccountTags();
  renderAccountTabs();
  renderChartAccFilter();
}

function renderAccountOptions() {
  const sel = document.getElementById('inAccount');
  if (!sel) return;
  sel.innerHTML = `<option value="">${i18n[currentLang].opt_no_account}</option>` +
    accounts.map(a => `<option value="${a.id}">${a.name}</option>`).join('');
}

function renderAccountTags() {
  const el = document.getElementById('accountTags');
  if (!el) return;
  el.innerHTML = accounts.map((a, i) =>
    `<span class="acc-tag" style="border-color:${COLORS[i%COLORS.length]}55;color:${COLORS[i%COLORS.length]}">
      ${a.name}<button class="acc-tag-del" onclick="removeAccount('${a.id}')">✕</button>
    </span>`
  ).join('');
}

function renderAccountTabs() {
  const el = document.getElementById('holdAccountTabs');
  if (!el) return;
  const hasUnassigned = holdings.some(h => !h.accountId);
  const tabs = [{ id: 'all', name: i18n[currentLang].all_accounts }];
  accounts.forEach(a => tabs.push({ id: a.id, name: a.name }));
  if (hasUnassigned) tabs.push({ id: '__none__', name: i18n[currentLang].no_account });
  el.innerHTML = tabs.map(t =>
    `<button class="acc-tab${holdAccFilter === t.id ? ' active' : ''}" onclick="setHoldAccFilter('${t.id}')">${t.name}</button>`
  ).join('');
}

function renderChartAccFilter() {
  const el = document.getElementById('chartAccFilter');
  if (!el) return;
  if (!accounts.length) { el.style.display = 'none'; return; }
  const hasUnassigned = holdings.some(h => !h.accountId);
  const items = accounts.map((a, i) => ({ id: a.id, name: a.name, color: COLORS[i%COLORS.length] }));
  if (hasUnassigned) items.push({ id: '__none__', name: i18n[currentLang].no_account, color: '#8888aa' });
  el.style.display = 'flex';
  el.innerHTML = items.map(item => {
    const checked = chartAccFilter.size === 0 || chartAccFilter.has(item.id);
    return `<label class="acc-chk">
      <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleChartAccFilter('${item.id}')">
      <span style="color:${item.color}">${item.name}</span>
    </label>`;
  }).join('');
}

// ═══════════════════════════════════════
// CONVERSION & RENDER
// ═══════════════════════════════════════
function convert(val, from) {
  if (from === displayCurrency) return val;
  if (from === 'USD' && displayCurrency === 'KRW') return val * usdKrwRate;
  if (from === 'KRW' && displayCurrency === 'USD') return val / usdKrwRate;
  if (from === 'USD' && displayCurrency === 'JPY') return val * usdJpyRate;
  if (from === 'JPY' && displayCurrency === 'USD') return val / usdJpyRate;
  if (from === 'KRW' && displayCurrency === 'JPY') return val / usdKrwRate * usdJpyRate;
  if (from === 'JPY' && displayCurrency === 'KRW') return val / usdJpyRate * usdKrwRate;
  return val;
}

function renderAll() {
  renderCards(); renderHoldings(); renderDonut(); renderBar(); resetChartIfEmpty();
  renderChartAccFilter();
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
  const filtered = getFilteredHoldings(holdAccFilter);
  if (!filtered.length) {
    ['cInvested','cCurrent','cPnl','cRet'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.textContent = '—'; el.className = 'card-val'; }
    });
    return;
  }
  let totalInv = 0, totalCur = 0;
  filtered.forEach(h => {
    totalInv += convert(h.buyPrice * h.shares, h.currency);
    totalCur += convert((h.currentPrice || h.buyPrice) * h.shares, h.currency);
  });
  const pnl = totalCur - totalInv;
  const ret = totalInv > 0 ? (pnl / totalInv) * 100 : 0;
  const sym = displayCurrency === 'KRW' ? '₩' : displayCurrency === 'JPY' ? '¥' : '$';
  const dec = (displayCurrency === 'KRW' || displayCurrency === 'JPY') ? 0 : 2;

  document.getElementById('cInvested').textContent = `${sym}${fNum(totalInv, dec)}`;
  document.getElementById('cCurrent').textContent  = `${sym}${fNum(totalCur, dec)}`;
  
  const pe = document.getElementById('cPnl'), re = document.getElementById('cRet');
  if (pe) {
    pe.textContent = (pnl >= 0 ? '+' : '') + fNum(pnl, dec);
    pe.className = 'card-val ' + (pnl >= 0 ? 'up' : 'down');
  }
  if (re) {
    re.textContent = (ret >= 0 ? '+' : '') + ret.toFixed(2) + '%';
    re.className = 'card-val ' + (ret >= 0 ? 'up' : 'down');
  }
}

function renderHoldings() {
  renderAccountTabs();
  const el = document.getElementById('holdList');
  if (!el) return;
  const filtered = getFilteredHoldings(holdAccFilter);
  if (!filtered.length) { el.innerHTML=`<div class="empty" style="padding:40px 10px;">${i18n[currentLang].empty_holdings}</div>`; return; }

  el.innerHTML = filtered.map(h => {
    const pnl = h.currentPrice ? (h.currentPrice-h.buyPrice)/h.buyPrice*100 : null;
    const cls = pnl==null?'':pnl>=0?'up':'down';
    const sign= pnl==null?'':pnl>=0?'+':'';
    const isUsd = h.currency === 'USD';
    const badge = isUsd ? '<span class="badge badge-us">USD</span>' : '<span class="badge badge-kr">KRW</span>';
    
    const accIdx = h.accountId ? accounts.findIndex(a => a.id === h.accountId) : -1;
    const accColor = accIdx >= 0 ? COLORS[accIdx % COLORS.length] : '#8888aa';
    const accBadge = h.accountId
      ? `<span style="font-size:8px;font-family:'Space Mono',monospace;color:${accColor};background:${accColor}22;border:1px solid ${accColor}44;border-radius:4px;padding:1px 5px;margin-left:2px;">${getAccName(h.accountId)}</span>`
      : '';
    return `<div class="h-item">
      <div style="flex:1; overflow:hidden;">
        <div class="h-ticker" style="display:flex; align-items:center; gap:4px;">${h.symbol.split('.')[0]}${badge}${accBadge}</div>
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
  const filtered = getFilteredHoldings(holdAccFilter);
  if (!filtered.length) {
    list.innerHTML=`<div style="color:var(--text3);font-size:11px;font-family:'Space Mono',monospace;">${i18n[currentLang].empty_after_add}</div>`;
    if(donutInst){donutInst.destroy();donutInst=null;} return;
  }
  const vals = filtered.map(h => convert((h.currentPrice || h.buyPrice) * h.shares, h.currency));
  const total = vals.reduce((a,b)=>a+b,0);
  const labels = filtered.map(h=>h.symbol.split('.')[0]);
  if(donutInst)donutInst.destroy();
  donutInst = new Chart(canvas, {
    type:'doughnut',
    data:{labels,datasets:[{data:vals,backgroundColor:COLORS.slice(0,filtered.length),borderWidth:2,borderColor:getChartTheme().donutBorder,hoverOffset:5}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>' '+(ctx.raw/total*100).toFixed(1)+'%'}}}}
  });
  list.innerHTML=filtered.map((h,i)=>{
    const pct=(vals[i]/total*100).toFixed(1);
    return `<div class="alloc-item"><div class="alloc-dot" style="background:${COLORS[i]}"></div><div class="alloc-name">${h.symbol.split('.')[0]}</div><div class="alloc-bar-bg"><div class="alloc-bar" style="width:${pct}%;background:${COLORS[i]}"></div></div><div class="alloc-pct">${pct}%</div></div>`;
  }).join('');
}

function renderBar() {
  const canvas=document.getElementById('barChart'), wrap=document.getElementById('barWrap');
  if (!canvas || !wrap) return;
  const filtered = getFilteredHoldings(holdAccFilter);
  if (!filtered.length) {
    canvas.style.display='none'; wrap.style.display='block';
    if(barInst){barInst.destroy();barInst=null;} return;
  }
  canvas.style.display='block'; wrap.style.display='none';
  const labels=filtered.map(h=>{
    const sym=h.symbol.split('.')[0];
    const accName=accounts.find(a=>a.id===h.accountId)?.name||null;
    return accName?[sym,accName]:[sym];
  });
  const data=filtered.map(h=>h.currentPrice?+((h.currentPrice-h.buyPrice)/h.buyPrice*100).toFixed(2):0);
  const colors=data.map(v=>v>=0?'rgba(0,212,170,.8)':'rgba(255,77,106,.8)');
  if(barInst)barInst.destroy();
  const ct = getChartTheme();
  barInst=new Chart(canvas,{type:'bar',data:{labels,datasets:[{data,backgroundColor:colors,borderRadius:5,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{display:false},tooltip:{callbacks:{title:ctx=>{const l=labels[ctx[0].dataIndex];return Array.isArray(l)?l.join(' · '):l;},label:ctx=>` ${ctx.raw.toFixed(2)}%`}}},scales:{x:{grid:{color:ct.grid},ticks:{color:ct.legend,font:{family:'Space Mono',size:9}}},y:{grid:{color:ct.grid},ticks:{color:ct.legend,font:{family:'Space Mono',size:10},callback:v=>v+'%'},border:{dash:[4,4]}}}}});
}

// ═══════════════════════════════════════
// CHART & SLIDER
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
  if (!start||!end) return;

  const area=document.getElementById('chartArea'), canvas=document.getElementById('mainChart');
  if (area) { area.style.display='flex'; area.innerHTML=`<div class="empty"><span class="spin"></span>${i18n[currentLang].loading_history}</div>`; }
  if (canvas) canvas.style.display='none';
  if (document.getElementById('sliderPanel')) document.getElementById('sliderPanel').style.display='none';
  historyCache={};

  const results = await Promise.allSettled(holdings.map(h => fetchHistory(h.symbol, start, end)));
  const failed = [];
  results.forEach((r, i) => {
    if (r.status === 'fulfilled' && r.value.length > 0) {
      historyCache[holdings[i].symbol] = r.value;
    } else {
      failed.push(holdings[i].symbol);
    }
  });
  if (failed.length) toast(`⚠️ ${i18n[currentLang].toast_no_data}: ${failed.join(', ')}`, 'err');

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
  if (area) area.style.display='none'; if (canvas) canvas.style.display='block';

  const chartH = getChartHoldings();
  // hMap: symbol → [holding, ...] (같은 종목이 여러 계좌에 있을 경우 합산)
  const hMap={};
  chartH.forEach(h=>{ if(!hMap[h.symbol])hMap[h.symbol]=[]; hMap[h.symbol].push(h); });
  const chartHistories = Object.fromEntries(Object.entries(historyCache).filter(([sym]) => hMap[sym]));
  const allDates=[...new Set(Object.values(chartHistories).flatMap(a=>a.map(d=>d.date)))].sort();

  let totalInv = 0;
  chartH.forEach(h => { totalInv += convert(h.buyPrice * h.shares, h.currency); });

  const lastClose={};
  const assets = allDates.map(date=>{
    let tot=0, any=false;
    for(const [sym,hist] of Object.entries(chartHistories)){
      const hs=hMap[sym]; if(!hs)continue;
      const found=hist.find(x=>x.date===date);
      if(found) lastClose[sym]=found.close;
      if(lastClose[sym]){
        for(const h of hs){ tot+=convert(lastClose[sym]*h.shares,h.currency); any=true; }
      }
    }
    return any?tot:null;
  });

  // 날짜별 종가 사전 계산 (호버 시 빠른 조회용)
  const closeByDate = {};
  const runningClose = {};
  for(const date of allDates){
    for(const [s,hist] of Object.entries(chartHistories)){
      const f=hist.find(x=>x.date===date); if(f) runningClose[s]=f.close;
    }
    closeByDate[date]={...runningClose};
  }

  const sym = displayCurrency === 'KRW' ? '₩' : displayCurrency === 'JPY' ? '¥' : '$';
  const ct = getChartTheme();
  const maxAsset = Math.max(...assets.filter(v => v != null), totalInv);
  const yMax = maxAsset * 1.5;
  if(chartInst)chartInst.destroy();
  chartInst=new Chart(canvas,{
    type:'line',
    data:{datasets:[
      {label: i18n[currentLang].summary_current, data:allDates.map((d,i)=>({x:d,y:assets[i]})).filter(p=>p.y!=null),borderColor:'#7c5cfc',backgroundColor:'rgba(124,92,252,.1)',fill:true,tension:.3,pointRadius:0,borderWidth:2.5,yAxisID:'y',order:2},
      {label: i18n[currentLang].summary_invested, data:allDates.map(d=>({x:d,y:totalInv})),borderColor:'rgba(255,77,106,.8)',fill:false,tension:0,pointRadius:0,borderWidth:1.5,yAxisID:'y',order:3},
      {label:'_cur',_cur:true,data:[{x:allDates[allDates.length-1],y:0},{x:allDates[allDates.length-1],y:totalInv*3}],borderColor:'rgba(0,212,170,.7)',fill:false,pointRadius:0,borderWidth:1.5,borderDash:[3,3],yAxisID:'y',order:1},
    ]},
    options:{
      responsive:true,animation:false,interaction:{mode:'index',intersect:false},
      plugins:{
        legend:{display:true,position:'top',labels:{color:ct.legend,font:{family:'Space Mono',size:10},boxWidth:10,padding:12,filter:i=>i.text!=='_cur'}},
        tooltip:{
          enabled:false,
          external:(context)=>{
            const {chart,tooltip}=context;
            const tip=document.getElementById('chartTooltip');
            if(!tip)return;
            if(tooltip.opacity===0||!tooltip.dataPoints?.length){tip.style.display='none';return;}

            const dp=tooltip.dataPoints.find(p=>p.datasetIndex===1)||tooltip.dataPoints[0];
            const hoveredDate=dp?.raw?.x||dp?.label;
            if(!hoveredDate)return;

            const lc=closeByDate[hoveredDate]||{};
            let totCur=0,totInv2=0;
            const rows=Object.keys(hMap).map(s=>{
              const price=lc[s]; if(!price)return null;
              const hs=hMap[s];
              let cur=0,inv=0;
              for(const h of hs){cur+=convert(price*h.shares,h.currency);inv+=convert(h.buyPrice*h.shares,h.currency);}
              totCur+=cur;totInv2+=inv;
              return{sym:s.split('.')[0],pct:inv>0?(cur-inv)/inv*100:0};
            }).filter(Boolean);

            const totalPct=totInv2>0?(totCur-totInv2)/totInv2*100:0;
            const sign=v=>v>=0?'+':'';
            const clr=v=>`color:${v>=0?'var(--green)':'var(--red)'}`;

            tip.innerHTML=`
              <div class="ctt-date">${hoveredDate}</div>
              ${rows.map(r=>`<div class="ctt-row"><span class="ctt-sym">${r.sym}</span><span class="ctt-val" style="${clr(r.pct)}">${sign(r.pct)}${r.pct.toFixed(1)}%</span></div>`).join('')}
              <div class="ctt-total"><span>Total</span><span style="${clr(totalPct)}">${sign(totalPct)}${totalPct.toFixed(1)}%</span></div>`;

            const xPx=chart.scales.x.getPixelForValue(hoveredDate)??chart.chartArea.left;
            const canvasRect=canvas.getBoundingClientRect();
            const cardRect=canvas.closest('.chart-card').getBoundingClientRect();
            const cArea=chart.chartArea;
            const tipW=155;
            let tipX=(canvasRect.left-cardRect.left)+xPx;
            const tipY=(canvasRect.top-cardRect.top)+cArea.top+10;
            if(xPx>(cArea.right+cArea.left)/2)tipX-=tipW+12;else tipX+=12;
            tipX=Math.max(4,Math.min(tipX,cardRect.width-tipW-4));
            tip.style.left=tipX+'px';tip.style.top=tipY+'px';tip.style.display='block';
          }
        },
      },
      onClick:(e)=>{
        if(!chartInst)return;
        const pts=chartInst.getElementsAtEventForMode(e.native,'index',{intersect:false},true);
        if(!pts.length)return;
        const pt=pts.find(p=>p.datasetIndex===1)||pts[0];
        const clickedDate=chartInst.data.datasets[pt.datasetIndex]?.data[pt.index]?.x;
        if(!clickedDate)return;
        const allDateIdx=allDates.indexOf(clickedDate);
        if(allDateIdx<0)return;
        const sl=document.getElementById('dateSlider');
        if(sl){sl.value=allDateIdx;onSlider(allDateIdx);}
      },
      scales:{
        x:{type:'category',grid:{color:ct.grid},ticks:{color:ct.tick,font:{family:'Space Mono',size:9},maxTicksLimit:10}},
        y:{max:yMax,grid:{color:ct.grid},border:{dash:[4,4]},ticks:{color:ct.tick,font:{family:'Space Mono',size:9},callback:v=> displayCurrency==='KRW' ? (v>=1e8?'₩'+(v/1e8).toFixed(1)+'억':v>=1e4?'₩'+(v/1e4).toFixed(0)+'만':'₩'+fNum(v)) : displayCurrency==='JPY' ? (v>=1e8?'¥'+(v/1e8).toFixed(1)+'億':v>=1e4?'¥'+(v/1e4).toFixed(0)+'万':'¥'+fNum(v)) : sym+fNum(v)}},
      },
    }
  });

  sliderDates=allDates;
  const sl=document.getElementById('dateSlider');
  if (sl) {
    sl.max=allDates.length-1; sl.value=allDates.length-1;
    document.getElementById('slMin').textContent=allDates[0]||'';
    document.getElementById('slMax').textContent=allDates[allDates.length-1]||'';
    document.getElementById('sliderPanel').style.display='block';
    onSlider(allDates.length-1);
  }
}

function drawReturnChart() {
  const area=document.getElementById('chartArea'), canvas=document.getElementById('mainChart');
  if (area) area.style.display='none'; if (canvas) canvas.style.display='block';
  if (document.getElementById('sliderPanel')) document.getElementById('sliderPanel').style.display='none';

  // 계좌 필터 적용 후 공통 x축 생성 (미국/한국 거래일 차이 해결)
  const chartSymbols = new Set(getChartHoldings().map(h => h.symbol));
  const chartKeys = Object.keys(historyCache).filter(sym => chartSymbols.has(sym));
  const allDates = [...new Set(
    chartKeys.flatMap(sym => historyCache[sym].map(d => d.date))
  )].sort();

  const datasets = chartKeys.map((sym, i) => {
    const hist = historyCache[sym];
    // 첫 번째 유효한 close 값을 기준(base)으로 사용
    const base = hist.find(d => d.close != null)?.close;
    if (!base) return null;

    // 날짜 → close 맵
    const closeMap = {};
    hist.forEach(d => { if (d.close != null) closeMap[d.date] = d.close; });

    // 공통 날짜 기준으로 데이터 생성, 데이터 없는 날짜는 null
    const data = allDates.map(date => ({
      x: date,
      y: closeMap[date] != null ? +((closeMap[date] - base) / base * 100).toFixed(2) : null
    }));

    return {
      label: sym.split('.')[0],
      data,
      borderColor: COLORS[i % COLORS.length],
      backgroundColor: COLORS[i % COLORS.length] + '18',
      fill: false,
      tension: .3,
      pointRadius: 0,
      pointHoverRadius: 4,
      borderWidth: 2,
      spanGaps: true  // null 구간을 건너뛰어 선을 자연스럽게 연결
    };
  }).filter(Boolean);

  const ct = getChartTheme();
  if (chartInst) chartInst.destroy();
  chartInst = new Chart(canvas, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true,
      animation: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: true, position: 'top', labels: { color: ct.legend, font: { family: 'Space Mono', size: 10 }, boxWidth: 10, padding: 12 } },
        tooltip: {
          backgroundColor: ct.tooltipBg, borderColor: ct.tooltipBorder, borderWidth: 1,
          titleColor: ct.tooltipTitle, bodyColor: ct.tooltipBody,
          callbacks: {
            title: c => c[0]?.raw?.x || '',
            label: c => {
              if (c.raw.y == null) return null;
              const s = c.raw.y >= 0 ? '+' : '';
              return ` ${c.dataset.label}: ${s}${c.raw.y.toFixed(2)}%`;
            }
          }
        }
      },
      scales: {
        x: { type: 'category', grid: { color: ct.grid }, ticks: { color: ct.tick, font: { family: 'Space Mono', size: 9 }, maxTicksLimit: 10 } },
        y: { grid: { color: ct.grid }, border: { dash: [4, 4] }, ticks: { color: ct.tick, font: { family: 'Space Mono', size: 9 }, callback: v => v.toFixed(1) + '%' } }
      }
    }
  });
}

function onSlider(idx) {
  idx=+idx;
  const date=sliderDates[idx]; if(!date)return;
  document.getElementById('sliderDate').textContent=date;

  const chartH = getChartHoldings();
  // hMap: symbol → [holding, ...] (여러 계좌 합산)
  const hMap={};
  chartH.forEach(h=>{ if(!hMap[h.symbol])hMap[h.symbol]=[]; hMap[h.symbol].push(h); });
  const lastClose={};
  for(let i=0;i<=idx;i++){
    const d=sliderDates[i];
    for(const [sym,hist] of Object.entries(historyCache)){
      const found=hist.find(x=>x.date===d); if(found)lastClose[sym]=found.close;
    }
  }

  let totalAsset = 0, totalInv = 0;
  chartH.forEach(h => { totalInv += convert(h.buyPrice * h.shares, h.currency); });

  const chips=[];
  for(const sym of Object.keys(hMap)){
    const price=lastClose[sym]; if(!price)continue;
    const hs=hMap[sym];
    let val=0, inv=0;
    for(const h of hs){ val+=convert(price*h.shares,h.currency); inv+=convert(h.buyPrice*h.shares,h.currency); }
    totalAsset+=val;
    chips.push({sym, repr:hs[0], val, pnl:val-inv, pct:(val-inv)/inv*100, price});
  }

  const pnl = totalAsset - totalInv;
  const ret = totalInv > 0 ? (pnl / totalInv) * 100 : 0;
  const s = pnl >= 0 ? '+' : '';
  const sym = displayCurrency === 'KRW' ? '₩' : displayCurrency === 'JPY' ? '¥' : '$';
  const dec = (displayCurrency === 'KRW' || displayCurrency === 'JPY') ? 0 : 2;

  const sliderStats = document.getElementById('sliderStats');
  if (sliderStats) {
    sliderStats.innerHTML=`
      <div class="sstat"><div class="sstat-label">${i18n[currentLang].asset_val}</div><div class="sstat-val" style="color:var(--text);">${sym}${fNum(totalAsset, dec)}</div></div>
      <div class="sstat"><div class="sstat-label">${i18n[currentLang].pnl_val}</div><div class="sstat-val ${pnl>=0?'up':'down'}">${s}${sym}${fNum(pnl, dec)}</div></div>
      <div class="sstat"><div class="sstat-label">${i18n[currentLang].return_val}</div><div class="sstat-val ${ret>=0?'up':'down'}">${s}${ret.toFixed(2)}%</div></div>`;
  }

  const sliderChips = document.getElementById('sliderChips');
  if (sliderChips) {
    sliderChips.innerHTML=chips.map(r=>{
      const sign=r.pct>=0?'+':'', d=r.repr.currency==='USD'?2:0, c=r.repr.currency==='USD'?'$':'₩';
      return `<div class="chip"><div class="chip-sym">${r.sym.split('.')[0]}</div><div class="chip-price">${c}${fNum(r.price,d)}</div><div class="chip-pct ${r.pct>=0?'up':'down'}">${sign}${r.pct.toFixed(2)}%</div></div>`;
    }).join('');
  }

  if(chartInst&&chartMode==='asset'){
    const ds=chartInst.data.datasets.find(d=>d._cur);
    if(ds){
      const yMax=chartInst.scales?.y?.max||totalInv*2, yMin=chartInst.scales?.y?.min||0;
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
  await updateUsdKrwRate();
  const results = await Promise.allSettled(holdings.map(h => fetchPrice(h.symbol)));
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') {
      holdings[i].currentPrice = r.value.price;
      holdings[i].prevClose    = r.value.prevClose;
      holdings[i].name         = r.value.name;
    }
  });
  save(); renderAll();
  if (icon) icon.style.animation='';
  toast(`✅ ${i18n[currentLang].toast_updated}`);
}

window.addHolding = addHolding;
window.removeHolding = removeHolding;
window.switchMode = switchMode;
window.loadChart = loadChart;
window.onSlider = onSlider;
window.refreshPrices = refreshPrices;
window.addAccount = addAccount;
window.removeAccount = removeAccount;
window.setHoldAccFilter = setHoldAccFilter;
window.toggleChartAccFilter = toggleChartAccFilter;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.loginWithGoogle = loginWithGoogle;
window.loginWithEmail = loginWithEmail;
window.signupWithEmail = signupWithEmail;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme();

  // Apply saved intro panel state
  const introVisible = localStorage.getItem('ph2_intro_visible');
  if (introVisible === '0') {
    const panel = document.getElementById('introPanel');
    const icon = document.getElementById('introToggleIcon');
    const text = document.getElementById('introToggleText');
    if (panel) panel.style.display = 'none';
    if (icon) icon.textContent = '▼';
    if (text) text.textContent = i18n[currentLang].intro_show;
  }

  // Render immediately from localStorage
  updateUI();
  renderAccountUI();
  renderAll();

  // Exchange rate (non-blocking)
  updateUsdKrwRate();

  // Auth state listener
  let _authReady = false;
  try {
    firebase.auth().onAuthStateChanged(async (user) => {
      const isNewLogin = _authReady && !currentUser && !!user;
      const isLogout   = _authReady && !!currentUser && !user;

      // 로그아웃 시 pending 저장 타이머를 즉시 취소
      // (타이머가 currentUser 복원 후 빈 데이터를 Firestore에 덮어쓰는 버그 방지)
      if (isLogout) {
        clearTimeout(_saveTimer);
        _saveTimer = null;
      }

      currentUser = user;
      _authReady = true;

      if (user) {
        await loadFromFirestore();
        renderAccountUI();
        renderAll();
        if (isNewLogin) toast(`✅ ${i18n[currentLang].toast_login_ok}`);
      } else if (isLogout) {
        // 로그아웃 시 데이터 초기화
        holdings = [];
        accounts = [];
        localStorage.removeItem('ph2_holdings');
        localStorage.removeItem('ph2_accounts');
        renderAccountUI();
        renderAll();
        toast(i18n[currentLang].toast_logout_ok);
      }
      renderLoginUI();
    });
  } catch(e) {
    console.warn('[Auth] Firebase Auth not available:', e);
    renderLoginUI();
  }
});
