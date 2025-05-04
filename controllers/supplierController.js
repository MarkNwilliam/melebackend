// controllers/supplierController.js
const SupplierInformation = require('../models/supplier_information');

// Add a new supplier
exports.addSupplier = async (req, res) => {
    try {
        const supplier = new SupplierInformation(req.body);
        await supplier.save();
        res.status(201).json({ message: 'Supplier added successfully', supplier });
    } catch (error) {
        res.status(500).json({ message: 'Error adding supplier', error });
    }
};

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await SupplierInformation.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching suppliers', error });
    }
};

// Get a single supplier by ID
exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await SupplierInformation.findById(req.params.supplierId);
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching supplier', error });
    }
};

// Update a supplier
exports.updateSupplier = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const updatedSupplier = await SupplierInformation.findByIdAndUpdate(supplierId, req.body, { new: true });
        res.json({ message: 'Supplier updated successfully', supplier: updatedSupplier });
    } catch (error) {
        res.status(500).json({ message: 'Error updating supplier', error });
    }
};

// Delete a supplier
exports.deleteSupplier = async (req, res) => {
    try {
        const { supplierId } = req.params;
        await SupplierInformation.findByIdAndDelete(supplierId);
        res.json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting supplier', error });
    }
};