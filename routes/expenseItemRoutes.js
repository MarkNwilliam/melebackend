const express = require('express');
const router = express.Router();
const expenseItemController = require('../controllers/expenseItemController');

// Create a new ExpenseItem
router.post('/', expenseItemController.createExpenseItem);

// Get all ExpenseItems
router.get('/', expenseItemController.getAllExpenseItems);

// Get a single ExpenseItem by ID
router.get('/:id', expenseItemController.getExpenseItemById);

// Update an ExpenseItem by ID
router.put('/:id', expenseItemController.updateExpenseItem);

// Delete an ExpenseItem by ID
router.delete('/:id', expenseItemController.deleteExpenseItem);

module.exports = router;