const mongoose = require('mongoose');

const personalLoanSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    person_id: { type: String, required: true },
    debit: { type: String, required: true },
    credit: { type: Number, required: true },
    date: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PersonalLoan', personalLoanSchema);