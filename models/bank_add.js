const mongoose = require('mongoose');

const bankAddSchema = new mongoose.Schema({
    bank_id: { type: String, required: true },
    bank_name: { type: String, required: true },
    ac_name: { type: String, default: null },
    ac_number: { type: String, default: null },
    branch: { type: String, default: null },
    signature_pic: { type: String, default: null },
    status: { type: Number, default: null },
}, { timestamps: true });

module.exports = mongoose.model('BankAdd', bankAddSchema);