export default async function handler(req, res) {
  const code = String(req.query.code || "").trim().toUpperCase();

  if (!code) {
    return res.status(400).json({
      error: "請輸入股票代號"
    });
  }

  try {
    // ==================================================
    // 1. 先查 TWSE 上市股票
    // ==================================================

    const twseYieldUrl =
      "https://openapi.twse.com.tw/v1/exchangeReport/BWIBBU_ALL";

    const twsePriceUrl =
      "https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_AVG_ALL";

    const [twseYieldResponse, twsePriceResponse] =
      await Promise.all([
        fetch(twseYieldUrl),
        fetch(twsePriceUrl)
      ]);

    if (twseYieldResponse.ok && twsePriceResponse.ok) {
      const twseYieldData =
        await twseYieldResponse.json();

      const twsePriceData =
        await twsePriceResponse.json();

      const yieldStock =
        twseYieldData.find(
          item =>
            String(item.Code || "").trim() === code
        );

      const priceStock =
        twsePriceData.find(
          item =>
            String(item.Code || "").trim() === code
        );

      // 如果其中一支資料找到股票，就視為上市
      if (yieldStock || priceStock) {
        const price =
          cleanNumber(
            priceStock?.ClosingPrice
          );

        const dividendYield =
          cleanNumber(
            yieldStock?.DividendYield
          );

        const pe =
          cleanNumber(
            yieldStock?.PEratio
          );

        const pb =
          cleanNumber(
            yieldStock?.PBratio
          );

        return res.status(200).json({
          code: code,

          name:
            yieldStock?.Name ||
            priceStock?.Name ||
            "",

          market: "上市",

          price: price,

          yield: dividendYield,

          pe: pe,

          pb: pb,

          dividend: null,

          date:
            yieldStock?.Date ||
            priceStock?.Date ||
            null,

          source: "TWSE"
        });
      }
    }


    // ==================================================
    // 2. TWSE 找不到 → 查 TPEx 上櫃
    // ==================================================

    const tpexYieldUrl =
      "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_peratio_analysis";

    const tpexPriceUrl =
      "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_quotes";


    const [tpexYieldResponse, tpexPriceResponse] =
      await Promise.all([
        fetch(tpexYieldUrl),
        fetch(tpexPriceUrl)
      ]);


    if (!tpexYieldResponse.ok) {
      throw new Error(
        "TPEx 殖利率 API 無法讀取"
      );
    }


    const tpexYieldData =
      await tpexYieldResponse.json();


    let tpexPriceData = [];

    if (tpexPriceResponse.ok) {
      tpexPriceData =
        await tpexPriceResponse.json();
    }


    // TPEx 欄位名稱與 TWSE 不同
    const yieldStock =
      tpexYieldData.find(
        item =>
          String(
            item.SecuritiesCompanyCode ||
            item.Code ||
            ""
          ).trim() === code
      );


    const priceStock =
      tpexPriceData.find(
        item =>
          String(
            item.SecuritiesCompanyCode ||
            item.Code ||
            item.SecuritiesCompanyCode ||
            ""
          ).trim() === code
      );


    if (yieldStock || priceStock) {

      // TPEx 不同 API 的股價欄位可能不同，
      // 因此多個名稱一起判斷。
      const price =
        cleanNumber(
          priceStock?.Close ||
          priceStock?.ClosingPrice ||
          priceStock?.ClosePrice ||
          priceStock?.ClosePriceS ||
          priceStock?.LastPrice
        );


      const dividendYield =
        cleanNumber(
          yieldStock?.YieldRatio ||
          yieldStock?.DividendYield
        );


      const dividend =
        cleanNumber(
          yieldStock?.DividendPerShare
        );


      const pe =
        cleanNumber(
          yieldStock?.PriceEarningRatio ||
          yieldStock?.PEratio
        );


      const pb =
        cleanNumber(
          yieldStock?.PriceBookRatio ||
          yieldStock?.PBratio
        );


      return res.status(200).json({
        code: code,

        name:
          yieldStock?.CompanyName ||
          priceStock?.CompanyName ||
          priceStock?.Name ||
          "",

        market: "上櫃",

        price: price,

        yield: dividendYield,

        dividend: dividend,

        pe: pe,

        pb: pb,

        date:
          yieldStock?.Date ||
          priceStock?.Date ||
          null,

        source: "TPEx"
      });
    }


    // ==================================================
    // 3. 上市與上櫃都找不到
    // ==================================================

    return res.status(404).json({
      error: "查不到這個股票代號",
      code: code
    });

  }

  catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "取得股票資料失敗",
      detail: error.message
    });
  }
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
