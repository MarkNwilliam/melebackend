// routes/supplierRoutes.js
const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Supplier routes
router.post('/suppliers', supplierController.addSupplier); // Add a new supplier
router.get('/suppliers', supplierController.getAllSuppliers); // Get all suppliers
router.get('/suppliers/:supplierId', supplierController.getSupplierById); // Get a single supplier by ID
router.put('/suppliers/:supplierId', supplierController.updateSupplier); // Update a supplier
router.delete('/suppliers/:supplierId', supplierController.deleteSupplier); // Delete a supplier

module.exports = router;