const db = require("../config/db");

// Fetch average conversion rate
exports.getAverageRate = (req, res) => {
  const { pair, start, end } = req.query;

  const query =
    "SELECT AVG(closing_rate) AS average_rate FROM forex_rates WHERE currency_pair = ? AND date BETWEEN ? AND ?";
  db.query(query, [pair, start, end], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result[0]);
  });
};

// Fetch closing conversion rate
exports.getClosingRate = (req, res) => {
  const { pair, date } = req.query;

  const query =
    "SELECT closing_rate FROM forex_rates WHERE currency_pair = ? AND date = ?";
  db.query(query, [pair, date], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result[0]);
  });
};

// Add a new currency pair for tracking
exports.addCurrencyPair = (req, res) => {
  const { pair } = req.body;

  // Update scraping logic to include the new pair
  res.json({ message: `Currency pair ${pair} added for tracking` });
};
