const mongoose = require('mongoose');

const dailyClosingSchema = new mongoose.Schema({
    closing_id: { type: String, required: true },
    last_day_closing: { type: Number, required: true },
    cash_in: { type: Number, required: true },
    cash_out: { type: Number, required: true },
    date: { type: String, required: true },
    amount: { type: Number, required: true },
    adjustment: { type: Number, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('DailyClosing', dailyClosingSchema);