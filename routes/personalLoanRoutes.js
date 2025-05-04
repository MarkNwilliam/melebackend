// routes/personalLoanRoutes.js
const express = require('express');
const router = express.Router();
const personalLoanController = require('../controllers/personalLoanController');

// Personal Loan routes
router.post('/personal-loans', personalLoanController.addPersonalLoan); // Add a new personal loan
router.get('/personal-loans', personalLoanController.getAllPersonalLoans); // Get all personal loans
router.get('/personal-loans/:personalLoanId', personalLoanController.getPersonalLoanById); // Get a single personal loan by ID
router.put('/personal-loans/:personalLoanId', personalLoanController.updatePersonalLoan); // Update a personal loan
router.delete('/personal-loans/:personalLoanId', personalLoanController.deletePersonalLoan); // Delete a personal loan

module.exports = router;