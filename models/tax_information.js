const mongoose = require('mongoose');

const taxInformationSchema = new mongoose.Schema({
    tax_id: { type: String, required: true },
    tax: { type: Number, default: null },
    status: { type: Number, default: null },
}, { timestamps: true });

module.exports = mongoose.model('TaxInformation', taxInformationSchema);