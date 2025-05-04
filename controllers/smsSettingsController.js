// controllers/smsSettingsController.js
const SmsSettings = require('../models/sms_settings');

// Add new SMS settings
exports.addSmsSettings = async (req, res) => {
    try {
        const smsSettings = new SmsSettings(req.body);
        await smsSettings.save();
        res.status(201).json({ message: 'SMS settings added successfully', smsSettings });
    } catch (error) {
        res.status(500).json({ message: 'Error adding SMS settings', error });
    }
};

// Get all SMS settings
exports.getAllSmsSettings = async (req, res) => {
    try {
        const smsSettings = await SmsSettings.find();
        res.json(smsSettings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching SMS settings', error });
    }
};

// Get a single SMS setting by ID
exports.getSmsSettingsById = async (req, res) => {
    try {
        const smsSettings = await SmsSettings.findById(req.params.smsSettingsId);
        if (!smsSettings) {
            return res.status(404).json({ message: 'SMS settings not found' });
        }
        res.json(smsSettings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching SMS settings', error });
    }
};

// Update SMS settings
exports.updateSmsSettings = async (req, res) => {
    try {
        const { smsSettingsId } = req.params;
        const updatedSmsSettings = await SmsSettings.findByIdAndUpdate(smsSettingsId, req.body, { new: true });
        res.json({ message: 'SMS settings updated successfully', smsSettings: updatedSmsSettings });
    } catch (error) {
        res.status(500).json({ message: 'Error updating SMS settings', error });
    }
};

// Delete SMS settings
exports.deleteSmsSettings = async (req, res) => {
    try {
        const { smsSettingsId } = req.params;
        await SmsSettings.findByIdAndDelete(smsSettingsId);
        res.json({ message: 'SMS settings deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting SMS settings', error });
    }
};