const functions = require("firebase-functions");
const admin = require("firebase-admin");
const yahooFinance = require("yahoo-finance2").default;

admin.initializeApp();

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
        throw new functions.https.HttpsError("invalid-argument", "Start and End are required for history");
      }
      const result = await yahooFinance.historical(symbol, {
        period1: start,
        period2: end,
      });
      return result.map(d => ({
        date: d.date.toISOString().split('T')[0],
        close: d.close
      }));

    } else if (type === "search") {
      const result = await yahooFinance.search(symbol);
      const quote = result.quotes?.[0];
      return {
        name: quote ? (quote.longname || quote.shortname || symbol) : symbol
      };

    } else {
      throw new functions.https.HttpsError("invalid-argument", "Unknown type: " + type);
    }

  } catch (error) {
    console.error(`[${type}] ${symbol}:`, error.message);
    throw new functions.https.HttpsError("internal", error.message);
  }
});
