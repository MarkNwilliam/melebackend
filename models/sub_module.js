const mongoose = require('mongoose');

const subModuleSchema = new mongoose.Schema({
    mid: {
        type: Number,
        required: true,
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

module.exports = mongoose.model('SubModule', subModuleSchema);