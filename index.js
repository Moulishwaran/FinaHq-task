const express = require("express");
const cron = require("cron");
const db = require("./config/db");
const forexRoutes = require("./routes/forexRoutes");
const { scrapeForexRates } = require("./services/forexScraper");

const app = express();
app.use(express.json());

// Routes
app.use("/api/forex", forexRoutes);

// Schedule scraping job daily at 6 AM
const scrapeJob = new cron.CronJob(
  "0 6 * * *",
  scrapeForexRates,
  null,
  true,
  "Asia/Kolkata"
);
scrapeJob.start();

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
