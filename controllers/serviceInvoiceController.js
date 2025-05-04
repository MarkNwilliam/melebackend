// controllers/serviceInvoiceController.js
const ServiceInvoice = require('../models/service_invoice');
const ServiceInvoiceDetails = require('../models/service_invoice_details');

// Create a new service invoice
exports.createServiceInvoice = async (req, res) => {
    try {
        const { customer_id, total_amount, service_details } = req.body;

        // Create the service invoice
        const serviceInvoice = new ServiceInvoice({ customer_id, total_amount });
        await serviceInvoice.save();

        // Add service invoice details
        for (const detail of service_details) {
            const serviceInvoiceDetail = new ServiceInvoiceDetails({ ...detail, service_inv_id: serviceInvoice._id });
            await serviceInvoiceDetail.save();
        }

        res.status(201).json({ message: 'Service invoice created successfully', serviceInvoice });
    } catch (error) {
        res.status(500).json({ message: 'Error creating service invoice', error });
    }
};

// Get all service invoices
exports.getAllServiceInvoices = async (req, res) => {
    try {
        const serviceInvoices = await ServiceInvoice.find().populate('customer_id');
        res.json(serviceInvoices);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching service invoices', error });
    }
};

// Get a single service invoice by ID
exports.getServiceInvoiceById = async (req, res) => {
    try {
        const serviceInvoice = await ServiceInvoice.findById(req.params.serviceInvoiceId).populate('customer_id');
        if (!serviceInvoice) {
            return res.status(404).json({ message: 'Service invoice not found' });
        }
        res.json(serviceInvoice);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching service invoice', error });
    }
};

// Update a service invoice
exports.updateServiceInvoice = async (req, res) => {
    try {
        const { serviceInvoiceId } = req.params;
        const updatedServiceInvoice = await ServiceInvoice.findByIdAndUpdate(serviceInvoiceId, req.body, { new: true });
        res.json({ message: 'Service invoice updated successfully', serviceInvoice: updatedServiceInvoice });
    } catch (error) {
        res.status(500).json({ message: 'Error updating service invoice', error });
    }
};

// Delete a service invoice
exports.deleteServiceInvoice = async (req, res) => {
    try {
        const { serviceInvoiceId } = req.params;
        await ServiceInvoice.findByIdAndDelete(serviceInvoiceId);
        await ServiceInvoiceDetails.deleteMany({ service_inv_id: serviceInvoiceId });
        res.json({ message: 'Service invoice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting service invoice', error });
    }
};