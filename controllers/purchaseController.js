const ProductPurchase = require('../models/product_purchase');
const getProductPurchaseDetailsModel = require('../models/product_purchase_details'); // Updated import
const getManufacturerModel = require('../models/manufacturer_information');
const getManufacturerLedgerModel = require('../models/manufacturer_ledger');
const getPharmacyProductModel = require('../utils/getPharmacyProductModel'); // Import the product model utility

const { v4: uuidv4 } = require('uuid');

exports.createPurchase = async (req, res) => {
    try {
        const { pharmacy_id } = req.params;
        const {
            chalan_no, // Provided by frontend or auto-generated
            manufacturer_id,
            manufacturer_name,
            address,
            mobile,
            details,
            purchase_date,
            grand_total_amount,
            total_discount,
            purchase_details, // Array of purchase details
            status,
            payment_type,
            bank_id,
            cheque_no,
            bank_transaction_no,
            remarks,
        } = req.body;

        console.log('Incoming Request Body:', req.body);

        // Validate required fields
        const requiredFields = ['purchase_date', 'purchase_details'];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ message: `${field} is required` });
            }
        }

        // Auto-generate chalan_no if not provided
        const finalChalanNo = chalan_no || generateChalanNo();

        // Get pharmacy-specific models
        const Manufacturer = getManufacturerModel(pharmacy_id);
        const ManufacturerLedger = getManufacturerLedgerModel(pharmacy_id);
        const ProductPurchaseModel = ProductPurchase(pharmacy_id);
        const PharmacyProductModel = getPharmacyProductModel(pharmacy_id);
        const ProductPurchaseDetails = getProductPurchaseDetailsModel(pharmacy_id); // Get the correct model for purchase details

        // Handle manufacturer
        let manufacturer = null;
        if (manufacturer_id) {
            // Use the provided manufacturer_id
            manufacturer = await Manufacturer.findOne({ manufacturer_id });
        } else if (manufacturer_name) {
            // Create a new manufacturer
            manufacturer = new Manufacturer({
                manufacturer_id: uuidv4(), // Auto-generate manufacturer_id
                manufacturer_name,
                address: address || 'N/A',
                mobile: mobile || 'N/A',
                details: details || 'N/A',
                status: 1,
            });
            await manufacturer.save();
        }

        console.log('Validating Product Quantities...');
        // Validate product quantities and update stock
        for (const detail of purchase_details) {
            console.log('Processing Product Detail:', detail);
            const product = await PharmacyProductModel.findById(detail.product_id);
            if (!product) {
                console.log(`Product with ID ${detail.product_id} not found`);
                return res.status(404).json({ message: `Product with ID ${detail.product_id} not found` });
            }
            if (product.number_of_units < detail.quantity) {
                console.log(`Insufficient stock for product ${product.product_name}`);
                return res.status(400).json({ message: `Insufficient stock for product ${product.product_name}` });
            }

            console.log('Reducing Product Quantity...');
            // Reduce the product quantity
            product.number_of_units -= detail.quantity;
            await product.save();
        }

        console.log('Creating Purchase...');

        console.log('Data being saved:', {
            chalan_no: finalChalanNo,
            manufacturer_id: manufacturer ? manufacturer.manufacturer_id : null,
            purchase_date,
            purchase_id: uuidv4(),
            grand_total_amount,
            total_discount,
            status,
            payment_type,
            bank_id,
            cheque_no,
            bank_transaction_no,
            remarks,
            purchase_details: JSON.stringify(purchase_details),
        });

        // Create the purchase
        const purchase = new ProductPurchaseModel({
            chalan_no: finalChalanNo,
            manufacturer_id: manufacturer ? manufacturer.manufacturer_id : null,
            purchase_date,
            purchase_id: uuidv4(),
            grand_total_amount,
            total_discount,
            status,
            payment_type,
            bank_id,
            cheque_no,
            bank_transaction_no,
            remarks,
            purchase_details: JSON.stringify(purchase_details), // Convert array to string
        });
        await purchase.save();

        console.log('Adding Purchase Details...');
        // Add purchase details
        for (const detail of purchase_details) {
            const purchaseDetail = new ProductPurchaseDetails({
                purchase_detail_id: uuidv4(), // Auto-generate purchase_detail_id
                purchase_id: purchase._id, // Link to the main purchase
                product_id: detail.product_id,
                quantity: detail.quantity,
                rate: detail.rate,
                total_amount: detail.total_price,
                discount: detail.discount,
                batch_id: detail.batch_id || uuidv4(), // Auto-generate batch_id if not provided
                expeire_date: detail.expeire_date || new Date().toISOString().split('T')[0], // Default to current date if not provided
                status: detail.status || 1, // Default status
            });
            await purchaseDetail.save();
        }

        console.log('Updating Manufacturer Ledger...');
        // Update manufacturer ledger (if manufacturer exists)
        if (manufacturer) {
            const ledgerEntry = new ManufacturerLedger({
                transaction_id: purchase._id,
                manufacturer_id: manufacturer.manufacturer_id,
                chalan_no: purchase.chalan_no,
                amount: purchase.grand_total_amount,
                description: `Purchase of products with chalan no ${purchase.chalan_no}`,
                payment_type: purchase.payment_type,
                date: purchase.purchase_date,
                status: 1,
                d_c: 'd',
                bank_id: purchase.bank_id,
                cheque_no: purchase.cheque_no,
                bank_transaction_no: purchase.bank_transaction_no,
                remarks: purchase.remarks,
            });
            await ledgerEntry.save();
        }

        console.log('Purchase Created Successfully');
        res.status(201).json({ message: 'Purchase created successfully', purchase });
    } catch (error) {
        console.error('Error in createPurchase:', error);
        res.status(500).json({ message: 'Error creating purchase', error });
    }
};

