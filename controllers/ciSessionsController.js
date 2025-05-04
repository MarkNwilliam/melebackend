// controllers/ciSessionsController.js
const CiSessions = require('../models/ci_sessions');

// Add a new session
exports.addCiSession = async (req, res) => {
    try {
        const ciSession = new CiSessions(req.body);
        await ciSession.save();
        res.status(201).json({ message: 'Session added successfully', ciSession });
    } catch (error) {
        res.status(500).json({ message: 'Error adding session', error });
    }
};

// Get all sessions
exports.getAllCiSessions = async (req, res) => {
    try {
        const ciSessions = await CiSessions.find();
        res.json(ciSessions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sessions', error });
    }
};

// Get a single session by ID
exports.getCiSessionById = async (req, res) => {
    try {
        const ciSession = await CiSessions.findById(req.params.ciSessionId);
        if (!ciSession) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.json(ciSession);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching session', error });
    }
};

// Update a session
exports.updateCiSession = async (req, res) => {
    try {
        const { ciSessionId } = req.params;
        const updatedCiSession = await CiSessions.findByIdAndUpdate(ciSessionId, req.body, { new: true });
        res.json({ message: 'Session updated successfully', ciSession: updatedCiSession });
    } catch (error) {
        res.status(500).json({ message: 'Error updating session', error });
    }
};

// Delete a session
exports.deleteCiSession = async (req, res) => {
    try {
        const { ciSessionId } = req.params;
        await CiSessions.findByIdAndDelete(ciSessionId);
        res.json({ message: 'Session deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting session', error });
    }
};