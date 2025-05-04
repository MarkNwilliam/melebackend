// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/register', userController.register); // Register a new user
router.post('/login', userController.login); // Login a user
router.get('/users', userController.getAllUsers); // Get all users
router.put('/users/:userId', userController.updateUser); // Update a user
router.delete('/users/:userId', userController.deleteUser); // Delete a user
router.post('/userByEmail', userController.getUserByEmail); // Get user by email
router.post('/userByEmail', userController.getUserByEmail); // Get user by email
// New routes for Firebase ID
router.get('/userByFirebaseId/:firebase_id', userController.getUserByFirebaseId); // Get user by Firebase ID
router.put('/userByFirebaseId/:firebase_id', userController.updateUserByFirebaseId); // Update user by Firebase ID
router.delete('/userByFirebaseId/:firebase_id', userController.deleteUserByFirebaseId); // Delete user by Firebase ID


module.exports = router;