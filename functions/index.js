const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

admin.initializeApp();

exports.getStockData = onCall(
  { invoker: "public", cors: true },
  async (request) => {
    const { symbol, type, start, end } = request.data;

    if (!symbol) {
      throw new HttpsError("invalid-argument", "Symbol is required");
    }

    try {
      if (type === "price") {
        const result = await yahooFinance.quote(symbol);
        return {
          price: result.regularMarketPrice,
          prevClose: result.regularMarketPreviousClose,
          name: result.shortName || result.longName || symbol,
          currency: result.currency,
          symbol: symbol
        };

      } else if (type === "history") {
        if (!start || !end) {
          throw new HttpsError("invalid-argument", "Start and End are required for history");
        }
        const result = await yahooFinance.historical(symbol, {
          period1: start,
          period2: end,
        });
        return result.map(d => ({
          date: d.date.toISOString().split("T")[0],
          close: d.close
        }));

      } else if (type === "search") {
        const result = await yahooFinance.search(symbol);
        const quote = result.quotes?.[0];
        return {
          name: quote ? (quote.longname || quote.shortname || symbol) : symbol
        };

      } else {
        throw new HttpsError("invalid-argument", "Unknown type: " + type);
      }

    } catch (error) {
      if (error instanceof HttpsError) throw error;
      console.error(`[${type}] ${symbol}:`, error.message);
      throw new HttpsError("internal", error.message);
    }
  }
);
