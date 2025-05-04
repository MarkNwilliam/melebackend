const getUnitModel = require('../models/unit');

// 1. Get all active units for a specific pharmacy
exports.getAllUnits = async (req, res) => {
    try {
        const { pharmacy_id } = req.query; // Get pharmacy_id from query params

        // Get the pharmacy-specific model
        const Unit = getUnitModel(pharmacy_id);

        // Fetch only active units for this pharmacy
        const units = await Unit.find({ status: true }).sort({ unit_name: 1 });
        res.status(200).json(units);
    } catch (error) {
        res.status(500).json({ message: "Error fetching units", error: error.message });
    }
};

// 2. Get a single unit by ID for a specific pharmacy
exports.getUnitById = async (req, res) => {
    try {
        const { id } = req.params;
        const { pharmacy_id } = req.query;

        // Get the pharmacy-specific model
        const Unit = getUnitModel(pharmacy_id);

        // Find the unit by ID
        const unit = await Unit.findById(id);
        if (unit) {
            res.status(200).json(unit);
        } else {
            res.status(404).json({ message: "Unit not found for this pharmacy" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching unit", error: error.message });
    }
};

// 3. Create a new unit for a specific pharmacy
exports.createUnit = async (req, res) => {
    try {
        const { unit_name, status, pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const Unit = getUnitModel(pharmacy_id);

        // Check if the unit already exists for this pharmacy
        const existingUnit = await Unit.findOne({ unit_name });
        if (existingUnit) {
            return res.status(400).json({ message: "Unit name already exists for this pharmacy!" });
        }

        // Create a new unit
        const newUnit = new Unit({
            unit_name,
            status: status || true, // Default status is true (active)
        });

        await newUnit.save();
        res.status(201).json({ message: "Unit created successfully!", unit: newUnit });
    } catch (error) {
        res.status(500).json({ message: "Error creating unit", error: error.message });
    }
};

// 4. Update a unit by ID for a specific pharmacy
exports.updateUnit = async (req, res) => {
    try {
        const { id } = req.params;
        const { unit_name, status, pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const Unit = getUnitModel(pharmacy_id);

        // Update the unit
        const updatedUnit = await Unit.findByIdAndUpdate(
            id,
            { unit_name, status },
            { new: true } // Return the updated document
        );

        if (updatedUnit) {
            res.status(200).json({ message: "Unit updated successfully!", unit: updatedUnit });
        } else {
            res.status(404).json({ message: "Unit not found for this pharmacy" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating unit", error: error.message });
    }
};

// 5. Delete a unit by ID for a specific pharmacy
exports.deleteUnit = async (req, res) => {
    try {
        const { id } = req.params;
        const { pharmacy_id } = req.body;

        // Get the pharmacy-specific model
        const Unit = getUnitModel(pharmacy_id);

        // Delete the unit
        const deletedUnit = await Unit.findByIdAndDelete(id);
        if (deletedUnit) {
            res.status(200).json({ message: "Unit deleted successfully!" });
        } else {
            res.status(404).json({ message: "Unit not found for this pharmacy" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting unit", error: error.message });
    }
};