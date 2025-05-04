// routes/ciSessionsRoutes.js
const express = require('express');
const router = express.Router();
const ciSessionsController = require('../controllers/ciSessionsController');

// CI Sessions routes
router.post('/ci-sessions', ciSessionsController.addCiSession); // Add a new session
router.get('/ci-sessions', ciSessionsController.getAllCiSessions); // Get all sessions
router.get('/ci-sessions/:ciSessionId', ciSessionsController.getCiSessionById); // Get a single session by ID
router.put('/ci-sessions/:ciSessionId', ciSessionsController.updateCiSession); // Update a session
router.delete('/ci-sessions/:ciSessionId', ciSessionsController.deleteCiSession); // Delete a session

module.exports = router;