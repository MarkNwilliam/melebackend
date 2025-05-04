const mongoose = require('mongoose');

const personInformationSchema = new mongoose.Schema({
    person_name: { type: String, required: true },
    person_phone: { type: String, required: true },
    person_address: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PersonInformation', personInformationSchema);