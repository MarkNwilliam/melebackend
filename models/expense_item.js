const mongoose = require('mongoose');

const expenseItemSchema = new mongoose.Schema({
    expense_item_name: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ExpenseItem', expenseItemSchema);