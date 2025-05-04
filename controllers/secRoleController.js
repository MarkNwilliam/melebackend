// controllers/secRoleController.js
const SecRole = require('../models/sec_role');

// Add a new role
exports.addSecRole = async (req, res) => {
    try {
        const secRole = new SecRole(req.body);
        await secRole.save();
        res.status(201).json({ message: 'Role added successfully', secRole });
    } catch (error) {
        res.status(500).json({ message: 'Error adding role', error });
    }
};

// Get all roles
exports.getAllSecRoles = async (req, res) => {
    try {
        const secRoles = await SecRole.find();
        res.json(secRoles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching roles', error });
    }
};

// Get a single role by ID
exports.getSecRoleById = async (req, res) => {
    try {
        const secRole = await SecRole.findById(req.params.secRoleId);
        if (!secRole) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.json(secRole);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching role', error });
    }
};

// Update a role
exports.updateSecRole = async (req, res) => {
    try {
        const { secRoleId } = req.params;
        const updatedSecRole = await SecRole.findByIdAndUpdate(secRoleId, req.body, { new: true });
        res.json({ message: 'Role updated successfully', secRole: updatedSecRole });
    } catch (error) {
        res.status(500).json({ message: 'Error updating role', error });
    }
};

// Delete a role
exports.deleteSecRole = async (req, res) => {
    try {
        const { secRoleId } = req.params;
        await SecRole.findByIdAndDelete(secRoleId);
        res.json({ message: 'Role deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting role', error });
    }
};