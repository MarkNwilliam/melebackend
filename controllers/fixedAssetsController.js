const FixedAssets = require('../models/fixed_assets');

// Create a new FixedAsset
exports.createFixedAsset = async (req, res) => {
    try {
        const fixedAsset = new FixedAssets(req.body);
        await fixedAsset.save();
        res.status(201).json(fixedAsset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all FixedAssets
exports.getAllFixedAssets = async (req, res) => {
    try {
        const fixedAssets = await FixedAssets.find();
        res.status(200).json(fixedAssets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single FixedAsset by ID
exports.getFixedAssetById = async (req, res) => {
    try {
        const fixedAsset = await FixedAssets.findById(req.params.id);
        if (!fixedAsset) {
            return res.status(404).json({ message: 'FixedAsset not found' });
        }
        res.status(200).json(fixedAsset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a FixedAsset by ID
exports.updateFixedAsset = async (req, res) => {
    try {
        const fixedAsset = await FixedAssets.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!fixedAsset) {
            return res.status(404).json({ message: 'FixedAsset not found' });
        }
        res.status(200).json(fixedAsset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a FixedAsset by ID
exports.deleteFixedAsset = async (req, res) => {
    try {
        const fixedAsset = await FixedAssets.findByIdAndDelete(req.params.id);
        if (!fixedAsset) {
            return res.status(404).json({ message: 'FixedAsset not found' });
        }
        res.status(200).json({ message: 'FixedAsset deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};