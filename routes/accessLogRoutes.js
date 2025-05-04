// routes/accessLogRoutes.js
const express = require('express');
const router = express.Router();
const accessLogController = require('../controllers/accessLogController');

// Access Log routes
router.post('/access-logs', accessLogController.addAccessLog); // Add a new access log
router.get('/access-logs', accessLogController.getAllAccessLogs); // Get all access logs
router.get('/access-logs/:accessLogId', accessLogController.getAccessLogById); // Get a single access log by ID
router.put('/access-logs/:accessLogId', accessLogController.updateAccessLog); // Update an access log
router.delete('/access-logs/:accessLogId', accessLogController.deleteAccessLog); // Delete an access log

module.exports = router;