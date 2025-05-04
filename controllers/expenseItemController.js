const ExpenseItem = require('../models/expense_item');

// Create a new ExpenseItem
exports.createExpenseItem = async (req, res) => {
    try {
        const expenseItem = new ExpenseItem(req.body);
        await expenseItem.save();
        res.status(201).json(expenseItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all ExpenseItems
exports.getAllExpenseItems = async (req, res) => {
    try {
        const expenseItems = await ExpenseItem.find();
        res.status(200).json(expenseItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single ExpenseItem by ID
exports.getExpenseItemById = async (req, res) => {
    try {
        const expenseItem = await ExpenseItem.findById(req.params.id);
        if (!expenseItem) {
            return res.status(404).json({ message: 'ExpenseItem not found' });
        }
        res.status(200).json(expenseItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an ExpenseItem by ID
exports.updateExpenseItem = async (req, res) => {
    try {
        const expenseItem = await ExpenseItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!expenseItem) {
            return res.status(404).json({ message: 'ExpenseItem not found' });
        }
        res.status(200).json(expenseItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an ExpenseItem by ID
exports.deleteExpenseItem = async (req, res) => {
    try {
        const expenseItem = await ExpenseItem.findByIdAndDelete(req.params.id);
        if (!expenseItem) {
            return res.status(404).json({ message: 'ExpenseItem not found' });
        }
        res.status(200).json({ message: 'ExpenseItem deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};