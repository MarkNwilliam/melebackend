const mongoose = require('mongoose');

const designationSchema = new mongoose.Schema({
    designation: { type: String, required: true },
    details: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Designation', designationSchema);