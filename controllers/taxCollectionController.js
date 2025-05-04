// controllers/taxCollectionController.js
const TaxCollection = require('../models/tax_collection');

// Add a new tax collection
exports.addTaxCollection = async (req, res) => {
    try {
        const taxCollection = new TaxCollection(req.body);
        await taxCollection.save();
        res.status(201).json({ message: 'Tax collection added successfully', taxCollection });
    } catch (error) {
        res.status(500).json({ message: 'Error adding tax collection', error });
    }
};

// Get all tax collections
exports.getAllTaxCollections = async (req, res) => {
    try {
        const taxCollections = await TaxCollection.find();
        res.json(taxCollections);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tax collections', error });
    }
};

// Get a single tax collection by ID
exports.getTaxCollectionById = async (req, res) => {
    try {
        const taxCollection = await TaxCollection.findById(req.params.taxCollectionId);
        if (!taxCollection) {
            return res.status(404).json({ message: 'Tax collection not found' });
        }
        res.json(taxCollection);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tax collection', error });
    }
};

// Update a tax collection
exports.updateTaxCollection = async (req, res) => {
    try {
        const { taxCollectionId } = req.params;
        const updatedTaxCollection = await TaxCollection.findByIdAndUpdate(taxCollectionId, req.body, { new: true });
        res.json({ message: 'Tax collection updated successfully', taxCollection: updatedTaxCollection });
    } catch (error) {
        res.status(500).json({ message: 'Error updating tax collection', error });
    }
};

// Delete a tax collection
exports.deleteTaxCollection = async (req, res) => {
    try {
        const { taxCollectionId } = req.params;
        await TaxCollection.findByIdAndDelete(taxCollectionId);
        res.json({ message: 'Tax collection deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting tax collection', error });
    }
};