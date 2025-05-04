// routes/productReturnRoutes.js
const express = require('express');
const router = express.Router();
const productReturnController = require('../controllers/productReturnController');

// Pharmacy-specific product return routes
router.post('/pharmacy/:pharmacyId/product-returns', productReturnController.addProductReturn);
router.get('/pharmacy/:pharmacyId/product-returns', productReturnController.getAllProductReturns);
router.get('/pharmacy/:pharmacyId/product-returns/manufacturer', productReturnController.getManufacturerReturns);
router.get('/pharmacy/:pharmacyId/product-returns/:returnId', productReturnController.getProductReturnById);
router.put('/pharmacy/:pharmacyId/product-returns/:productReturnId', productReturnController.updateProductReturn);
router.delete('/pharmacy/:pharmacyId/product-returns/:returnId', productReturnController.deleteProductReturn);

module.exports = router;