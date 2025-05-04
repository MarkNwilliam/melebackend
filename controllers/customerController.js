// controllers/customerController.js
const CustomerInformation = require('../models/customer_information');

// Add a new customer
exports.addCustomer = async (req, res) => {
    try {
        const customer = new CustomerInformation(req.body);
        await customer.save();
        res.status(201).json({ message: 'Customer added successfully', customer });
    } catch (error) {
        res.status(500).json({ message: 'Error adding customer', error });
    }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await CustomerInformation.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customers', error });
    }
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await CustomerInformation.findById(req.params.customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer', error });
    }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        const updatedCustomer = await CustomerInformation.findByIdAndUpdate(customerId, req.body, { new: true });
        res.json({ message: 'Customer updated successfully', customer: updatedCustomer });
    } catch (error) {
        res.status(500).json({ message: 'Error updating customer', error });
    }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        await CustomerInformation.findByIdAndDelete(customerId);
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting customer', error });
    }
};