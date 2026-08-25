<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>我的股息計畫</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: "Microsoft JhengHei", Arial, sans-serif;
      background: linear-gradient(135deg, #eef9ff, #fff9e8);
      color: #273746;
      min-height: 100vh;
    }

    header {
      text-align: center;
      padding: 45px 20px 25px;
    }

    header h1 {
      margin: 0;
      font-size: 36px;
      color: #24546d;
    }

    header p {
      color: #71838e;
      margin-top: 10px;
    }

    .container {
      width: min(1050px, 92%);
      margin: auto;
      padding-bottom: 60px;
    }

    .card {
      background: white;
      border-radius: 22px;
      padding: 26px;
      margin-bottom: 22px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.07);
    }

    h2 {
      margin-top: 0;
      color: #315f76;
    }

    .search-row {
      display: flex;
      gap: 12px;
    }

    input {
      width: 100%;
      padding: 14px;
      border: 1px solid #d6e3e9;
      border-radius: 12px;
      font-size: 16px;
      outline: none;
    }

    input:focus {
      border-color: #65a8c5;
      box-shadow: 0 0 0 4px rgba(101,168,197,0.1);
    }

    button {
      border: none;
      border-radius: 12px;
      padding: 14px 22px;
      background: #397f9f;
      color: white;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      white-space: nowrap;
    }

    button:hover {
      background: #2e6c88;
    }

    .message {
      display: none;
      margin-top: 15px;
      padding: 13px;
      border-radius: 10px;
    }

    .loading {
      background: #edf8ff;
      color: #35728f;
    }

    .error {
      background: #fff0f0;
      color: #a94b4b;
    }

    .stock-info {
      display: none;
      margin-top: 20px;
      padding: 22px;
      background: #f6fbfd;
      border-radius: 18px;
    }

    .stock-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      flex-wrap: wrap;
    }

    .stock-name {
      font-size: 27px;
      font-weight: 800;
      color: #24536b;
    }

    .stock-code {
      color: #83939d;
      margin-top: 5px;
    }

    .market-badge {
      background: #e5f4fa;
      color: #34738f;
      padding: 7px 13px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: bold;
    }

    .stock-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 20px;
    }

    .stock-box {
      background: white;
      border-radius: 14px;
      padding: 17px;
      text-align: center;
      border: 1px solid #e6eef2;
    }

    .small-title {
      color: #758791;
      font-size: 13px;
    }

    .big-value {
      font-size: 21px;
      font-weight: 800;
      color: #28566c;
      margin-top: 7px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    label {
      font-weight: bold;
      font-size: 14px;
      color: #536b78;
    }

    .hint {
      font-size: 12px;
      color: #8a99a1;
    }

    .auto-tag {
      color: #34856c;
      font-weight: bold;
    }

    .results {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-top: 22px;
    }

    .result {
      padding: 22px;
      border-radius: 17px;
      background: #f1f9fc;
      text-align: center;
    }

    .result.highlight {
      background: linear-gradient(135deg, #fff5c9, #ffedab);
    }

    .result-title {
      color: #758792;
      font-size: 13px;
    }

    .result-value {
      margin-top: 8px;
      font-size: 26px;
      font-weight: 800;
      color: #28566c;
    }

    .highlight .result-value {
      color: #986a00;
    }

    .detail {
      margin-top: 22px;
      border: 1px solid #e2eaee;
      border-radius: 16px;
      padding: 18px;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 12px 0;
      border-bottom: 1px dashed #dde6ea;
    }

    .detail-row:last-child {
      border-bottom: none;
    }

    .detail-row span {
      color: #667b87;
    }

    .detail-row strong {
      color: #28556b;
    }

    .good {
      color: #258064 !important;
    }

    .notice {
      padding: 18px;
      border-radius: 13px;
      background: #fff8e8;
      border-left: 5px solid #efba50;
      color: #776329;
      line-height: 1.7;
      font-size: 14px;
    }

    footer {
      text-align: center;
      padding-top: 22px;
      color: #98a6ad;
      font-size: 12px;
    }

    @media(max-width: 800px) {
      .stock-grid {
        grid-template-columns: repeat(2,1fr);
      }

      .grid,
      .results {
        grid-template-columns: 1fr;
      }

      .search-row {
        flex-direction: column;
      }
    }
  </style>
</head>


<body>

<header>
  <h1>💰 我的股息計畫</h1>
  <p>搜尋股票・設定殖利率・計算需要多少本金</p>
</header>


<div class="container">


  <!-- 搜尋股票 -->

  <section class="card">

    <h2>🔍 搜尋股票</h2>

    <div class="search-row">

      <input
        id="stockCode"
        placeholder="輸入股票代號，例如：2330"
      >

      <button onclick="searchStock()">
        搜尋
      </button>

    </div>


    <div
      id="loading"
      class="message loading"
    >
      🔄 正在取得官方股票資料...
    </div>


    <div
      id="error"
      class="message error"
    ></div>


    <div
      id="stockInfo"
      class="stock-info"
    >

      <div class="stock-title">

        <div>

          <div
            id="stockName"
            class="stock-name"
          >
            -
          </div>

          <div
            id="stockCodeText"
            class="stock-code"
          >
            -
          </div>

        </div>

        <div
          id="market"
          class="market-badge"
        >
          -
        </div>

      </div>


      <div class="stock-grid">

        <div class="stock-box">

          <div class="small-title">
            最近股價
          </div>

          <div
            id="apiPrice"
            class="big-value"
          >
            -
          </div>

        </div>


        <div class="stock-box">

          <div class="small-title">
            官方殖利率
          </div>

          <div
            id="apiYield"
            class="big-value"
          >
            -
          </div>

        </div>


        <div class="stock-box">

          <div class="small-title">
            年度每股股息
          </div>

          <div
            id="apiDividend"
            class="big-value"
          >
            -
          </div>

        </div>


        <div class="stock-box">

          <div class="small-title">
            本益比
          </div>

          <div
            id="apiPE"
            class="big-value"
          >
            -
          </div>

        </div>

      </div>

    </div>

  </section>


  <!-- 股息目標 -->

  <section class="card">

    <h2>🎯 我的股息目標</h2>

    <div class="grid">

      <div class="input-group">

        <label>
          每月希望收到多少股息？
        </label>

        <input
          id="monthlyDividend"
          type="number"
          value="10000"
          min="0"
        >

        <div class="hint">
          例如：希望平均每月有 10,000 元股息
        </div>

      </div>


      <div class="input-group">

        <label>
          我的目標殖利率 %
        </label>

        <input
          id="targetYield"
          type="number"
          value="5"
          step="0.1"
          min="0.1"
        >

        <div class="hint">
          例如：希望殖利率達到 5%
        </div>

      </div>

    </div>


    <div class="results">

      <div class="result">

        <div class="result-title">
          每月股息目標
        </div>

        <div
          id="monthlyResult"
          class="result-value"
        >
          $10,000
        </div>

      </div>


      <div class="result">

        <div class="result-title">
          每年股息目標
        </div>

        <div
          id="yearlyResult"
          class="result-value"
        >
          $120,000
        </div>

      </div>


      <div class="result highlight">

        <div class="result-title">
          理論需要本金
        </div>

        <div
          id="capitalResult"
          class="result-value"
        >
          $2,400,000
        </div>

      </div>

    </div>

  </section>


  <!-- 股票計算 -->

  <section class="card">

    <h2>📊 股票股息試算</h2>


    <div class="grid">

      <div class="input-group">

        <label>
          每股一年股息
          <span class="auto-tag">
            （API 可自動帶入）
          </span>
        </label>

        <input
          id="annualDividend"
          type="number"
          step="0.01"
          placeholder="搜尋股票後自動帶入"
        >

        <div class="hint">
          如果 API 沒有資料，也可以自行輸入。
        </div>

      </div>


      <div class="input-group">

        <label>
          股票價格
          <span class="auto-tag">
            （API 自動帶入）
          </span>
        </label>

        <input
          id="stockPrice"
          type="number"
          step="0.01"
          placeholder="搜尋股票後自動帶入"
        >

      </div>

    </div>


    <div class="detail">

      <div class="detail-row">

        <span>
          依股價＋股息計算殖利率
        </span>

        <strong id="calculatedYield">
          -
        </strong>

      </div>


      <div class="detail-row">

        <span>
          🎯 達到目標殖利率的理想價格
        </span>

        <strong
          id="idealPrice"
          class="good"
        >
          -
        </strong>

      </div>


      <div class="detail-row">

        <span>
          達成年度股息需要
        </span>

        <strong id="sharesNeeded">
          -
        </strong>

      </div>


      <div class="detail-row">

        <span>
          約等於
        </span>

        <strong id="lotsNeeded">
          -
        </strong>

      </div>


      <div class="detail-row">

        <span>
          依目前股價需投入
        </span>

        <strong id="investmentNeeded">
          -
        </strong>

      </div>

    </div>

  </section>


  <!-- 殖利率情境 -->

  <section class="card">

    <h2>🧮 不同殖利率需要多少本金？</h2>

    <div class="detail">

      <div class="detail-row">
        <span>3% 殖利率</span>
        <strong id="yield3">-</strong>
      </div>

      <div class="detail-row">
        <span>4% 殖利率</span>
        <strong id="yield4">-</strong>
      </div>

      <div class="detail-row">
        <span>5% 殖利率</span>
        <strong id="yield5">-</strong>
      </div>

      <div class="detail-row">
        <span>6% 殖利率</span>
        <strong id="yield6">-</strong>
      </div>

      <div class="detail-row">
        <span>7% 殖利率</span>
        <strong id="yield7">-</strong>
      </div>

      <div class="detail-row">
        <span>8% 殖利率</span>
        <strong id="yield8">-</strong>
      </div>

    </div>

  </section>


  <section class="notice">

    ⚠️ <strong>投資提醒：</strong>

    本網站提供的股價、股利與殖利率資料僅供資料整理與試算使用，
    不構成任何投資建議。

    「年度股息」應依 API 的資料年度與股利口徑判斷，
    過去股利不代表未來仍會維持相同配息。

  </section>


  <footer>
    我的股息計畫｜資料僅供試算參考
  </footer>

</div>


<script>

const monthlyDividend =
  document.getElementById("monthlyDividend");

const targetYield =
  document.getElementById("targetYield");

const annualDividend =
  document.getElementById("annualDividend");

const stockPrice =
  document.getElementById("stockPrice");


function money(value) {

  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "$0";
  }

  return "$" +
    Math.round(number)
      .toLocaleString("zh-TW");

}


function calculate() {

  const monthly =
    Number(monthlyDividend.value) || 0;

  const target =
    Number(targetYield.value) || 0;

  const dividend =
    Number(annualDividend.value) || 0;

  const price =
    Number(stockPrice.value) || 0;


  // =========================
  // 年股息
  // =========================

  const yearly =
    monthly * 12;


  // =========================
  // 理論本金
  // =========================

  let capital = 0;

  if (target > 0) {

    capital =
      yearly /
      (target / 100);

  }


  document.getElementById(
    "monthlyResult"
  ).textContent =
    money(monthly);


  document.getElementById(
    "yearlyResult"
  ).textContent =
    money(yearly);


  document.getElementById(
    "capitalResult"
  ).textContent =
    money(capital);


  // =========================
  // 股息殖利率
  // =========================

  let calculatedYield = 0;

  if (
    dividend > 0 &&
    price > 0
  ) {

    calculatedYield =
      dividend /
      price *
      100;

  }


  document.getElementById(
    "calculatedYield"
  ).textContent =
    calculatedYield > 0
      ? calculatedYield.toFixed(2) + "%"
      : "-";


  // =========================
  // 理想買進價格
  // =========================

  let idealPrice = 0;

  if (
    dividend > 0 &&
    target > 0
  ) {

    idealPrice =
      dividend /
      (target / 100);

  }


  document.getElementById(
    "idealPrice"
  ).textContent =
    idealPrice > 0
      ? "$" + idealPrice.toFixed(2)
      : "-";


  // =========================
  // 所需股數
  // =========================

  let shares = 0;

  if (dividend > 0) {

    shares =
      yearly /
      dividend;

  }


  const roundedShares =
    Math.ceil(shares);


  document.getElementById(
    "sharesNeeded"
  ).textContent =
    shares > 0
      ? roundedShares.toLocaleString("zh-TW") +
        " 股"
      : "-";


  // =========================
  // 張數
  // =========================

  document.getElementById(
    "lotsNeeded"
  ).textContent =
    shares > 0
      ? (roundedShares / 1000)
          .toFixed(2) +
        " 張"
      : "-";


  // =========================
  // 投入金額
  // =========================

  let investment = 0;

  if (
    roundedShares > 0 &&
    price > 0
  ) {

    investment =
      roundedShares *
      price;

  }


  document.getElementById(
    "investmentNeeded"
  ).textContent =
    investment > 0
      ? money(investment)
      : "-";


  // =========================
  // 不同殖利率本金比較
  // =========================

  [3,4,5,6,7,8].forEach(rate => {

    const required =
      yearly /
      (rate / 100);

    document.getElementById(
      "yield" + rate
    ).textContent =
      money(required);

  });

}


// =============================
// 搜尋股票
// =============================

async function searchStock() {

  const code =
    document
      .getElementById("stockCode")
      .value
      .trim();


  const loading =
    document.getElementById("loading");

  const error =
    document.getElementById("error");

  const stockInfo =
    document.getElementById("stockInfo");


  error.style.display =
    "none";

  stockInfo.style.display =
    "none";


  if (!code) {

    error.textContent =
      "請先輸入股票代號";

    error.style.display =
      "block";

    return;

  }


  loading.style.display =
    "block";


  try {

    const response =
      await fetch(
        `/api/stock?code=${encodeURIComponent(code)}`
      );


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(
        data.error ||
        "查不到這檔股票"
      );

    }


    // =========================
    // 股票基本資料
    // =========================

    document.getElementById(
      "stockName"
    ).textContent =
      data.name ||
      "未知股票";


    document.getElementById(
      "stockCodeText"
    ).textContent =
      data.code ||
      code;


    document.getElementById(
      "market"
    ).textContent =
      data.market ||
      "-";


    // =========================
    // 股價
    // =========================

    if (
      data.price !== null &&
      data.price !== undefined
    ) {

      const price =
        Number(data.price);

      document.getElementById(
        "apiPrice"
      ).textContent =
        "$" +
        price.toFixed(2);


      stockPrice.value =
        price;

    }

    else {

      document.getElementById(
        "apiPrice"
      ).textContent =
        "-";

    }


    // =========================
    // 官方殖利率
    // =========================

    if (
      data.yield !== null &&
      data.yield !== undefined
    ) {

      document.getElementById(
        "apiYield"
      ).textContent =
        Number(data.yield)
          .toFixed(2) +
        "%";

    }

    else {

      document.getElementById(
        "apiYield"
      ).textContent =
        "-";

    }


    // =========================
    // 年度股息
    // =========================

    const dividend =
      data.annualDividend ??
      data.dividend ??
      null;


    if (
      dividend !== null &&
      dividend !== undefined &&
      Number(dividend) > 0
    ) {

      document.getElementById(
        "apiDividend"
      ).textContent =
        "$" +
        Number(dividend)
          .toFixed(2);


      // ⭐ 自動帶入試算器
      annualDividend.value =
        Number(dividend);

    }

    else {

      document.getElementById(
        "apiDividend"
      ).textContent =
        "暫無資料";

    }


    // =========================
    // PE
    // =========================

    if (
      data.pe !== null &&
      data.pe !== undefined
    ) {

      document.getElementById(
        "apiPE"
      ).textContent =
        Number(data.pe)
          .toFixed(2);

    }

    else {

      document.getElementById(
        "apiPE"
      ).textContent =
        "-";

    }


    stockInfo.style.display =
      "block";


    // ⭐ 搜尋完成重新計算
    calculate();

  }

  catch (err) {

    error.textContent =
      "⚠️ " +
      err.message;

    error.style.display =
      "block";

  }

  finally {

    loading.style.display =
      "none";

  }

}


// 按 Enter 也可以搜尋

document
  .getElementById("stockCode")
  .addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {

        searchStock();

      }

    }
  );


// 修改數字時立即重新計算

monthlyDividend.addEventListener(
  "input",
  calculate
);

targetYield.addEventListener(
  "input",
  calculate
);

annualDividend.addEventListener(
  "input",
  calculate
);

stockPrice.addEventListener(
  "input",
  calculate
);


calculate();

</script>

</body>
</html>
