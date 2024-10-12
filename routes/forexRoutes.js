const express = require("express");
const router = express.Router();
const forexController = require("../controllers/forexController");

// API routes
router.get("/average-rate", forexController.getAverageRate);
router.get("/closing-rate", forexController.getClosingRate);
router.post("/add-pair", forexController.addCurrencyPair);

module.exports = router;
