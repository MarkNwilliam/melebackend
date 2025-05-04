const mongoose = require('mongoose');

// Define the schema (same as before, no changes)
const productReturnSchema = new mongoose.Schema({
  return_id: { type: String, required: true },
  product_id: { type: String, required: true },
  invoice_id: { type: String, required: true },
  purchase_id: { type: String, default: null },
  date_purchase: { type: String, required: true },
  date_return: { type: String, required: true },
  byy_qty: { type: Number, default: 0.0 },
  ret_qty: { type: Number, default: 0.0 },
  customer_id: { type: String, required: true },
  manufacturer_id: { type: String, required: true },
  product_rate: { type: Number, default: 0.0 },
  deduction: { type: Number, default: 0.0 },
  total_deduct: { type: Number, default: 0.0 },
  total_tax: { type: Number, default: 0.0 },
  total_ret_amount: { type: Number, default: 0.0 },
  net_total_amount: { type: Number, default: 0.0 },
  reason: { type: String, required: true },
  usablity: { type: Number, required: true },
}, { timestamps: true });

// Dynamic model getter (same pattern as manufacturer_information)
const getProductReturnModel = (pharmacyId) => {
  const collectionName = `pharmacy_${pharmacyId}_product_returns`; // Unique per pharmacy
  return mongoose.models[collectionName] || mongoose.model(collectionName, productReturnSchema);
};

module.exports = getProductReturnModel;