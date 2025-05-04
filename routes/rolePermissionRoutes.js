// routes/rolePermissionRoutes.js
const express = require('express');
const router = express.Router();
const rolePermissionController = require('../controllers/rolePermissionController');

// Role Permission routes
router.post('/role-permissions', rolePermissionController.addRolePermission); // Add a new role permission
router.get('/role-permissions', rolePermissionController.getAllRolePermissions); // Get all role permissions
router.get('/role-permissions/:rolePermissionId', rolePermissionController.getRolePermissionById); // Get a single role permission by ID
router.put('/role-permissions/:rolePermissionId', rolePermissionController.updateRolePermission); // Update a role permission
router.delete('/role-permissions/:rolePermissionId', rolePermissionController.deleteRolePermission); // Delete a role permission

module.exports = router;