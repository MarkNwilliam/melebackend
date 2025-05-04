const getManufacturerModel = require("../models/manufacturer_information");
const getProductPurchaseModel = require('../models/product_purchase');

// Add a new manufacturer
exports.addManufacturer = async (req, res) => {
  try {
    const { pharmacy_id } = req.params;
    const Manufacturer = getManufacturerModel(pharmacy_id); // Get pharmacy-specific model
    const manufacturer = new Manufacturer(req.body);
    await manufacturer.save();
    res.status(201).json({ message: "Manufacturer added successfully", manufacturer });
  } catch (error) {
    res.status(500).json({ message: "Error adding manufacturer", error });
  }
};

// Get all manufacturers
exports.getAllManufacturers = async (req, res) => {
  try {
    const { pharmacy_id } = req.params;
    const Manufacturer = getManufacturerModel(pharmacy_id); // Get pharmacy-specific model
    const manufacturers = await Manufacturer.find();
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching manufacturers", error });
  }
};

// Get a single manufacturer by ID
exports.getManufacturerById = async (req, res) => {
  try {
    const { pharmacy_id, manufacturerId } = req.params;
    const Manufacturer = getManufacturerModel(pharmacy_id); // Get pharmacy-specific model
    const manufacturer = await Manufacturer.findById(manufacturerId);
    if (!manufacturer) {
      return res.status(404).json({ message: "Manufacturer not found" });
    }
    res.json(manufacturer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching manufacturer", error });
  }
};

// Update a manufacturer
exports.updateManufacturer = async (req, res) => {
  try {
    const { pharmacy_id, manufacturerId } = req.params;
    const Manufacturer = getManufacturerModel(pharmacy_id); // Get pharmacy-specific model
    const updatedManufacturer = await Manufacturer.findByIdAndUpdate(manufacturerId, req.body, { new: true });
    res.json({ message: "Manufacturer updated successfully", manufacturer: updatedManufacturer });
  } catch (error) {
    res.status(500).json({ message: "Error updating manufacturer", error });
  }
};

// Delete a manufacturer
exports.deleteManufacturer = async (req, res) => {
  try {
    const { pharmacy_id, manufacturerId } = req.params;
    const Manufacturer = getManufacturerModel(pharmacy_id); // Get pharmacy-specific model
    await Manufacturer.findByIdAndDelete(manufacturerId);
    res.json({ message: "Manufacturer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting manufacturer", error });
  }
};

exports.getManufacturerSalesDetails = async (req, res) => {
    try {
        const { pharmacy_id, manufacturer_id } = req.params;
        const ProductPurchase = getProductPurchaseModel(pharmacy_id);
        const salesDetails = await ProductPurchase.find({ manufacturer_id });
        if (!salesDetails.length) {
            return res.status(404).json({ message: 'No sales details found for this manufacturer' });
        }
        res.json(salesDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sales details', error });
    }
};

exports.getAllManufacturerSalesDetails = async (req, res) => {
    try {
      console.log("Fetching all manufacturer sales for pharmacy:", req.params.pharmacy_id);
  
      const { pharmacy_id } = req.params;
      console.log("Pharmacy ID:", pharmacy_id);
  
      // Get the pharmacy-specific ProductPurchase model
      const ProductPurchase = getProductPurchaseModel(pharmacy_id);
      console.log("ProductPurchase model loaded for pharmacy:", pharmacy_id);
  
      // Perform aggregation to group sales by manufacturer_id
      const salesDetails = await ProductPurchase.aggregate([
        {
          $group: {
            _id: "$manufacturer_id",
            total_sales: { $sum: "$grand_total_amount" },
            total_discount: { $sum: "$total_discount" },
            purchases: { $push: "$$ROOT" }
          }
        }
      ]);
  
      console.log("Sales details aggregation result:", salesDetails);
  
      if (!salesDetails.length) {
        console.log("No sales details found for pharmacy:", pharmacy_id);
        return res.status(200).json([]); // Return empty array with 200 status
    }
  
      console.log("Sales details fetched successfully for pharmacy:", pharmacy_id);
      res.json(salesDetails);
    } catch (error) {
      console.error("Error fetching sales details:", error);
      res.status(500).json({ message: 'Error fetching sales details', error });
    }
  };