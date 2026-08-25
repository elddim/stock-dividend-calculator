export default async function handler(req, res) {

  const code = String(req.query.code || "")
    .trim()
    .toUpperCase();

  if (!code) {
    return res.status(400).json({
      error: "請輸入股票代號"
    });
  }

  try {

    // ==============================================
    // 官方 API
    // ==============================================

    const TWSE_YIELD =
      "https://openapi.twse.com.tw/v1/exchangeReport/BWIBBU_ALL";

    const TWSE_PRICE =
      "https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_AVG_ALL";

    const TWSE_DIVIDEND =
      "https://openapi.twse.com.tw/v1/opendata/t187ap45_L";


    const TPEX_YIELD =
      "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_peratio_analysis";

    const TPEX_PRICE =
      "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_quotes";

    const TPEX_DIVIDEND =
      "https://www.tpex.org.tw/openapi/v1/mopsfin_t187ap39_O";


    // ==============================================
    // 先查上市 TWSE
    // ==============================================

    const [
      twseYieldData,
      twsePriceData,
      twseDividendData
    ] = await Promise.all([
      getJSON(TWSE_YIELD),
      getJSON(TWSE_PRICE),
      getJSON(TWSE_DIVIDEND)
    ]);


    const twseYieldStock =
      twseYieldData.find(item =>
        String(item.Code || "").trim() === code
      );


    const twsePriceStock =
      twsePriceData.find(item =>
        String(item.Code || "").trim() === code
      );


    if (twseYieldStock || twsePriceStock) {

      const dividendResult =
        calculateAnnualDividend(
          twseDividendData,
          code
        );


      return res.status(200).json({

        code,

        name:
          twseYieldStock?.Name ||
          twsePriceStock?.Name ||
          "",

        market: "上市",

        price:
          cleanNumber(
            twsePriceStock?.ClosingPrice
          ),

        yield:
          cleanNumber(
            twseYieldStock?.DividendYield
          ),

        pe:
          cleanNumber(
            twseYieldStock?.PEratio
          ),

        pb:
          cleanNumber(
            twseYieldStock?.PBratio
          ),

        annualDividend:
          dividendResult.amount,

        dividendYear:
          dividendResult.year,

        source: "TWSE"
      });
    }


    // ==============================================
    // 上市找不到 → 查上櫃 TPEx
    // ==============================================

    const [
      tpexYieldData,
      tpexPriceData,
      tpexDividendData
    ] = await Promise.all([
      getJSON(TPEX_YIELD),
      getJSON(TPEX_PRICE),
      getJSON(TPEX_DIVIDEND)
    ]);


    const tpexYieldStock =
      tpexYieldData.find(item =>

        String(
          item.SecuritiesCompanyCode ||
          item.Code ||
          item["公司代號"] ||
          ""
        ).trim() === code

      );


    const tpexPriceStock =
      tpexPriceData.find(item =>

        String(
          item.SecuritiesCompanyCode ||
          item.Code ||
          item["證券代號"] ||
          item["股票代號"] ||
          ""
        ).trim() === code

      );


    if (tpexYieldStock || tpexPriceStock) {

      const dividendResult =
        calculateAnnualDividend(
          tpexDividendData,
          code
        );


      return res.status(200).json({

        code,

        name:
          tpexYieldStock?.CompanyName ||
          tpexYieldStock?.Name ||
          tpexPriceStock?.CompanyName ||
          tpexPriceStock?.Name ||
          tpexPriceStock?.["證券名稱"] ||
          "",

        market: "上櫃",

        price:
          firstNumber(
            tpexPriceStock,
            [
              "Close",
              "ClosingPrice",
              "ClosePrice",
              "LastPrice",
              "收盤價"
            ]
          ),

        yield:
          firstNumber(
            tpexYieldStock,
            [
              "YieldRatio",
              "DividendYield",
              "殖利率"
            ]
          ),

        pe:
          firstNumber(
            tpexYieldStock,
            [
              "PriceEarningRatio",
              "PEratio",
              "本益比"
            ]
          ),

        pb:
          firstNumber(
            tpexYieldStock,
            [
              "PriceBookRatio",
              "PBratio",
              "股價淨值比"
            ]
          ),

        annualDividend:
          dividendResult.amount,

        dividendYear:
          dividendResult.year,

        source: "TPEx"
      });

    }


    // ==============================================
    // 都找不到
    // ==============================================

    return res.status(404).json({
      error: "查不到這個股票代號",
      code
    });


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "取得股票資料失敗",
      detail: error.message
    });

  }
}


