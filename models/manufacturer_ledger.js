const mongoose = require('mongoose');

const manufacturerLedgerSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    manufacturer_id: { type: Number},
    chalan_no: { type: String, default: null },
    deposit_no: { type: String, default: null },
    amount: { type: Number, default: 0.0 },
    description: { type: String, required: true },
    payment_type: { type: String, required: true },
    cheque_no: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: Number, required: true },
    d_c: { type: String, default: null },
}, { timestamps: true });

module.exports = (pharmacyId) => {
    return mongoose.model(`pharmacy_${pharmacyId}_manufacturer_ledgers`, manufacturerLedgerSchema);
};