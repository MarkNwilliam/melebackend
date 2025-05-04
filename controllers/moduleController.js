// controllers/moduleController.js
const Module = require('../models/module');

// Add a new module
exports.addModule = async (req, res) => {
    try {
        const module = new Module(req.body);
        await module.save();
        res.status(201).json({ message: 'Module added successfully', module });
    } catch (error) {
        res.status(500).json({ message: 'Error adding module', error });
    }
};

// Get all modules
exports.getAllModules = async (req, res) => {
    try {
        const modules = await Module.find();
        res.json(modules);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching modules', error });
    }
};

// Get a single module by ID
exports.getModuleById = async (req, res) => {
    try {
        const module = await Module.findById(req.params.moduleId);
        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }
        res.json(module);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching module', error });
    }
};

// Update a module
exports.updateModule = async (req, res) => {
    try {
        const { moduleId } = req.params;
        const updatedModule = await Module.findByIdAndUpdate(moduleId, req.body, { new: true });
        res.json({ message: 'Module updated successfully', module: updatedModule });
    } catch (error) {
        res.status(500).json({ message: 'Error updating module', error });
    }
};

// Delete a module
exports.deleteModule = async (req, res) => {
    try {
        const { moduleId } = req.params;
        await Module.findByIdAndDelete(moduleId);
        res.json({ message: 'Module deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting module', error });
    }
};