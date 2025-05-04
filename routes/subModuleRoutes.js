// routes/subModuleRoutes.js
const express = require('express');
const router = express.Router();
const subModuleController = require('../controllers/subModuleController');

// SubModule routes
router.post('/submodules', subModuleController.addSubModule); // Add a new submodule
router.get('/submodules', subModuleController.getAllSubModules); // Get all submodules
router.get('/submodules/:subModuleId', subModuleController.getSubModuleById); // Get a single submodule by ID
router.put('/submodules/:subModuleId', subModuleController.updateSubModule); // Update a submodule
router.delete('/submodules/:subModuleId', subModuleController.deleteSubModule); // Delete a submodule

module.exports = router;