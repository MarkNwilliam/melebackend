const mongoose = require('mongoose');

const serviceInvoiceDetailsSchema = new mongoose.Schema({
    service_id: { type: Number, required: true },
    service_inv_id: { type: String, required: true },
    qty: { type: Number, default: 0.0 },
    charge: { type: Number, default: 0.0 },
    discount: { type: Number, default: 0.0 },
    discount_amount: { type: Number, default: 0.0 },
    total: { type: Number, default: 0.0 },
}, { timestamps: true });

module.exports = mongoose.model('ServiceInvoiceDetails', serviceInvoiceDetailsSchema);