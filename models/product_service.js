const mongoose = require('mongoose');

const productServiceSchema = new mongoose.Schema({
    service_name: { type: String, required: true },
    description: { type: String, required: true },
    charge: { type: Number, default: 0.0 },
    tax0: { type: String, default: null },
    tax1: { type: String, default: null },
    tax2: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('ProductService', productServiceSchema);