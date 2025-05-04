// controllers/subModuleController.js
const SubModule = require('../models/sub_module');

// Add a new submodule
exports.addSubModule = async (req, res) => {
    try {
        const subModule = new SubModule(req.body);
        await subModule.save();
        res.status(201).json({ message: 'Submodule added successfully', subModule });
    } catch (error) {
        res.status(500).json({ message: 'Error adding submodule', error });
    }
};

// Get all submodules
exports.getAllSubModules = async (req, res) => {
    try {
        const subModules = await SubModule.find();
        res.json(subModules);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching submodules', error });
    }
};

// Get a single submodule by ID
exports.getSubModuleById = async (req, res) => {
    try {
        const subModule = await SubModule.findById(req.params.subModuleId);
        if (!subModule) {
            return res.status(404).json({ message: 'Submodule not found' });
        }
        res.json(subModule);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching submodule', error });
    }
};

// Update a submodule
exports.updateSubModule = async (req, res) => {
    try {
        const { subModuleId } = req.params;
        const updatedSubModule = await SubModule.findByIdAndUpdate(subModuleId, req.body, { new: true });
        res.json({ message: 'Submodule updated successfully', subModule: updatedSubModule });
    } catch (error) {
        res.status(500).json({ message: 'Error updating submodule', error });
    }
};

// Delete a submodule
exports.deleteSubModule = async (req, res) => {
    try {
        const { subModuleId } = req.params;
        await SubModule.findByIdAndDelete(subModuleId);
        res.json({ message: 'Submodule deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting submodule', error });
    }
};