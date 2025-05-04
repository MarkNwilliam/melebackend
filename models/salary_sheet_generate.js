const mongoose = require('mongoose');

const salarySheetGenerateSchema = new mongoose.Schema({
    name: { type: String, default: null },
    gdate: { type: String, default: null },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
    generate_by: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SalarySheetGenerate', salarySheetGenerateSchema);