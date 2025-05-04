const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

// Stock Report
router.get("/stock-report/:pharmacy_id", reportController.getStockReport);

// Out-of-Stock Report
router.get("/out-of-stock-report/:pharmacy_id", reportController.getOutOfStockReport);

// Expiry Date Report
router.get("/expiry-date-report/:pharmacy_id", reportController.getExpiryDateReport);

// Sales Report (Date-wise)
router.get("/sales-report/:pharmacy_id", reportController.getSalesReport);

// Profit Report (Manufacturer-wise)
router.get("/profit-report-manufacturer/:pharmacy_id", reportController.getProfitReportManufacturer);

router.get("/stock-report-batch-wise/:pharmacy_id", reportController.getStockReportBatchWise);

module.exports = router;