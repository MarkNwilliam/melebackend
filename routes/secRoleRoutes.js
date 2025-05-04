// routes/secRoleRoutes.js
const express = require('express');
const router = express.Router();
const secRoleController = require('../controllers/secRoleController');

// SecRole routes
router.post('/sec-roles', secRoleController.addSecRole); // Add a new role
router.get('/sec-roles', secRoleController.getAllSecRoles); // Get all roles
router.get('/sec-roles/:secRoleId', secRoleController.getSecRoleById); // Get a single role by ID
router.put('/sec-roles/:secRoleId', secRoleController.updateSecRole); // Update a role
router.delete('/sec-roles/:secRoleId', secRoleController.deleteSecRole); // Delete a role

module.exports = router;