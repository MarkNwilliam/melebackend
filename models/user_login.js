const mongoose = require('mongoose');

// Define the UserLogin Schema
const userLoginSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    firebase_id: {
        type: String,
        unique: true,
        required: true,
    },
    display_name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    user_type: {
        type: Number,
        default: 2, // 2 = regular user, 1 = admin
    },
    security_code: {
        type: String,
    },
    status: {
        type: Number,
        default: 0, // 0 = inactive, 1 = active
    },
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('UserLogin', userLoginSchema);