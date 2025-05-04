const mongoose = require('mongoose');

const invoiceDetailsSchema = new mongoose.Schema({
    invoice_details_id: { type: String, required: true },
    invoice_id: { type: Number, required: true },
    product_id: { type: String, required: true },
    batch_id: { type: String, required: true },
    cartoon: { type: Number, default: null },
    quantity: { type: Number, required: true },
    rate: { type: Number, default: null },
    manufacturer_rate: { type: Number, default: null },
    total_price: { type: Number, default: null },
    discount: { type: Number, default: null },
    tax: { type: Number, default: null },
    paid_amount: { type: Number, default: null },
    due_amount: { type: Number, default: null },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('InvoiceDetails', invoiceDetailsSchema);