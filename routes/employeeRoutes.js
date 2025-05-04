// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Employee routes
router.post('/employees', employeeController.addEmployee); // Add a new employee
router.get('/employees', employeeController.getAllEmployees); // Get all employees
router.get('/employees/:employeeId', employeeController.getEmployeeById); // Get a single employee by ID
router.put('/employees/:employeeId', employeeController.updateEmployee); // Update an employee
router.delete('/employees/:employeeId', employeeController.deleteEmployee); // Delete an employee

module.exports = router;