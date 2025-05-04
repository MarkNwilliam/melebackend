// controllers/rolePermissionController.js
const RolePermission = require('../models/role_permission');

// Add a new role permission
exports.addRolePermission = async (req, res) => {
    try {
        const rolePermission = new RolePermission(req.body);
        await rolePermission.save();
        res.status(201).json({ message: 'Role permission added successfully', rolePermission });
    } catch (error) {
        res.status(500).json({ message: 'Error adding role permission', error });
    }
};

// Get all role permissions
exports.getAllRolePermissions = async (req, res) => {
    try {
        const rolePermissions = await RolePermission.find();
        res.json(rolePermissions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching role permissions', error });
    }
};

// Get a single role permission by ID
exports.getRolePermissionById = async (req, res) => {
    try {
        const rolePermission = await RolePermission.findById(req.params.rolePermissionId);
        if (!rolePermission) {
            return res.status(404).json({ message: 'Role permission not found' });
        }
        res.json(rolePermission);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching role permission', error });
    }
};

// Update a role permission
exports.updateRolePermission = async (req, res) => {
    try {
        const { rolePermissionId } = req.params;
        const updatedRolePermission = await RolePermission.findByIdAndUpdate(rolePermissionId, req.body, { new: true });
        res.json({ message: 'Role permission updated successfully', rolePermission: updatedRolePermission });
    } catch (error) {
        res.status(500).json({ message: 'Error updating role permission', error });
    }
};

// Delete a role permission
exports.deleteRolePermission = async (req, res) => {
    try {
        const { rolePermissionId } = req.params;
        await RolePermission.findByIdAndDelete(rolePermissionId);
        res.json({ message: 'Role permission deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting role permission', error });
    }
};