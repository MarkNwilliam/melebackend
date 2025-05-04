const mongoose = require('mongoose');

const ciSessionsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    ip_address: { type: String, required: true },
    timestamp: { type: Number, default: 0 },
    data: { type: Buffer, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CiSessions', ciSessionsSchema);