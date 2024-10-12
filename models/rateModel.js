const db = require("../config/db");

exports.getAverageRate = (pair, start, end, callback) => {
  const query =
    "SELECT AVG(closing_rate) as average_rate FROM forex_rates WHERE currency_pair = ? AND date BETWEEN ? AND ?";
  db.query(query, [pair, start, end], callback);
};

exports.getClosingRate = (pair, date, callback) => {
  const query =
    "SELECT closing_rate FROM forex_rates WHERE currency_pair = ? AND date = ?";
  db.query(query, [pair, date], callback);
};

exports.storeRate = (pair, date, rate) => {
  const query =
    "INSERT INTO forex_rates (currency_pair, date, closing_rate) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE closing_rate = ?";
  db.query(query, [pair, date, rate, rate], (err) => {
    if (err) console.error(`Error storing rate for ${pair} on ${date}:`, err);
  });
};
