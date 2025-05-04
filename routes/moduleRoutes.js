// routes/moduleRoutes.js
const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

// Module routes
router.post('/modules', moduleController.addModule); // Add a new module
router.get('/modules', moduleController.getAllModules); // Get all modules
router.get('/modules/:moduleId', moduleController.getModuleById); // Get a single module by ID
router.put('/modules/:moduleId', moduleController.updateModule); // Update a module
router.delete('/modules/:moduleId', moduleController.deleteModule); // Delete a module

module.exports = router;