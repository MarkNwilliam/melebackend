const mongoose = require('mongoose');

const customerInformationSchema = new mongoose.Schema({
    customer_name: { type: String, default: null },
    customer_address: { type: String, required: true },
    customer_mobile: { type: String, required: true },
    customer_email: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CustomerInformation', customerInformationSchema);