// controllers/synchronizerSettingController.js
const SynchronizerSetting = require('../models/synchronizer_setting');

// Add a new synchronizer setting
exports.addSynchronizerSetting = async (req, res) => {
    try {
        const synchronizerSetting = new SynchronizerSetting(req.body);
        await synchronizerSetting.save();
        res.status(201).json({ message: 'Synchronizer setting added successfully', synchronizerSetting });
    } catch (error) {
        res.status(500).json({ message: 'Error adding synchronizer setting', error });
    }
};

// Get all synchronizer settings
exports.getAllSynchronizerSettings = async (req, res) => {
    try {
        const synchronizerSettings = await SynchronizerSetting.find();
        res.json(synchronizerSettings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching synchronizer settings', error });
    }
};

// Get a single synchronizer setting by ID
exports.getSynchronizerSettingById = async (req, res) => {
    try {
        const synchronizerSetting = await SynchronizerSetting.findById(req.params.synchronizerSettingId);
        if (!synchronizerSetting) {
            return res.status(404).json({ message: 'Synchronizer setting not found' });
        }
        res.json(synchronizerSetting);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching synchronizer setting', error });
    }
};

// Update a synchronizer setting
exports.updateSynchronizerSetting = async (req, res) => {
    try {
        const { synchronizerSettingId } = req.params;
        const updatedSynchronizerSetting = await SynchronizerSetting.findByIdAndUpdate(synchronizerSettingId, req.body, { new: true });
        res.json({ message: 'Synchronizer setting updated successfully', synchronizerSetting: updatedSynchronizerSetting });
    } catch (error) {
        res.status(500).json({ message: 'Error updating synchronizer setting', error });
    }
};

// Delete a synchronizer setting
exports.deleteSynchronizerSetting = async (req, res) => {
    try {
        const { synchronizerSettingId } = req.params;
        await SynchronizerSetting.findByIdAndDelete(synchronizerSettingId);
        res.json({ message: 'Synchronizer setting deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting synchronizer setting', error });
    }
};