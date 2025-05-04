const mongoose = require('mongoose');

const productPurchaseSchema = new mongoose.Schema({
    chalan_no: { type: String, required: true }, // Chalan number for the purchase
    manufacturer_id: { type: String }, // ID of the manufacturer
    grand_total_amount: { type: Number, default: 0.0 }, // Total amount of the purchase
    total_discount: { type: Number, default: 0.0 }, // Total discount applied
    purchase_date: { type: String, required: true }, // Date of purchase
    purchase_details: { type: String, required: true }, // Details of the purchase
    status: { type: Number, required: true, default: 1 }, // Status of the purchase (1 = active, 0 = inactive)
    purchase_id: { type: String, required: true }, // Unique purchase ID
    bank_id: { type: String, default: null }, // ID of the bank (if payment is via bank)
    payment_type: { type: Number, required: true }, // Payment type (1 = Cash, 2 = Bank, 3 = Cheque, etc.)
    cheque_no: { type: String, default: null }, // Cheque number (if payment is via cheque)
    bank_transaction_no: { type: String, default: null }, // Bank transaction number (if payment is via bank)
    remarks: { type: String, default: null }, // Additional remarks
}, { timestamps: true });

module.exports = (pharmacyId) => {
    return mongoose.model(`pharmacy_${pharmacyId}_product_purchases`, productPurchaseSchema);
};