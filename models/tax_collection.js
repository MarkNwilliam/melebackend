const mongoose = require('mongoose');

const taxCollectionSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    customer_id: { type: String, required: true },
    relation_id: { type: String, required: true },
    tax0: { type: String, default: null },
    tax1: { type: String, default: null },
    tax2: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('TaxCollection', taxCollectionSchema);