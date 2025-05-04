const mongoose = require('mongoose');

const accCoaSchema = new mongoose.Schema({
    HeadCode: { type: String, required: true },
    HeadName: { type: String, required: true },
    PHeadName: { type: String, required: true },
    HeadLevel: { type: Number, required: true },
    IsActive: { type: Boolean, required: true },
    IsTransaction: { type: Boolean, required: true },
    IsGL: { type: Boolean, required: true },
    HeadType: { type: String, required: true },
    IsBudget: { type: Boolean, required: true },
    IsDepreciation: { type: Boolean, required: true },
    DepreciationRate: { type: Number, required: true },
    CreateBy: { type: String, required: true },
    CreateDate: { type: Date, required: true },
    UpdateBy: { type: String, required: true },
    UpdateDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('AccCoa', accCoaSchema);