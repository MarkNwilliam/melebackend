// controllers/secUserRoleController.js
const SecUserRole = require('../models/sec_user_role');

// Assign a role to a user
exports.assignRoleToUser = async (req, res) => {
    try {
        const secUserRole = new SecUserRole(req.body);
        await secUserRole.save();
        res.status(201).json({ message: 'Role assigned to user successfully', secUserRole });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning role to user', error });
    }
};

// Get all user-role assignments
exports.getAllUserRoleAssignments = async (req, res) => {
    try {
        const userRoleAssignments = await SecUserRole.find().populate('user_id roleid');
        res.json(userRoleAssignments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user-role assignments', error });
    }
};

// Get a single user-role assignment by ID
exports.getUserRoleAssignmentById = async (req, res) => {
    try {
        const userRoleAssignment = await SecUserRole.findById(req.params.userRoleAssignmentId).populate('user_id roleid');
        if (!userRoleAssignment) {
            return res.status(404).json({ message: 'User-role assignment not found' });
        }
        res.json(userRoleAssignment);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user-role assignment', error });
    }
};

// Update a user-role assignment
exports.updateUserRoleAssignment = async (req, res) => {
    try {
        const { userRoleAssignmentId } = req.params;
        const updatedUserRoleAssignment = await SecUserRole.findByIdAndUpdate(userRoleAssignmentId, req.body, { new: true });
        res.json({ message: 'User-role assignment updated successfully', userRoleAssignment: updatedUserRoleAssignment });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user-role assignment', error });
    }
};

// Delete a user-role assignment
exports.deleteUserRoleAssignment = async (req, res) => {
    try {
        const { userRoleAssignmentId } = req.params;
        await SecUserRole.findByIdAndDelete(userRoleAssignmentId);
        res.json({ message: 'User-role assignment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user-role assignment', error });
    }
};