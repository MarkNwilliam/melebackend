// controllers/bankController.js
const BankAdd = require('../models/bank_add');

// Add a new bank
exports.addBank = async (req, res) => {
    try {
        const bank = new BankAdd(req.body);
        await bank.save();
        res.status(201).json({ message: 'Bank added successfully', bank });
    } catch (error) {
        res.status(500).json({ message: 'Error adding bank', error });
    }
};

// Get all banks
exports.getAllBanks = async (req, res) => {
    try {
        const banks = await BankAdd.find();
        res.json(banks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching banks', error });
    }
};

// Get a single bank by ID
exports.getBankById = async (req, res) => {
    try {
        const bank = await BankAdd.findById(req.params.bankId);
        if (!bank) {
            return res.status(404).json({ message: 'Bank not found' });
        }
        res.json(bank);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bank', error });
    }
};

// Update a bank
exports.updateBank = async (req, res) => {
    try {
        const { bankId } = req.params;
        const updatedBank = await BankAdd.findByIdAndUpdate(bankId, req.body, { new: true });
        res.json({ message: 'Bank updated successfully', bank: updatedBank });
    } catch (error) {
        res.status(500).json({ message: 'Error updating bank', error });
    }
};

// Delete a bank
exports.deleteBank = async (req, res) => {
    try {
        const { bankId } = req.params;
        await BankAdd.findByIdAndDelete(bankId);
        res.json({ message: 'Bank deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting bank', error });
    }
};