const mongoose = require('mongoose');

const stockFixedAssetSchema = new mongoose.Schema({
    purchase_id: { type: Number, required: true },
    item_code: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('StockFixedAsset', stockFixedAssetSchema);