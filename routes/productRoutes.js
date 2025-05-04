// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product routes
router.post('/pharmacies/:pharmacy_id/products', productController.addProduct); // Add a product to a pharmacy's collection
router.post('/pharmacies/:pharmacy_id/products/upload', productController.uploadProducts); // Upload products from CSV
router.get('/pharmacies/:pharmacy_id/products', productController.getAllProducts); // Fetch products for a specific pharmacy
router.put('/pharmacies/:pharmacy_id/products/:productId', productController.updateProduct); // Update a product
router.delete('/pharmacies/:pharmacy_id/products/:productId', productController.deleteProduct); // Delete a product

module.exports = router;