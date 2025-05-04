// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// 1. Get all categories
router.get('/', categoryController.getAllCategories);

// 2. Get a single category by ID
router.get('/:id', categoryController.getCategoryById);

// 3. Create a new category
router.post('/', categoryController.createCategory);

// 4. Update a category by ID
router.put('/:id', categoryController.updateCategory);

// 5. Delete a category by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;