const mongoose = require('mongoose');

const employeeSalarySetupSchema = new mongoose.Schema({
    employee_id: { type: String, required: true },
    sal_type: { type: String, required: true },
    salary_type_id: { type: String, required: true },
    amount: { type: Number, default: 0.0 },
    create_date: { type: Date, default: null },
    update_date: { type: Date, default: null },
    update_id: { type: String, required: true },
    gross_salary: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('EmployeeSalarySetup', employeeSalarySetupSchema);