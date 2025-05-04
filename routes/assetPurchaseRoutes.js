const express = require('express');
const router = express.Router();
const assetPurchaseController = require('../controllers/assetPurchaseController');

// Create a new AssetPurchase
router.post('/', assetPurchaseController.createAssetPurchase);

// Get all AssetPurchases
router.get('/', assetPurchaseController.getAllAssetPurchases);

// Get a single AssetPurchase by ID
router.get('/:id', assetPurchaseController.getAssetPurchaseById);

// Update an AssetPurchase by ID
router.put('/:id', assetPurchaseController.updateAssetPurchase);

// Delete an AssetPurchase by ID
router.delete('/:id', assetPurchaseController.deleteAssetPurchase);

module.exports = router;