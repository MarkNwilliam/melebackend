const mongoose = require("mongoose");
const getManufacturerLedgerModel = require("../models/manufacturer_ledger");

// Add a new ledger entry
exports.addLedgerEntry = async (req, res) => {
  try {
    console.log("addLedgerEntry called with params:", req.params);
    const { pharmacy_id } = req.params;
    const ManufacturerLedger = getManufacturerLedgerModel(pharmacy_id);
    const ledgerEntry = new ManufacturerLedger(req.body);
    console.log("Saving ledger entry:", ledgerEntry);
    await ledgerEntry.save();
    res.status(201).json({ message: "Ledger entry added successfully", ledgerEntry });
  } catch (error) {
    console.error("Error adding ledger entry:", error);
    res.status(500).json({ message: "Error adding ledger entry", error });
  }
};

// Get all ledger entries for a manufacturer
exports.getLedgerEntries = async (req, res) => {
  try {
    console.log("getLedgerEntries called with params:", req.params);
    const { pharmacy_id, manufacturerId } = req.params;
    const ManufacturerLedger = getManufacturerLedgerModel(pharmacy_id);
    const ledgerEntries = await ManufacturerLedger.find({ manufacturer_id: manufacturerId });
    console.log("Fetched ledger entries:", ledgerEntries);
    res.json(ledgerEntries);
  } catch (error) {
    console.error("Error fetching ledger entries:", error);
    res.status(500).json({ message: "Error fetching ledger entries", error });
  }
};

// Get a single ledger entry by ID
exports.getLedgerEntryById = async (req, res) => {
  try {
    console.log("getLedgerEntryById called with params:", req.params);
    const { pharmacy_id, ledgerEntryId } = req.params;
    const ManufacturerLedger = getManufacturerLedgerModel(pharmacy_id);
    const ledgerEntry = await ManufacturerLedger.findById(ledgerEntryId);
    if (!ledgerEntry) {
      console.log("Ledger entry not found");
      return res.status(404).json({ message: "Ledger entry not found" });
    }
    console.log("Fetched ledger entry:", ledgerEntry);
    res.json(ledgerEntry);
  } catch (error) {
    console.error("Error fetching ledger entry:", error);
    res.status(500).json({ message: "Error fetching ledger entry", error });
  }
};

// Update a ledger entry
exports.updateLedgerEntry = async (req, res) => {
  try {
    console.log("updateLedgerEntry called with params:", req.params);
    const { pharmacy_id, ledgerEntryId } = req.params;
    const ManufacturerLedger = getManufacturerLedgerModel(pharmacy_id);
    const updatedLedgerEntry = await ManufacturerLedger.findByIdAndUpdate(ledgerEntryId, req.body, { new: true });
    console.log("Updated ledger entry:", updatedLedgerEntry);
    res.json({ message: "Ledger entry updated successfully", ledgerEntry: updatedLedgerEntry });
  } catch (error) {
    console.error("Error updating ledger entry:", error);
    res.status(500).json({ message: "Error updating ledger entry", error });
  }
};

// Delete a ledger entry
exports.deleteLedgerEntry = async (req, res) => {
  try {
    console.log("deleteLedgerEntry called with params:", req.params);
    const { pharmacy_id, ledgerEntryId } = req.params;
    const ManufacturerLedger = getManufacturerLedgerModel(pharmacy_id);
    await ManufacturerLedger.findByIdAndDelete(ledgerEntryId);
    console.log("Deleted ledger entry with ID:", ledgerEntryId);
    res.json({ message: "Ledger entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting ledger entry:", error);
    res.status(500).json({ message: "Error deleting ledger entry", error });
  }
};

// Get all ledger entries for a pharmacy
exports.getAllLedgerEntries = async (req, res) => {
  try {
    console.log("getAllLedgerEntries called with params:", req.params);
    const { pharmacy_id } = req.params;
    const ManufacturerLedger = getManufacturerLedgerModel(pharmacy_id);
    const ledgerEntries = await ManufacturerLedger.find();
    console.log("Fetched all ledger entries:", ledgerEntries);
    res.status(200).json({ success: true, data: ledgerEntries });
  } catch (error) {
    console.error("Error fetching all ledger entries:", error);
    res.status(500).json({ success: false, message: "Error fetching ledger entries", error });
  }
};