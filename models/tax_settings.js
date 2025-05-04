const mongoose = require('mongoose');

const taxSettingsSchema = new mongoose.Schema({
    default_value: { type: Number, required: true },
    tax_name: { type: String, required: true },
    nt: { type: Number, required: true },
    reg_no: { type: String, default: null },
    is_show: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('TaxSettings', taxSettingsSchema);