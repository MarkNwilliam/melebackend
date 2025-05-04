const mongoose = require('mongoose');

const secRoleSchema = new mongoose.Schema({
    type: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SecRole', secRoleSchema);