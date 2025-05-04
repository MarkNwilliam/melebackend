// routes/manufacturerLedgerRoutes.js
const express = require("express");
const router = express.Router();
const manufacturerLedgerController = require("../controllers/manufacturerLedgerController");

// Manufacturer Ledger routes
router.post("/pharmacies/:pharmacy_id/manufacturer-ledgers", manufacturerLedgerController.addLedgerEntry); // Add a new ledger entry
router.get("/pharmacies/:pharmacy_id/manufacturer-ledgers/:manufacturerId", manufacturerLedgerController.getLedgerEntries); // Get all ledger entries for a manufacturer
router.get("/pharmacies/:pharmacy_id/manufacturer-ledgers/entry/:ledgerEntryId", manufacturerLedgerController.getLedgerEntryById); // Get a single ledger entry by ID
router.put("/pharmacies/:pharmacy_id/manufacturer-ledgers/:ledgerEntryId", manufacturerLedgerController.updateLedgerEntry); // Update a ledger entry
router.delete("/pharmacies/:pharmacy_id/manufacturer-ledgers/:ledgerEntryId", manufacturerLedgerController.deleteLedgerEntry); // Delete a ledger entry
// Get all ledger entries for a pharmacy
router.get("/pharmacies/:pharmacy_id/manufacturer-ledgers", manufacturerLedgerController.getAllLedgerEntries);

module.exports = router;