const mongoose = require('mongoose');

const payrollTaxSetupSchema = new mongoose.Schema({
    start_amount: { type: Number, default: 0.0 },
    end_amount: { type: Number, default: 0.0 },
    rate: { type: Number, default: 0.0 },
    status: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PayrollTaxSetup', payrollTaxSetupSchema);