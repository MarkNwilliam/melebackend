const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true, // Ensure the id is unique
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '', // Default to empty string
    },
    image: {
        type: String,
        default: '', // Default to empty string
    },
    directory: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true, // Default to true
    },
}, { timestamps: true });

module.exports = mongoose.model('Module', moduleSchema);