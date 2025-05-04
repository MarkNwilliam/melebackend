// routes/languageRoutes.js
const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

// Language routes
router.post('/language-phrases', languageController.addLanguagePhrase); // Add a new language phrase
router.get('/language-phrases', languageController.getAllLanguagePhrases); // Get all language phrases
router.get('/language-phrases/:languagePhraseId', languageController.getLanguagePhraseById); // Get a single language phrase by ID
router.put('/language-phrases/:languagePhraseId', languageController.updateLanguagePhrase); // Update a language phrase
router.delete('/language-phrases/:languagePhraseId', languageController.deleteLanguagePhrase); // Delete a language phrase

module.exports = router;