const cron = require("cron");
const scrapeController = require("../controllers/scrapeController");

const scrapeJob = new cron.CronJob(
  "0 6 * * *",
  scrapeController.scrapeForexRates,
  null,
  true,
  "Asia/Kolkata"
);
scrapeJob.start();

module.exports = scrapeJob;
