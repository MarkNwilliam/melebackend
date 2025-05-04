// controllers/languageController.js
const Language = require('../models/language');

// Add a new language phrase
exports.addLanguagePhrase = async (req, res) => {
    try {
        const languagePhrase = new Language(req.body);
        await languagePhrase.save();
        res.status(201).json({ message: 'Language phrase added successfully', languagePhrase });
    } catch (error) {
        res.status(500).json({ message: 'Error adding language phrase', error });
    }
};

// Get all language phrases
exports.getAllLanguagePhrases = async (req, res) => {
    try {
        const languagePhrases = await Language.find();
        res.json(languagePhrases);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching language phrases', error });
    }
};

// Get a single language phrase by ID
exports.getLanguagePhraseById = async (req, res) => {
    try {
        const languagePhrase = await Language.findById(req.params.languagePhraseId);
        if (!languagePhrase) {
            return res.status(404).json({ message: 'Language phrase not found' });
        }
        res.json(languagePhrase);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching language phrase', error });
    }
};

// Update a language phrase
exports.updateLanguagePhrase = async (req, res) => {
    try {
        const { languagePhraseId } = req.params;
        const updatedLanguagePhrase = await Language.findByIdAndUpdate(languagePhraseId, req.body, { new: true });
        res.json({ message: 'Language phrase updated successfully', languagePhrase: updatedLanguagePhrase });
    } catch (error) {
        res.status(500).json({ message: 'Error updating language phrase', error });
    }
};

// Delete a language phrase
exports.deleteLanguagePhrase = async (req, res) => {
    try {
        const { languagePhraseId } = req.params;
        await Language.findByIdAndDelete(languagePhraseId);
        res.json({ message: 'Language phrase deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting language phrase', error });
    }
};