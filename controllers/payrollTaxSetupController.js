// controllers/payrollTaxSetupController.js
const PayrollTaxSetup = require('../models/payroll_tax_setup');

// Add a new payroll tax setup
exports.addPayrollTaxSetup = async (req, res) => {
    try {
        const payrollTaxSetup = new PayrollTaxSetup(req.body);
        await payrollTaxSetup.save();
        res.status(201).json({ message: 'Payroll tax setup added successfully', payrollTaxSetup });
    } catch (error) {
        res.status(500).json({ message: 'Error adding payroll tax setup', error });
    }
};

// Get all payroll tax setups
exports.getAllPayrollTaxSetups = async (req, res) => {
    try {
        const payrollTaxSetups = await PayrollTaxSetup.find();
        res.json(payrollTaxSetups);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payroll tax setups', error });
    }
};

// Get a single payroll tax setup by ID
exports.getPayrollTaxSetupById = async (req, res) => {
    try {
        const payrollTaxSetup = await PayrollTaxSetup.findById(req.params.payrollTaxSetupId);
        if (!payrollTaxSetup) {
            return res.status(404).json({ message: 'Payroll tax setup not found' });
        }
        res.json(payrollTaxSetup);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payroll tax setup', error });
    }
};

// Update a payroll tax setup
exports.updatePayrollTaxSetup = async (req, res) => {
    try {
        const { payrollTaxSetupId } = req.params;
        const updatedPayrollTaxSetup = await PayrollTaxSetup.findByIdAndUpdate(payrollTaxSetupId, req.body, { new: true });
        res.json({ message: 'Payroll tax setup updated successfully', payrollTaxSetup: updatedPayrollTaxSetup });
    } catch (error) {
        res.status(500).json({ message: 'Error updating payroll tax setup', error });
    }
};

// Delete a payroll tax setup
exports.deletePayrollTaxSetup = async (req, res) => {
    try {
        const { payrollTaxSetupId } = req.params;
        await PayrollTaxSetup.findByIdAndDelete(payrollTaxSetupId);
        res.json({ message: 'Payroll tax setup deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payroll tax setup', error });
    }
};