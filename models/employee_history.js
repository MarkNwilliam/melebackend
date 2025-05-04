const mongoose = require('mongoose');

const employeeHistorySchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    designation: { type: String, required: true },
    phone: { type: String, required: true },
    rate_type: { type: Number, required: true },
    hrate: { type: Number, required: true },
    email: { type: String, required: true },
    blood_group: { type: String, required: true },
    address_line_1: { type: String, required: true },
    address_line_2: { type: String, required: true },
    image: { type: String, default: null },
    country: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('EmployeeHistory', employeeHistorySchema);