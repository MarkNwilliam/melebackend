const mongoose = require('mongoose');

const smsSettingsSchema = new mongoose.Schema({
    url: { type: String, required: true },
    sender_id: { type: String, required: true },
    api_key: { type: String, required: true },
    isinvoice: { type: Number, default: 0 },
    ispurchase: { type: Number, default: 0 },
    isservice: { type: Number, default: 0 },
    ispayment: { type: Number, default: 0 },
    isreceive: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('SmsSettings', smsSettingsSchema);