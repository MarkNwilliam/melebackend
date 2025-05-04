// routes/serviceInvoiceRoutes.js
const express = require('express');
const router = express.Router();
const serviceInvoiceController = require('../controllers/serviceInvoiceController');

// Service Invoice routes
router.post('/service-invoices', serviceInvoiceController.createServiceInvoice); // Create a new service invoice
router.get('/service-invoices', serviceInvoiceController.getAllServiceInvoices); // Get all service invoices
router.get('/service-invoices/:serviceInvoiceId', serviceInvoiceController.getServiceInvoiceById); // Get a single service invoice by ID
router.put('/service-invoices/:serviceInvoiceId', serviceInvoiceController.updateServiceInvoice); // Update a service invoice
router.delete('/service-invoices/:serviceInvoiceId', serviceInvoiceController.deleteServiceInvoice); // Delete a service invoice

module.exports = router;