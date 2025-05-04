// routes/smsSettingsRoutes.js
const express = require('express');
const router = express.Router();
const smsSettingsController = require('../controllers/smsSettingsController');

// SMS Settings routes
router.post('/sms-settings', smsSettingsController.addSmsSettings); // Add new SMS settings
router.get('/sms-settings', smsSettingsController.getAllSmsSettings); // Get all SMS settings
router.get('/sms-settings/:smsSettingsId', smsSettingsController.getSmsSettingsById); // Get a single SMS setting by ID
router.put('/sms-settings/:smsSettingsId', smsSettingsController.updateSmsSettings); // Update SMS settings
router.delete('/sms-settings/:smsSettingsId', smsSettingsController.deleteSmsSettings); // Delete SMS settings

module.exports = router;