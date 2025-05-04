const StockFixedAsset = require('../models/stock_fixed_asset');

// Create a new StockFixedAsset
exports.createStockFixedAsset = async (req, res) => {
    try {
        const stockFixedAsset = new StockFixedAsset(req.body);
        await stockFixedAsset.save();
        res.status(201).json(stockFixedAsset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all StockFixedAssets
exports.getAllStockFixedAssets = async (req, res) => {
    try {
        const stockFixedAssets = await StockFixedAsset.find();
        res.status(200).json(stockFixedAssets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single StockFixedAsset by ID
exports.getStockFixedAssetById = async (req, res) => {
    try {
        const stockFixedAsset = await StockFixedAsset.findById(req.params.id);
        if (!stockFixedAsset) {
            return res.status(404).json({ message: 'StockFixedAsset not found' });
        }
        res.status(200).json(stockFixedAsset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a StockFixedAsset by ID
exports.updateStockFixedAsset = async (req, res) => {
    try {
        const stockFixedAsset = await StockFixedAsset.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!stockFixedAsset) {
            return res.status(404).json({ message: 'StockFixedAsset not found' });
        }
        res.status(200).json(stockFixedAsset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a StockFixedAsset by ID
exports.deleteStockFixedAsset = async (req, res) => {
    try {
        const stockFixedAsset = await StockFixedAsset.findByIdAndDelete(req.params.id);
        if (!stockFixedAsset) {
            return res.status(404).json({ message: 'StockFixedAsset not found' });
        }
        res.status(200).json({ message: 'StockFixedAsset deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};