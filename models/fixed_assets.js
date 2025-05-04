const mongoose = require('mongoose');

const fixedAssetsSchema = new mongoose.Schema({
    item_code: { type: String, required: true },
    item_name: { type: String, required: true },
    price: { type: Number, required: true },
    insert_date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('FixedAssets', fixedAssetsSchema);