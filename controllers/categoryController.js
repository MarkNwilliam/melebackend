const getCategoryModel = require('../models/category');

// 1. Get all active categories for a specific pharmacy
exports.getAllCategories = async (req, res) => {
    try {
        const { pharmacy_id } = req.query; // Get pharmacy_id from query params

        // Get the pharmacy-specific model
        const Category = getCategoryModel(pharmacy_id);

        // Fetch only active categories for this pharmacy
        const categories = await Category.find({ status: 1 }).sort({ category_name: 1 });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};

// 2. Get a single category by ID for a specific pharmacy
exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const { pharmacy_id } = req.query;

        // Get the pharmacy-specific model
        const Category = getCategoryModel(pharmacy_id);

        // Find the category by ID
        const category = await Category.findById(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: "Category not found for this pharmacy" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching category", error: error.message });
    }
};

// 3. Create a new category for a specific pharmacy
exports.createCategory = async (req, res) => {
    try {
        const { category_name, status, pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const Category = getCategoryModel(pharmacy_id);

        // Check if the category already exists for this pharmacy
        const existingCategory = await Category.findOne({ category_name });
        if (existingCategory) {
            return res.status(400).json({ message: "Category name already exists for this pharmacy!" });
        }

        // Create a new category
        const newCategory = new Category({ category_name, status });
        await newCategory.save();
        res.status(201).json({ message: "Category created successfully!", category: newCategory });
    } catch (error) {
        res.status(500).json({ message: "Error creating category", error: error.message });
    }
};

// 4. Update a category by ID for a specific pharmacy
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category_name, status, pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const Category = getCategoryModel(pharmacy_id);

        // Update the category
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { category_name, status },
            { new: true } // Return the updated document
        );

        if (updatedCategory) {
            res.status(200).json({ message: "Category updated successfully!", category: updatedCategory });
        } else {
            res.status(404).json({ message: "Category not found for this pharmacy" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error: error.message });
    }
};

// 5. Delete a category by ID for a specific pharmacy
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const Category = getCategoryModel(pharmacy_id);

        // Delete the category
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (deletedCategory) {
            res.status(200).json({ message: "Category deleted successfully!" });
        } else {
            res.status(404).json({ message: "Category not found for this pharmacy" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error: error.message });
    }
};