// Function to auto-generate chalan_no
const generateChalanNo = () => {
    const date = new Date().toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); // 001 to 999
    return `CH-${date}-${randomNum}`;
};

// Get all purchases
exports.getAllPurchases = async (req, res) => {
    try {
        const { pharmacy_id } = req.params;
        const ProductPurchaseModel = ProductPurchase(pharmacy_id);
        const purchases = await ProductPurchaseModel.find().populate('manufacturer_id');

        // Return an empty array if no purchases are found
        if (!purchases || purchases.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchases', error });
    }
};

// Get a single purchase by ID
exports.getPurchaseById = async (req, res) => {
    try {
        const { pharmacy_id, purchaseId } = req.params;
        const ProductPurchaseModel = ProductPurchase(pharmacy_id);
        const purchase = await ProductPurchaseModel.findById(purchaseId).populate('manufacturer_id');

        // Return an empty object if no purchase is found
        if (!purchase) {
            return res.status(200).json({});
        }

        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchase', error });
    }
};
// Update a purchase
exports.updatePurchase = async (req, res) => {
    try {
        const { pharmacy_id, purchaseId } = req.params;
        const ProductPurchaseModel = ProductPurchase(pharmacy_id);
        const updatedPurchase = await ProductPurchaseModel.findByIdAndUpdate(purchaseId, req.body, { new: true });
        res.json({ message: 'Purchase updated successfully', purchase: updatedPurchase });
    } catch (error) {
        res.status(500).json({ message: 'Error updating purchase', error });
    }
};

// Delete a purchase
exports.deletePurchase = async (req, res) => {
    try {
        const { pharmacy_id, purchaseId } = req.params;
        const ProductPurchaseModel = ProductPurchase(pharmacy_id);
        const ProductPurchaseDetails = getProductPurchaseDetailsModel(pharmacy_id); // Get the correct model for purchase details
        await ProductPurchaseModel.findByIdAndDelete(purchaseId);
        await ProductPurchaseDetails.deleteMany({ purchase_id: purchaseId });
        res.json({ message: 'Purchase deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting purchase', error });
    }
};