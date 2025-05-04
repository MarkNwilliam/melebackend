// controllers/expenseController.js
const Expense = require('../models/expense');

// Add a new expense
exports.addExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json({ message: 'Expense added successfully', expense });
    } catch (error) {
        res.status(500).json({ message: 'Error adding expense', error });
    }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expenses', error });
    }
};

// Get a single expense by ID
exports.getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.expenseId);
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expense', error });
    }
};

// Update an expense
exports.updateExpense = async (req, res) => {
    try {
        const { expenseId } = req.params;
        const updatedExpense = await Expense.findByIdAndUpdate(expenseId, req.body, { new: true });
        res.json({ message: 'Expense updated successfully', expense: updatedExpense });
    } catch (error) {
        res.status(500).json({ message: 'Error updating expense', error });
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    try {
        const { expenseId } = req.params;
        await Expense.findByIdAndDelete(expenseId);
        res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting expense', error });
    }
};