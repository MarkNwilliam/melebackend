// models/User.js
const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    firebase_id: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,   

    },
    first_name: {
        type: String,

    },
    last_name: {
        type: String,
 
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    date_of_birth: {
        type: Date,
    },
    status: {
        type: Number,
        default: 1, // 1 = active, 0 = inactive
    },
    logo: {
        type: String, // URL or path to the profile picture
    },
    display_name: {
        type: String,
        required: false, // Add the country field here
    },
    pharmacy_name: {
        type: String,
        required: false, // Add the country field here
    },
    country: {
        type: String,
        required: false, // Add the country field here
    },
    city: {
        type: String,
        required: false, // Add the country field here
    },
}, { timestamps: true });

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
    email: {
        type: String,
    },
    display_name: {
        type: String,
        required: false,

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

// Create the Models
const User = mongoose.model('User', userSchema);
const UserLogin = mongoose.model('UserLogin', userLoginSchema);

// Export the models
module.exports = { User, UserLogin };