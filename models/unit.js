const mongoose = require('mongoose');

// Schema for units
const unitSchema = new mongoose.Schema({
    unit_name: { type: String, required: true },
    status: { type: Boolean, required: true, default: true }, // Default status is true (active)
}, { timestamps: true });

// Function to get or create a pharmacy-specific model
const getUnitModel = (pharmacyId) => {
    const collectionName = `pharmacy_${pharmacyId}_units`; // Dynamic collection name
    return mongoose.models[collectionName] || mongoose.model(collectionName, unitSchema);
};

module.exports = getUnitModel;