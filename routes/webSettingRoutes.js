// routes/webSettingRoutes.js
const express = require('express');
const router = express.Router();
const { WebSetting, Currency, Bank } = require('../models/web_setting');

// 1. Retrieve Web Setting Data
router.get('/settings', async (req, res) => {
    try {
        const settings = await WebSetting.findOne({ setting_id: 1 });
        if (settings) {
            res.status(200).json(settings);
        } else {
            res.status(404).json({ message: 'Web settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching web settings', error: error.message });
    }
});

// 2. Update Web Setting Data
router.put('/settings', async (req, res) => {
    try {
        const updatedSettings = await WebSetting.findOneAndUpdate(
            { setting_id: 1 },
            req.body,
            { new: true } // Return the updated document
        );
        if (updatedSettings) {
            res.status(200).json({ message: 'Web settings updated successfully', settings: updatedSettings });
        } else {
            res.status(404).json({ message: 'Web settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating web settings', error: error.message });
    }
});

// 3. Get Currency List
router.get('/currencies', async (req, res) => {
    try {
        const currencies = await Currency.find();
        res.status(200).json(currencies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching currencies', error: error.message });
    }
});

// 4. Get Bank List
router.get('/banks', async (req, res) => {
    try {
        const banks = await Bank.find();
        res.status(200).json(banks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching banks', error: error.message });
    }
});

module.exports = router;