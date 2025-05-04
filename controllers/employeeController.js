// controllers/employeeController.js
const EmployeeHistory = require('../models/employee_history');

// Add a new employee
exports.addEmployee = async (req, res) => {
    try {
        const employee = new EmployeeHistory(req.body);
        await employee.save();
        res.status(201).json({ message: 'Employee added successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Error adding employee', error });
    }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await EmployeeHistory.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await EmployeeHistory.findById(req.params.employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employee', error });
    }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const updatedEmployee = await EmployeeHistory.findByIdAndUpdate(employeeId, req.body, { new: true });
        res.json({ message: 'Employee updated successfully', employee: updatedEmployee });
    } catch (error) {
        res.status(500).json({ message: 'Error updating employee', error });
    }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        await EmployeeHistory.findByIdAndDelete(employeeId);
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting employee', error });
    }
};