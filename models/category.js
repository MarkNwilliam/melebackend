const mongoose = require('mongoose');

// Schema for categories
const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 1, // Default status is 1 (active)
    },
}, { timestamps: true });

// Function to get or create a pharmacy-specific model
const getCategoryModel = (pharmacyId) => {
    const collectionName = `pharmacy_${pharmacyId}_categories`; // Dynamic collection name
    return mongoose.models[collectionName] || mongoose.model(collectionName, categorySchema);
};

module.exports = getCategoryModel;