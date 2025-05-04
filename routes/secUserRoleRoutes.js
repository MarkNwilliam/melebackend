// routes/secUserRoleRoutes.js
const express = require('express');
const router = express.Router();
const secUserRoleController = require('../controllers/secUserRoleController');

// SecUserRole routes
router.post('/sec-user-roles', secUserRoleController.assignRoleToUser); // Assign a role to a user
router.get('/sec-user-roles', secUserRoleController.getAllUserRoleAssignments); // Get all user-role assignments
router.get('/sec-user-roles/:userRoleAssignmentId', secUserRoleController.getUserRoleAssignmentById); // Get a single user-role assignment by ID
router.put('/sec-user-roles/:userRoleAssignmentId', secUserRoleController.updateUserRoleAssignment); // Update a user-role assignment
router.delete('/sec-user-roles/:userRoleAssignmentId', secUserRoleController.deleteUserRoleAssignment); // Delete a user-role assignment

module.exports = router;