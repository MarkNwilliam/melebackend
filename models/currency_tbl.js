const mongoose = require('mongoose');

const currencyTblSchema = new mongoose.Schema({
    currency_name: { type: String, required: true },
    icon: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CurrencyTbl', currencyTblSchema);