// routes/taxRoutes.js
const express = require('express');
const router = express.Router();
const taxController = require('../controllers/taxController');

// Tax routes
router.post('/taxes', taxController.addTax); // Add a new tax
router.get('/taxes', taxController.getAllTaxes); // Get all taxes
router.get('/taxes/:taxId', taxController.getTaxById); // Get a single tax by ID
router.put('/taxes/:taxId', taxController.updateTax); // Update a tax
router.delete('/taxes/:taxId', taxController.deleteTax); // Delete a tax

module.exports = router;