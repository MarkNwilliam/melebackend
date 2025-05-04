// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Expense routes
router.post('/expenses', expenseController.addExpense); // Add a new expense
router.get('/expenses', expenseController.getAllExpenses); // Get all expenses
router.get('/expenses/:expenseId', expenseController.getExpenseById); // Get a single expense by ID
router.put('/expenses/:expenseId', expenseController.updateExpense); // Update an expense
router.delete('/expenses/:expenseId', expenseController.deleteExpense); // Delete an expense

module.exports = router;