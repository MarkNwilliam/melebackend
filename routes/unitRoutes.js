const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController');

// 1. Get all units for a specific pharmacy
router.get('/', unitController.getAllUnits);

// 2. Get a single unit by ID for a specific pharmacy
router.get('/:id', unitController.getUnitById);

// 3. Create a new unit for a specific pharmacy
router.post('/', unitController.createUnit);

// 4. Update a unit by ID for a specific pharmacy
router.put('/:id', unitController.updateUnit);

// 5. Delete a unit by ID for a specific pharmacy
router.delete('/:id', unitController.deleteUnit);

module.exports = router;