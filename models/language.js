const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    phrase: { type: String, required: true },
    english: { type: String, default: null },
    bangla: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Language', languageSchema);