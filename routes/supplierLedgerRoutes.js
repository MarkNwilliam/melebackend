// routes/supplierLedgerRoutes.js
const express = require('express');
const router = express.Router();
const supplierLedgerController = require('../controllers/supplierLedgerController');

// Supplier Ledger routes
router.post('/supplier-ledgers', supplierLedgerController.addLedgerEntry); // Add a new ledger entry
router.get('/supplier-ledgers/:supplierId', supplierLedgerController.getLedgerEntries); // Get all ledger entries for a supplier
router.get('/supplier-ledgers/entry/:ledgerEntryId', supplierLedgerController.getLedgerEntryById); // Get a single ledger entry by ID
router.put('/supplier-ledgers/:ledgerEntryId', supplierLedgerController.updateLedgerEntry); // Update a ledger entry
router.delete('/supplier-ledgers/:ledgerEntryId', supplierLedgerController.deleteLedgerEntry); // Delete a ledger entry

module.exports = router;