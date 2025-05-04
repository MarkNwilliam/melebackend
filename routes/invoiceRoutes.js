// routes/invoiceRoutes.js
const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

// Invoice routes
router.post('/invoices', invoiceController.createInvoice); // Create a new invoice
router.get('/invoices', invoiceController.getAllInvoices); // Get all invoices
router.get('/invoices/:invoiceId', invoiceController.getInvoiceById); // Get a single invoice by ID
router.put('/invoices/:invoiceId', invoiceController.updateInvoice); // Update an invoice
router.delete('/invoices/:invoiceId', invoiceController.deleteInvoice); // Delete an invoice

module.exports = router;