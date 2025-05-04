const express = require('express');
const router = express.Router();
const stockFixedAssetController = require('../controllers/stockFixedAssetController');

// Create a new StockFixedAsset
router.post('/', stockFixedAssetController.createStockFixedAsset);

// Get all StockFixedAssets
router.get('/', stockFixedAssetController.getAllStockFixedAssets);

// Get a single StockFixedAsset by ID
router.get('/:id', stockFixedAssetController.getStockFixedAssetById);

// Update a StockFixedAsset by ID
router.put('/:id', stockFixedAssetController.updateStockFixedAsset);

// Delete a StockFixedAsset by ID
router.delete('/:id', stockFixedAssetController.deleteStockFixedAsset);

module.exports = router;