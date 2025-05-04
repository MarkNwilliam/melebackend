// routes/synchronizerSettingRoutes.js
const express = require('express');
const router = express.Router();
const synchronizerSettingController = require('../controllers/synchronizerSettingController');

// Synchronizer Setting routes
router.post('/synchronizer-settings', synchronizerSettingController.addSynchronizerSetting); // Add a new synchronizer setting
router.get('/synchronizer-settings', synchronizerSettingController.getAllSynchronizerSettings); // Get all synchronizer settings
router.get('/synchronizer-settings/:synchronizerSettingId', synchronizerSettingController.getSynchronizerSettingById); // Get a single synchronizer setting by ID
router.put('/synchronizer-settings/:synchronizerSettingId', synchronizerSettingController.updateSynchronizerSetting); // Update a synchronizer setting
router.delete('/synchronizer-settings/:synchronizerSettingId', synchronizerSettingController.deleteSynchronizerSetting); // Delete a synchronizer setting

module.exports = router;