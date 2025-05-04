const mongoose = require('mongoose');

const assetPurchaseSchema = new mongoose.Schema({
    p_date: { type: Date, required: true },
    supplier_id: { type: String, required: true },
    grand_total: { type: Number, required: true },
    payment_type: { type: Number, default: null },
    bank_id: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('AssetPurchase', assetPurchaseSchema);