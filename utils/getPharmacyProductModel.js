// utils/getPharmacyProductModel.js
const mongoose = require('mongoose');

const getPharmacyProductModel = (pharmacyId) => {
    const collectionName = `pharmacy_${pharmacyId}_products`;
    return mongoose.model(collectionName, require('../models/product_information'));
};

module.exports = getPharmacyProductModel;