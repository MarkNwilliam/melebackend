const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoice_id: { type: Number, default: null },
    customer_id: { type: Number, default: null },
    date: { type: Date, default: null },
    total_amount: { type: Number, default: 0.0 },
    invoice: { type: Number, default: null },
    total_discount: { type: Number, default: 0.0 },
    invoice_discount: { type: Number, default: 0.0 },
    total_tax: { type: Number, default: 0.0 },
    prevous_due: { type: Number, default: 0.0 },
    sales_by: { type: String, default: null },
    invoice_details: { type: String, default: null },
    status: { type: Number, required: true },
    payment_type: { type: Number, default: 1 },
    bank_id: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);