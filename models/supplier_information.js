const mongoose = require('mongoose');

const supplierInformationSchema = new mongoose.Schema({
    supplier_id: { type: String, required: true },
    supplier_name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SupplierInformation', supplierInformationSchema);