const mongoose = require('mongoose');

const salaryTypeSchema = new mongoose.Schema({
    sal_name: { type: String, required: true },
    salary_type: { type: String, required: true },
    status: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SalaryType', salaryTypeSchema);