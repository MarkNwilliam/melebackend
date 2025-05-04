const mongoose = require('mongoose');

const personalLoanInformationSchema = new mongoose.Schema({
    person_id: { type: String, required: true },
    person_name: { type: String, required: true },
    person_phone: { type: String, required: true },
    person_address: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PersonalLoanInformation', personalLoanInformationSchema);