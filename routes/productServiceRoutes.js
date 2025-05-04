const express = require('express');
const router = express.Router();
const productServiceController = require('../controllers/productServiceController');

// Create a new ProductService
router.post('/', productServiceController.createProductService);

// Get all ProductServices
router.get('/', productServiceController.getAllProductServices);

// Get a single ProductService by ID
router.get('/:id', productServiceController.getProductServiceById);

// Update a ProductService by ID
router.put('/:id', productServiceController.updateProductService);

// Delete a ProductService by ID
router.delete('/:id', productServiceController.deleteProductService);

module.exports = router;