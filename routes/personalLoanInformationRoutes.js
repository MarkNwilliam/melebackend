// routes/personalLoanInformationRoutes.js
const express = require('express');
const router = express.Router();
const personalLoanInformationController = require('../controllers/personalLoanInformationController');

// Personal Loan Information routes
router.post('/personal-loan-information', personalLoanInformationController.addPersonalLoanInformation); // Add a new personal loan information
router.get('/personal-loan-information', personalLoanInformationController.getAllPersonalLoanInformation); // Get all personal loan information
router.get('/personal-loan-information/:personalLoanInformationId', personalLoanInformationController.getPersonalLoanInformationById); // Get a single personal loan information by ID
router.put('/personal-loan-information/:personalLoanInformationId', personalLoanInformationController.updatePersonalLoanInformation); // Update personal loan information
router.delete('/personal-loan-information/:personalLoanInformationId', personalLoanInformationController.deletePersonalLoanInformation); // Delete personal loan information

module.exports = router;