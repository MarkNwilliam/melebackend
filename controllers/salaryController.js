// controllers/salaryController.js
const EmployeeSalaryPayment = require('../models/employee_salary_payment');

// Add a new salary payment
exports.addSalaryPayment = async (req, res) => {
    try {
        const salaryPayment = new EmployeeSalaryPayment(req.body);
        await salaryPayment.save();
        res.status(201).json({ message: 'Salary payment added successfully', salaryPayment });
    } catch (error) {
        res.status(500).json({ message: 'Error adding salary payment', error });
    }
};

// Get all salary payments for an employee
exports.getSalaryPaymentsByEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const salaryPayments = await EmployeeSalaryPayment.find({ employee_id: employeeId });
        res.json(salaryPayments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching salary payments', error });
    }
};

// Update a salary payment
exports.updateSalaryPayment = async (req, res) => {
    try {
        const { salaryPaymentId } = req.params;
        const updatedSalaryPayment = await EmployeeSalaryPayment.findByIdAndUpdate(salaryPaymentId, req.body, { new: true });
        res.json({ message: 'Salary payment updated successfully', salaryPayment: updatedSalaryPayment });
    } catch (error) {
        res.status(500).json({ message: 'Error updating salary payment', error });
    }
};

// Delete a salary payment
exports.deleteSalaryPayment = async (req, res) => {
    try {
        const { salaryPaymentId } = req.params;
        await EmployeeSalaryPayment.findByIdAndDelete(salaryPaymentId);
        res.json({ message: 'Salary payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting salary payment', error });
    }
};