const mongoose = require('mongoose');

const productInformationSchema = new mongoose.Schema({
    product_id: { type: String, required: true },
    pharmacy_id: { type: String, required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true }, // Reference to ProductCategory
    product_name: { type: String, required: true },
    generic_name: { type: String },
    strength: { type: String },
    box_size: { type: String },
    product_location: { type: String },
    price: { type: String, required: true },
    tax: { type: String, default: null },
    product_model: { type: String, default: null },
    manufacturer_id: { type: Number },
    manufacturer_price: { type: Number, default: null },
    unit: { type: String, default: null },
    product_details: { type: String, default: null },
    image: { type: String},
    status: { type: Number, required: true },
    tax0: { type: String, default: null },
    tax1: { type: String, default: null },
    tax2: { type: String, default: null },
    expiry_date: { type: Date }, // New field for expiry date
    number_of_units: { type: Number } // New field for number of units
}, { timestamps: true });

module.exports = productInformationSchema;