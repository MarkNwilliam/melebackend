const mongoose = require('mongoose');

const secUserRoleSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    roleid: { type: Number, required: true },
    createby: { type: String, required: true },
    createdate: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model('SecUserRole', secUserRoleSchema);