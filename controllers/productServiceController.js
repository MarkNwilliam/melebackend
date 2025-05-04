const ProductService = require('../models/product_service');

// Create a new ProductService
exports.createProductService = async (req, res) => {
    try {
        const productService = new ProductService(req.body);
        await productService.save();
        res.status(201).json(productService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all ProductServices
exports.getAllProductServices = async (req, res) => {
    try {
        const productServices = await ProductService.find();
        res.status(200).json(productServices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single ProductService by ID
exports.getProductServiceById = async (req, res) => {
    try {
        const productService = await ProductService.findById(req.params.id);
        if (!productService) {
            return res.status(404).json({ message: 'ProductService not found' });
        }
        res.status(200).json(productService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a ProductService by ID
exports.updateProductService = async (req, res) => {
    try {
        const productService = await ProductService.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productService) {
            return res.status(404).json({ message: 'ProductService not found' });
        }
        res.status(200).json(productService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a ProductService by ID
exports.deleteProductService = async (req, res) => {
    try {
        const productService = await ProductService.findByIdAndDelete(req.params.id);
        if (!productService) {
            return res.status(404).json({ message: 'ProductService not found' });
        }
        res.status(200).json({ message: 'ProductService deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};