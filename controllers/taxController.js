// controllers/taxController.js
const TaxInformation = require('../models/tax_information');

// Add a new tax
exports.addTax = async (req, res) => {
    try {
        const tax = new TaxInformation(req.body);
        await tax.save();
        res.status(201).json({ message: 'Tax added successfully', tax });
    } catch (error) {
        res.status(500).json({ message: 'Error adding tax', error });
    }
};

// Get all taxes
exports.getAllTaxes = async (req, res) => {
    try {
        const taxes = await TaxInformation.find();
        res.json(taxes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching taxes', error });
    }
};

// Get a single tax by ID
exports.getTaxById = async (req, res) => {
    try {
        const tax = await TaxInformation.findById(req.params.taxId);
        if (!tax) {
            return res.status(404).json({ message: 'Tax not found' });
        }
        res.json(tax);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tax', error });
    }
};

// Update a tax
exports.updateTax = async (req, res) => {
    try {
        const { taxId } = req.params;
        const updatedTax = await TaxInformation.findByIdAndUpdate(taxId, req.body, { new: true });
        res.json({ message: 'Tax updated successfully', tax: updatedTax });
    } catch (error) {
        res.status(500).json({ message: 'Error updating tax', error });
    }
};

// Delete a tax
exports.deleteTax = async (req, res) => {
    try {
        const { taxId } = req.params;
        await TaxInformation.findByIdAndDelete(taxId);
        res.json({ message: 'Tax deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting tax', error });
    }
};