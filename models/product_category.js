const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
    category_name: { type: String, default: null },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ProductCategory', productCategorySchema);