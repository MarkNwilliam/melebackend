const mongoose = require('mongoose');

const bankSummarySchema = new mongoose.Schema({
    bank_id: { type: String, default: null },
    description: { type: String, default: null },
    deposite_id: { type: String, default: null },
    date: { type: String, default: null },
    ac_type: { type: String, default: null },
    dr: { type: Number, default: 0.0 },
    cr: { type: Number, default: 0.0 },
    ammount: { type: Number, default: 0.0 },
    status: { type: Number, default: 1 },
}, { timestamps: true });

module.exports = mongoose.model('BankSummary', bankSummarySchema);