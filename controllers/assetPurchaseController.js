const AssetPurchase = require('../models/asset_purchase');

// Create a new AssetPurchase
exports.createAssetPurchase = async (req, res) => {
    try {
        const assetPurchase = new AssetPurchase(req.body);
        await assetPurchase.save();
        res.status(201).json(assetPurchase);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all AssetPurchases
exports.getAllAssetPurchases = async (req, res) => {
    try {
        const assetPurchases = await AssetPurchase.find();
        res.status(200).json(assetPurchases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single AssetPurchase by ID
exports.getAssetPurchaseById = async (req, res) => {
    try {
        const assetPurchase = await AssetPurchase.findById(req.params.id);
        if (!assetPurchase) {
            return res.status(404).json({ message: 'AssetPurchase not found' });
        }
        res.status(200).json(assetPurchase);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an AssetPurchase by ID
exports.updateAssetPurchase = async (req, res) => {
    try {
        const assetPurchase = await AssetPurchase.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!assetPurchase) {
            return res.status(404).json({ message: 'AssetPurchase not found' });
        }
        res.status(200).json(assetPurchase);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an AssetPurchase by ID
exports.deleteAssetPurchase = async (req, res) => {
    try {
        const assetPurchase = await AssetPurchase.findByIdAndDelete(req.params.id);
        if (!assetPurchase) {
            return res.status(404).json({ message: 'AssetPurchase not found' });
        }
        res.status(200).json({ message: 'AssetPurchase deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};