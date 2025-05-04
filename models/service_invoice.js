const mongoose = require('mongoose');

const serviceInvoiceSchema = new mongoose.Schema({
    voucher_no: { type: String, required: true },
    date: { type: Date, required: true },
    employee_id: { type: String, required: true },
    customer_id: { type: String, required: true },
    total_amount: { type: Number, default: 0.0 },
    total_discount: { type: Number, default: 0.0 },
    invoice_discount: { type: Number, default: 0.0 },
    total_tax: { type: Number, default: 0.0 },
    paid_amount: { type: Number, default: 0.0 },
    due_amount: { type: Number, default: 0.0 },
    shipping_cost: { type: Number, default: 0.0 },
    previous: { type: Number, default: 0.0 },
    details: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ServiceInvoice', serviceInvoiceSchema);