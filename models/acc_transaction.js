const mongoose = require('mongoose');

const accTransactionSchema = new mongoose.Schema({
    VNo: { type: String, default: null },
    Vtype: { type: String, default: null },
    VDate: { type: Date, default: null },
    COAID: { type: String, required: true },
    Narration: { type: String, default: null },
    Debit: { type: Number, default: null },
    Credit: { type: Number, default: null },
    IsPosted: { type: String, default: null },
    CreateBy: { type: String, default: null },
    CreateDate: { type: Date, default: null },
    UpdateBy: { type: String, default: null },
    UpdateDate: { type: Date, default: null },
    IsAppove: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('AccTransaction', accTransactionSchema);