// routes/bankRoutes.js
const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

// Bank routes
router.post('/banks', bankController.addBank); // Add a new bank
router.get('/banks', bankController.getAllBanks); // Get all banks
router.get('/banks/:bankId', bankController.getBankById); // Get a single bank by ID
router.put('/banks/:bankId', bankController.updateBank); // Update a bank
router.delete('/banks/:bankId', bankController.deleteBank); // Delete a bank

module.exports = router;