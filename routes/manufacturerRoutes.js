// routes/manufacturerRoutes.js
const express = require("express");
const router = express.Router();
const manufacturerController = require("../controllers/manufacturerController");

// Manufacturer routes
router.post("/pharmacies/:pharmacy_id/manufacturers", manufacturerController.addManufacturer); // Add a new manufacturer
router.get("/pharmacies/:pharmacy_id/manufacturers", manufacturerController.getAllManufacturers); // Get all manufacturers
router.get("/pharmacies/:pharmacy_id/manufacturers/:manufacturerId", manufacturerController.getManufacturerById); // Get a single manufacturer by ID
router.put("/pharmacies/:pharmacy_id/manufacturers/:manufacturerId", manufacturerController.updateManufacturer); // Update a manufacturer
router.delete("/pharmacies/:pharmacy_id/manufacturers/:manufacturerId", manufacturerController.deleteManufacturer); // Delete a manufacturer
router.get("/pharmacies/:pharmacy_id/manufacturer-sales/:manufacturer_id", manufacturerController.getManufacturerSalesDetails);
router.get("/pharmacies/:pharmacy_id/manufacturer-sales", manufacturerController.getAllManufacturerSalesDetails);

module.exports = router;