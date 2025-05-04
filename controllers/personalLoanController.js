// controllers/personalLoanController.js
const PersonalLoan = require('../models/personal_loan');

// Add a new personal loan
exports.addPersonalLoan = async (req, res) => {
    try {
        const personalLoan = new PersonalLoan(req.body);
        await personalLoan.save();
        res.status(201).json({ message: 'Personal loan added successfully', personalLoan });
    } catch (error) {
        res.status(500).json({ message: 'Error adding personal loan', error });
    }
};

// Get all personal loans
exports.getAllPersonalLoans = async (req, res) => {
    try {
        const personalLoans = await PersonalLoan.find();
        res.json(personalLoans);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching personal loans', error });
    }
};

// Get a single personal loan by ID
exports.getPersonalLoanById = async (req, res) => {
    try {
        const personalLoan = await PersonalLoan.findById(req.params.personalLoanId);
        if (!personalLoan) {
            return res.status(404).json({ message: 'Personal loan not found' });
        }
        res.json(personalLoan);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching personal loan', error });
    }
};

// Update a personal loan
exports.updatePersonalLoan = async (req, res) => {
    try {
        const { personalLoanId } = req.params;
        const updatedPersonalLoan = await PersonalLoan.findByIdAndUpdate(personalLoanId, req.body, { new: true });
        res.json({ message: 'Personal loan updated successfully', personalLoan: updatedPersonalLoan });
    } catch (error) {
        res.status(500).json({ message: 'Error updating personal loan', error });
    }
};

// Delete a personal loan
exports.deletePersonalLoan = async (req, res) => {
    try {
        const { personalLoanId } = req.params;
        await PersonalLoan.findByIdAndDelete(personalLoanId);
        res.json({ message: 'Personal loan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting personal loan', error });
    }
};