const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../config/db");

// Scraping logic for forex rates
async function scrapeForexRates() {
  try {
    const url = "https://www.x-rates.com/";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const currencyPairs = ["USD/EUR", "GBP/USD"]; // Add more pairs here
    const rates = {};

    currencyPairs.forEach((pair) => {
      // Modify according to the website's structure
      const rate = $("#yourSelectorForRate").text();
      rates[pair] = parseFloat(rate);
    });

    storeRatesInDB(rates);
  } catch (error) {
    console.error("Error scraping forex rates:", error);
  }
}

// Store scraped data in the MySQL database
function storeRatesInDB(rates) {
  const date = new Date().toISOString().split("T")[0];

  Object.entries(rates).forEach(([pair, rate]) => {
    db.query(
      "INSERT INTO forex_rates (currency_pair, date, closing_rate) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE closing_rate=?",
      [pair, date, rate, rate],
      (err) => {
        if (err) throw err;
        console.log(`Stored rate for ${pair} on ${date}`);
      }
    );
  });
}

module.exports = { scrapeForexRates };
