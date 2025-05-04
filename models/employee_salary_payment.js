const mongoose = require('mongoose');

const employeeSalaryPaymentSchema = new mongoose.Schema({
    generate_id: { type: Number, required: true },
    employee_id: { type: String, required: true },
    total_salary: { type: Number, default: 0.0 },
    total_working_minutes: { type: String, required: true },
    working_period: { type: String, required: true },
    payment_due: { type: String, required: true },
    payment_date: { type: String, required: true },
    paid_by: { type: String, required: true },
    salary_month: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('EmployeeSalaryPayment', employeeSalaryPaymentSchema);