// ==================================================
// 讀取 JSON
// ==================================================

async function getJSON(url) {

  const response = await fetch(url, {
    headers: {
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0"
    }
  });


  if (!response.ok) {

    throw new Error(
      `API 讀取失敗：${response.status}`
    );

  }


  const data = await response.json();

  return Array.isArray(data)
    ? data
    : [];

}


// ==================================================
// 計算上一個完整年度股息
// ==================================================

function calculateAnnualDividend(data, code) {

  if (!Array.isArray(data)) {

    return {
      amount: null,
      year: null
    };

  }


  // 西元年轉民國年
  const currentROCYear =
    new Date().getFullYear() - 1911;


  // 優先使用上一個完整年度
  const targetYear =
    currentROCYear - 1;


  // 找這檔股票的所有股利紀錄
  const companyRows =
    data.filter(item => {

      const itemCode =
        String(
          item["公司代號"] ||
          item.SecuritiesCompanyCode ||
          item.Code ||
          ""
        ).trim();


      return itemCode === code;

    });


  if (companyRows.length === 0) {

    return {
      amount: null,
      year: null
    };

  }


  // 找有哪些股利年度
  const years =
    companyRows
      .map(item =>
        Number(
          item["股利年度"] ||
          item.DividendYear ||
          ""
        )
      )
      .filter(year =>
        Number.isFinite(year)
      );


  if (years.length === 0) {

    return {
      amount: null,
      year: null
    };

  }


  // 優先上一完整年度。
  // 如果沒有，再找最接近且不晚於上一年度的年度。
  let selectedYear = targetYear;


  if (!years.includes(targetYear)) {

    const olderYears =
      years.filter(
        year => year <= targetYear
      );


    if (olderYears.length > 0) {

      selectedYear =
        Math.max(...olderYears);

    } else {

      selectedYear =
        Math.max(...years);

    }

  }


  const selectedRows =
    companyRows.filter(item => {

      const year =
        Number(
          item["股利年度"] ||
          item.DividendYear ||
          ""
        );


      return year === selectedYear;

    });


  // ==============================================
  // 避免「年度」與「季度」資料重複加總
  // ==============================================

  const annualRows =
    selectedRows.filter(item =>

      String(
        item["股利所屬年(季)度"] ||
        ""
      ).includes("年度")

    );


  /*
    如果公司有「年度」資料，就使用年度資料；
    沒有年度資料（例如季配息公司），才把各季度加總。
  */

  const rowsToUse =
    annualRows.length > 0
      ? annualRows
      : selectedRows;


  let totalDividend = 0;


  for (const item of rowsToUse) {

    // 盈餘發放現金股利
    const earningsDividend =
      cleanNumber(
        item[
          "股東配發-盈餘分配之現金股利(元/股)"
        ]
      ) || 0;


    // 法定盈餘公積發放現金
    const legalReserveDividend =
      cleanNumber(
        item[
          "股東配發-法定盈餘公積發放之現金(元/股)"
        ]
      ) || 0;


    // 資本公積發放現金
    const capitalReserveDividend =
      cleanNumber(
        item[
          "股東配發-資本公積發放之現金(元/股)"
        ]
      ) || 0;


    totalDividend +=
      earningsDividend +
      legalReserveDividend +
      capitalReserveDividend;

  }


  return {

    amount:
      Number(
        totalDividend.toFixed(4)
      ),

    year:
      selectedYear

  };

}


// ==================================================
// 找第一個存在的數值欄位
// ==================================================

function firstNumber(object, keys) {

  if (!object) return null;


  for (const key of keys) {

    if (
      object[key] !== undefined &&
      object[key] !== null &&
      object[key] !== ""
    ) {

      const number =
        cleanNumber(
          object[key]
        );


      if (number !== null) {

        return number;

      }

    }

  }


  return null;

}


// ==================================================
// 數字清理
// ==================================================

function cleanNumber(value) {

  if (
    value === undefined ||
    value === null ||
    value === "" ||
    value === "-" ||
    value === "--"
  ) {

    return null;

  }


  const number =
    Number(
      String(value)
        .replace(/,/g, "")
        .replace(/%/g, "")
        .trim()
    );


  return Number.isFinite(number)
    ? number
    : null;

}
