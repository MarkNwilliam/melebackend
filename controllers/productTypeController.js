const getProductTypeModel = require('../models/product_type');

// Add a new medicine type for a specific pharmacy
exports.addMedicineType = async (req, res) => {
    try {
        const { type_name, status, pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const ProductType = getProductTypeModel(pharmacy_id);

        // Check if the type already exists for this pharmacy
        const existingType = await ProductType.findOne({ type_name });
        if (existingType) {
            return res.status(400).json({ message: 'Medicine type already exists for this pharmacy' });
        }

        // Create a new medicine type
        const newType = new ProductType({
            type_name,
            status: status || 1, // Default status is 1 (active)
        });

        await newType.save();
        res.status(201).json({ message: 'Medicine type added successfully', data: newType });
    } catch (error) {
        res.status(500).json({ message: 'Error adding medicine type', error: error.message });
    }
};

// Get all medicine types for a specific pharmacy
exports.getAllMedicineTypes = async (req, res) => {
    try {
        const { pharmacy_id } = req.query; // Get pharmacy_id from query params

        // Get the pharmacy-specific model
        const ProductType = getProductTypeModel(pharmacy_id);

        // Fetch only active types for this pharmacy
        const types = await ProductType.find({ status: 1 });
        res.status(200).json({ data: types });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medicine types', error: error.message });
    }
};

// Get a single medicine type by ID for a specific pharmacy
exports.getMedicineTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const { pharmacy_id } = req.query;

        // Get the pharmacy-specific model
        const ProductType = getProductTypeModel(pharmacy_id);

        // Find the medicine type by ID
        const type = await ProductType.findById(id);
        if (!type) {
            return res.status(404).json({ message: 'Medicine type not found for this pharmacy' });
        }

        res.status(200).json({ data: type });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medicine type', error: error.message });
    }
};

// Update a medicine type for a specific pharmacy
exports.updateMedicineType = async (req, res) => {
    try {
        const { id } = req.params;
        const { type_name, status, pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const ProductType = getProductTypeModel(pharmacy_id);

        // Update the medicine type
        const updatedType = await ProductType.findByIdAndUpdate(
            id,
            { type_name, status },
            { new: true } // Return the updated document
        );

        if (!updatedType) {
            return res.status(404).json({ message: 'Medicine type not found for this pharmacy' });
        }

        res.status(200).json({ message: 'Medicine type updated successfully', data: updatedType });
    } catch (error) {
        res.status(500).json({ message: 'Error updating medicine type', error: error.message });
    }
};

// Delete a medicine type for a specific pharmacy
exports.deleteMedicineType = async (req, res) => {
    try {
        const { id } = req.params;
        const { pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const ProductType = getProductTypeModel(pharmacy_id);

        // Delete the medicine type
        const deletedType = await ProductType.findByIdAndDelete(id);
        if (!deletedType) {
            return res.status(404).json({ message: 'Medicine type not found for this pharmacy' });
        }

        res.status(200).json({ message: 'Medicine type deleted successfully', data: deletedType });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting medicine type', error: error.message });
    }
};