// routes/attendanceRoutes.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Attendance routes
router.post('/attendance', attendanceController.addAttendance); // Add a new attendance record
router.get('/attendance/:employeeId', attendanceController.getAttendanceByEmployee); // Get all attendance records for an employee
router.put('/attendance/:attendanceId', attendanceController.updateAttendance); // Update an attendance record
router.delete('/attendance/:attendanceId', attendanceController.deleteAttendance); // Delete an attendance record

module.exports = router;