const mongoose = require('mongoose');

const companyInformationSchema = new mongoose.Schema({
    company_id: { type: String, required: true },
    company_name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    website: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CompanyInformation', companyInformationSchema);