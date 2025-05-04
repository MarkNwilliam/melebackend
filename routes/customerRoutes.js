// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Customer routes
router.post('/customers', customerController.addCustomer); // Add a new customer
router.get('/customers', customerController.getAllCustomers); // Get all customers
router.get('/customers/:customerId', customerController.getCustomerById); // Get a single customer by ID
router.put('/customers/:customerId', customerController.updateCustomer); // Update a customer
router.delete('/customers/:customerId', customerController.deleteCustomer); // Delete a customer

module.exports = router;