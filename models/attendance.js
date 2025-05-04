const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employee_id: { type: Number, required: true },
    date: { type: Date, required: true },
    sign_in: { type: String, required: true },
    sign_out: { type: String, required: true },
    staytime: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);