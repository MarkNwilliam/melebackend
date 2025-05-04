const express = require('express');
const router = express.Router();
const medicineTypeController = require('../controllers/productTypeController');

// Add a new medicine type
router.post('/medicine-types', medicineTypeController.addMedicineType);

// Get all medicine types
router.get('/medicine-types', medicineTypeController.getAllMedicineTypes);

// Get a single medicine type by ID
router.get('/medicine-types/:id', medicineTypeController.getMedicineTypeById);

// Update a medicine type
router.put('/medicine-types/:id', medicineTypeController.updateMedicineType);

// Delete a medicine type
router.delete('/medicine-types/:id', medicineTypeController.deleteMedicineType);

module.exports = router;