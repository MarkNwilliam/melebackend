const mongoose = require('mongoose');

// Schema for medicine types
const productTypeSchema = new mongoose.Schema({
    type_id: { type: String, default: null },
    type_name: { type: String, required: true },
    status: { type: Number, required: true, default: 1 }, // 1 = active, 0 = inactive
}, { timestamps: true });

// Function to get or create a pharmacy-specific model
const getProductTypeModel = (pharmacyId) => {
    const collectionName = `pharmacy_${pharmacyId}_product_types`; // Dynamic collection name
    return mongoose.models[collectionName] || mongoose.model(collectionName, productTypeSchema);
};

module.exports = getProductTypeModel;