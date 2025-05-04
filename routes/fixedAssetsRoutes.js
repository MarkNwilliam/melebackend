const express = require('express');
const router = express.Router();
const fixedAssetsController = require('../controllers/fixedAssetsController');

// Create a new FixedAsset
router.post('/', fixedAssetsController.createFixedAsset);

// Get all FixedAssets
router.get('/', fixedAssetsController.getAllFixedAssets);

// Get a single FixedAsset by ID
router.get('/:id', fixedAssetsController.getFixedAssetById);

// Update a FixedAsset by ID
router.put('/:id', fixedAssetsController.updateFixedAsset);

// Delete a FixedAsset by ID
router.delete('/:id', fixedAssetsController.deleteFixedAsset);

module.exports = router;