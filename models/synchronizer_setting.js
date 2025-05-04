const mongoose = require('mongoose');

const synchronizerSettingSchema = new mongoose.Schema({
    hostname: { type: String, required: true },
    username: { type: String, },
    password: { type: String, required: true },
    port: { type: String, required: true },
    debug: { type: String, required: true },
    project_root: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SynchronizerSetting', synchronizerSettingSchema);