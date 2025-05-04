const mongoose = require('mongoose');

const productPurchaseDetailsSchema = new mongoose.Schema({
    purchase_detail_id: { type: String, required: true },
    purchase_id: { type: String, required: true },
    product_id: { type: String, required: true },
    quantity: { type: Number, default: 0.0 },
    rate: { type: Number, default: 0.0 },
    total_amount: { type: Number, default: 0.0 },
    discount: { type: Number, default: 0.0 },
    batch_id: { type: String, required: true },
    expeire_date: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = (pharmacyId) => {
    return mongoose.model(`pharmacy_${pharmacyId}_product_purchase_details`, productPurchaseDetailsSchema);
};