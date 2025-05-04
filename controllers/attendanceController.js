// controllers/attendanceController.js
const Attendance = require('../models/attendance');

// Add a new attendance record
exports.addAttendance = async (req, res) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).json({ message: 'Attendance record added successfully', attendance });
    } catch (error) {
        res.status(500).json({ message: 'Error adding attendance record', error });
    }
};

// Get all attendance records for an employee
exports.getAttendanceByEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const attendanceRecords = await Attendance.find({ employee_id: employeeId });
        res.json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching attendance records', error });
    }
};

// Update an attendance record
exports.updateAttendance = async (req, res) => {
    try {
        const { attendanceId } = req.params;
        const updatedAttendance = await Attendance.findByIdAndUpdate(attendanceId, req.body, { new: true });
        res.json({ message: 'Attendance record updated successfully', attendance: updatedAttendance });
    } catch (error) {
        res.status(500).json({ message: 'Error updating attendance record', error });
    }
};

// Delete an attendance record
exports.deleteAttendance = async (req, res) => {
    try {
        const { attendanceId } = req.params;
        await Attendance.findByIdAndDelete(attendanceId);
        res.json({ message: 'Attendance record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting attendance record', error });
    }
};