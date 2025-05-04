// routes/salaryRoutes.js
const express = require('express');
const router = express.Router();
const salaryController = require('../controllers/salaryController');

// Salary routes
router.post('/salary', salaryController.addSalaryPayment); // Add a new salary payment
router.get('/salary/:employeeId', salaryController.getSalaryPaymentsByEmployee); // Get all salary payments for an employee
router.put('/salary/:salaryPaymentId', salaryController.updateSalaryPayment); // Update a salary payment
router.delete('/salary/:salaryPaymentId', salaryController.deleteSalaryPayment); // Delete a salary payment

module.exports = router;