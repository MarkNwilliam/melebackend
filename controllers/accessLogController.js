// controllers/accessLogController.js
const AccessLog = require('../models/access_log');

// Add a new access log
exports.addAccessLog = async (req, res) => {
    try {
        const accessLog = new AccessLog(req.body);
        await accessLog.save();
        res.status(201).json({ message: 'Access log added successfully', accessLog });
    } catch (error) {
        res.status(500).json({ message: 'Error adding access log', error });
    }
};

// Get all access logs
exports.getAllAccessLogs = async (req, res) => {
    try {
        const accessLogs = await AccessLog.find();
        res.json(accessLogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching access logs', error });
    }
};

// Get a single access log by ID
exports.getAccessLogById = async (req, res) => {
    try {
        const accessLog = await AccessLog.findById(req.params.accessLogId);
        if (!accessLog) {
            return res.status(404).json({ message: 'Access log not found' });
        }
        res.json(accessLog);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching access log', error });
    }
};

// Update an access log
exports.updateAccessLog = async (req, res) => {
    try {
        const { accessLogId } = req.params;
        const updatedAccessLog = await AccessLog.findByIdAndUpdate(accessLogId, req.body, { new: true });
        res.json({ message: 'Access log updated successfully', accessLog: updatedAccessLog });
    } catch (error) {
        res.status(500).json({ message: 'Error updating access log', error });
    }
};

// Delete an access log
exports.deleteAccessLog = async (req, res) => {
    try {
        const { accessLogId } = req.params;
        await AccessLog.findByIdAndDelete(accessLogId);
        res.json({ message: 'Access log deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting access log', error });
    }
};