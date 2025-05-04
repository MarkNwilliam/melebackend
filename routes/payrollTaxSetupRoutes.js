// routes/payrollTaxSetupRoutes.js
const express = require('express');
const router = express.Router();
const payrollTaxSetupController = require('../controllers/payrollTaxSetupController');

// Payroll Tax Setup routes
router.post('/payroll-tax-setups', payrollTaxSetupController.addPayrollTaxSetup); // Add a new payroll tax setup
router.get('/payroll-tax-setups', payrollTaxSetupController.getAllPayrollTaxSetups); // Get all payroll tax setups
router.get('/payroll-tax-setups/:payrollTaxSetupId', payrollTaxSetupController.getPayrollTaxSetupById); // Get a single payroll tax setup by ID
router.put('/payroll-tax-setups/:payrollTaxSetupId', payrollTaxSetupController.updatePayrollTaxSetup); // Update a payroll tax setup
router.delete('/payroll-tax-setups/:payrollTaxSetupId', payrollTaxSetupController.deletePayrollTaxSetup); // Delete a payroll tax setup

module.exports = router;