const functions = require("firebase-functions");
const admin = require("firebase-admin");
const yahooFinance = require("yahoo-finance2").default;

admin.initializeApp();

// HTTP callable function to get stock data
exports.getStockData = functions.https.onCall(async (data, context) => {
  const { symbol, type, start, end } = data;

  if (!symbol) {
    throw new functions.https.HttpsError("invalid-argument", "Symbol is required");
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
        throw new functions.https.HttpsError("invalid-argument", "Start and End dates are required for history");
      }
      const result = await yahooFinance.historical(symbol, {
        period1: start,
        period2: end,
      });
      return result.map(d => ({
        date: d.date.toISOString().split('T')[0],
        close: d.close
      }));
    }
  } catch (error) {
    console.error("Yahoo Finance Error:", error);
    throw new functions.https.HttpsError("internal", error.message);
  }
});
