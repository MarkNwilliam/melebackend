const mongoose = require('mongoose');

const customerLedgerSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    customer_id: { type: Number, required: true },
    invoice_no: { type: Number, default: null },
    receipt_no: { type: String, default: null },
    amount: { type: Number, default: 0.0 },
    description: { type: String, required: true },
    payment_type: { type: String, required: true },
    cheque_no: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: Number, required: true },
    d_c: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('CustomerLedger', customerLedgerSchema);