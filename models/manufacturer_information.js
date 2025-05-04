const mongoose = require('mongoose');

// Schema for manufacturers
const manufacturerInformationSchema = new mongoose.Schema({
    manufacturer_name: { type: String, required: true },
    address: { type: String},
    mobile: { type: String },
    details: { type: String},
    status: { type: Number, required: true, default: 1 }, // Default status is 1 (active)
}, { timestamps: true });

// Function to get or create a pharmacy-specific model
const getManufacturerModel = (pharmacyId) => {
    const collectionName = `pharmacy_${pharmacyId}_manufacturers`; // Dynamic collection name
    return mongoose.models[collectionName] || mongoose.model(collectionName, manufacturerInformationSchema);
};

module.exports = getManufacturerModel;