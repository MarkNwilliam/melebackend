// controllers/invoiceController.js
const Invoice = require('../models/invoice');
const InvoiceDetails = require('../models/invoice_details');

// Create a new invoice
exports.createInvoice = async (req, res) => {
    try {
        const { customer_id, total_amount, invoice_details } = req.body;

        // Create the invoice
        const invoice = new Invoice({ customer_id, total_amount });
        await invoice.save();

        // Add invoice details
        for (const detail of invoice_details) {
            const invoiceDetail = new InvoiceDetails({ ...detail, invoice_id: invoice._id });
            await invoiceDetail.save();
        }

        res.status(201).json({ message: 'Invoice created successfully', invoice });
    } catch (error) {
        res.status(500).json({ message: 'Error creating invoice', error });
    }
};

// Get all invoices
exports.getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find().populate('customer_id');
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching invoices', error });
    }
};

// Get a single invoice by ID
exports.getInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.invoiceId).populate('customer_id');
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.json(invoice);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching invoice', error });
    }
};

// Update an invoice
exports.updateInvoice = async (req, res) => {
    try {
        const { invoiceId } = req.params;
        const updatedInvoice = await Invoice.findByIdAndUpdate(invoiceId, req.body, { new: true });
        res.json({ message: 'Invoice updated successfully', invoice: updatedInvoice });
    } catch (error) {
        res.status(500).json({ message: 'Error updating invoice', error });
    }
};

// Delete an invoice
exports.deleteInvoice = async (req, res) => {
    try {
        const { invoiceId } = req.params;
        await Invoice.findByIdAndDelete(invoiceId);
        await InvoiceDetails.deleteMany({ invoice_id: invoiceId });
        res.json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting invoice', error });
    }
};