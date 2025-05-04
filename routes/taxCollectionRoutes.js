// routes/taxCollectionRoutes.js
const express = require('express');
const router = express.Router();
const taxCollectionController = require('../controllers/taxCollectionController');

// Tax Collection routes
router.post('/tax-collections', taxCollectionController.addTaxCollection); // Add a new tax collection
router.get('/tax-collections', taxCollectionController.getAllTaxCollections); // Get all tax collections
router.get('/tax-collections/:taxCollectionId', taxCollectionController.getTaxCollectionById); // Get a single tax collection by ID
router.put('/tax-collections/:taxCollectionId', taxCollectionController.updateTaxCollection); // Update a tax collection
router.delete('/tax-collections/:taxCollectionId', taxCollectionController.deleteTaxCollection); // Delete a tax collection

module.exports = router;