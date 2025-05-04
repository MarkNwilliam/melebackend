// routes/purchaseRoutes.js
const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

// Purchase routes
router.post('/pharmacies/:pharmacy_id/purchases', purchaseController.createPurchase);
router.get('/pharmacies/:pharmacy_id/purchases', purchaseController.getAllPurchases);
router.get('/pharmacies/:pharmacy_id/purchases/:purchaseId', purchaseController.getPurchaseById);
router.put('/pharmacies/:pharmacy_id/purchases/:purchaseId', purchaseController.updatePurchase);
router.delete('/pharmacies/:pharmacy_id/purchases/:purchaseId', purchaseController.deletePurchase);

module.exports = router;