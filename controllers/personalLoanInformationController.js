// controllers/personalLoanInformationController.js
const PersonalLoanInformation = require('../models/personal_loan_information');

// Add a new personal loan information
exports.addPersonalLoanInformation = async (req, res) => {
    try {
        const personalLoanInformation = new PersonalLoanInformation(req.body);
        await personalLoanInformation.save();
        res.status(201).json({ message: 'Personal loan information added successfully', personalLoanInformation });
    } catch (error) {
        res.status(500).json({ message: 'Error adding personal loan information', error });
    }
};

// Get all personal loan information
exports.getAllPersonalLoanInformation = async (req, res) => {
    try {
        const personalLoanInformation = await PersonalLoanInformation.find();
        res.json(personalLoanInformation);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching personal loan information', error });
    }
};

// Get a single personal loan information by ID
exports.getPersonalLoanInformationById = async (req, res) => {
    try {
        const personalLoanInformation = await PersonalLoanInformation.findById(req.params.personalLoanInformationId);
        if (!personalLoanInformation) {
            return res.status(404).json({ message: 'Personal loan information not found' });
        }
        res.json(personalLoanInformation);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching personal loan information', error });
    }
};

// Update personal loan information
exports.updatePersonalLoanInformation = async (req, res) => {
    try {
        const { personalLoanInformationId } = req.params;
        const updatedPersonalLoanInformation = await PersonalLoanInformation.findByIdAndUpdate(personalLoanInformationId, req.body, { new: true });
        res.json({ message: 'Personal loan information updated successfully', personalLoanInformation: updatedPersonalLoanInformation });
    } catch (error) {
        res.status(500).json({ message: 'Error updating personal loan information', error });
    }
};

// Delete personal loan information
exports.deletePersonalLoanInformation = async (req, res) => {
    try {
        const { personalLoanInformationId } = req.params;
        await PersonalLoanInformation.findByIdAndDelete(personalLoanInformationId);
        res.json({ message: 'Personal loan information deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting personal loan information', error });
    }
};