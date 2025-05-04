// models/accesslog.js
const mongoose = require('mongoose');

// Define the AccessLog schema
const accessLogSchema = new mongoose.Schema({
    sl_no: {
        type: Number,
        required: true,
        unique: true, // Ensures uniqueness
    },
    action_page: {
        type: String,
        maxlength: 50, // Limits the length to 50 characters
    },
    action_done: {
        type: String,
    },
    remarks: {
        type: String,
        required: true, // Remarks is a required field
    },
    user_name: {
        type: String,
        maxlength: 50, // Limits the length to 50 characters
    },
    entry_date: {
        type: Date,
        default: Date.now, // Defaults to the current date and time
    },
});

// Create the AccessLog model
const AccessLog = mongoose.model('AccessLog', accessLogSchema);

// Export the model
module.exports = AccessLog;