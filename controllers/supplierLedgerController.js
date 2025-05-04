// controllers/supplierLedgerController.js
const SupplierLedger = require('../models/supplier_ledger');

// Add a new ledger entry
exports.addLedgerEntry = async (req, res) => {
    try {
        const ledgerEntry = new SupplierLedger(req.body);
        await ledgerEntry.save();
        res.status(201).json({ message: 'Ledger entry added successfully', ledgerEntry });
    } catch (error) {
        res.status(500).json({ message: 'Error adding ledger entry', error });
    }
};

// Get all ledger entries for a supplier
exports.getLedgerEntries = async (req, res) => {
    try {
        const { supplierId } = req.params;
        const ledgerEntries = await SupplierLedger.find({ supplier_id: supplierId });
        res.json(ledgerEntries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ledger entries', error });
    }
};

// Get a single ledger entry by ID
exports.getLedgerEntryById = async (req, res) => {
    try {
        const ledgerEntry = await SupplierLedger.findById(req.params.ledgerEntryId);
        if (!ledgerEntry) {
            return res.status(404).json({ message: 'Ledger entry not found' });
        }
        res.json(ledgerEntry);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ledger entry', error });
    }
};

// Update a ledger entry
exports.updateLedgerEntry = async (req, res) => {
    try {
        const { ledgerEntryId } = req.params;
        const updatedLedgerEntry = await SupplierLedger.findByIdAndUpdate(ledgerEntryId, req.body, { new: true });
        res.json({ message: 'Ledger entry updated successfully', ledgerEntry: updatedLedgerEntry });
    } catch (error) {
        res.status(500).json({ message: 'Error updating ledger entry', error });
    }
};

// Delete a ledger entry
exports.deleteLedgerEntry = async (req, res) => {
    try {
        const { ledgerEntryId } = req.params;
        await SupplierLedger.findByIdAndDelete(ledgerEntryId);
        res.json({ message: 'Ledger entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting ledger entry', error });
    }
};