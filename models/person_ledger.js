const mongoose = require('mongoose');

const personLedgerSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    person_id: { type: String, required: true },
    date: { type: String, required: true },
    debit: { type: Number, default: 0.0 },
    credit: { type: Number, default: 0.0 },
    details: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PersonLedger', personLedgerSchema);