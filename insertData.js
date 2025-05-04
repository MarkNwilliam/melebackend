const mongoose = require('mongoose');
const Module = require('./models/module');
const SubModule = require('./models/sub_module');
const db = require('./db'); // Your database connection module

// Missing module data (to be added)
const missingModuleData = [
    { id: 17, name: 'Ecommerce', description: '', image: '', directory: 'ecommerce', status: 1 },
    { id: 18, name: 'Prescriptions', description: '', image: '', directory: 'prescriptions', status: 1 },
    { id: 19, name: 'Clinical', description: '', image: '', directory: 'clinical', status: 1 },
    { id: 20, name: 'Billing', description: '', image: '', directory: 'billing', status: 1 },
    { id: 21, name: 'Analytics', description: '', image: '', directory: 'analytics', status: 1 },
    { id: 22, name: 'Staff', description: '', image: '', directory: 'staff', status: 1 },
    { id: 23, name: 'Sales', description: '', image: '', directory: 'sales', status: 1 },
];

// Missing submodule data (to be added)
const missingSubModuleData = [
    // Ecommerce submodules
    { id: 111, mid: 17, name: 'Landing Page', description: '', image: '', directory: 'landing', status: 1 },
    { id: 112, mid: 17, name: 'Orders', description: '', image: '', directory: 'orders', status: 1 },
    { id: 113, mid: 17, name: 'Settings', description: '', image: '', directory: 'settings', status: 1 },
    { id: 114, mid: 17, name: 'QR Designer', description: '', image: '', directory: 'qr-designer', status: 1 },
    { id: 115, mid: 17, name: 'Subscriptions', description: '', image: '', directory: 'subscriptions', status: 1 },

    // Prescriptions submodules
    { id: 116, mid: 18, name: 'New Prescription', description: '', image: '', directory: 'new-prescription', status: 1 },
    { id: 117, mid: 18, name: 'Prescription Refills', description: '', image: '', directory: 'prescription-refills', status: 1 },
    { id: 118, mid: 18, name: 'Active Prescriptions', description: '', image: '', directory: 'active-prescriptions', status: 1 },
    { id: 119, mid: 18, name: 'Prescription History', description: '', image: '', directory: 'prescription-history', status: 1 },

    // Clinical submodules
    { id: 120, mid: 19, name: 'Vaccination', description: '', image: '', directory: 'vaccination', status: 1 },
    { id: 121, mid: 19, name: 'Consultations', description: '', image: '', directory: 'consultations', status: 1 },
    { id: 122, mid: 19, name: 'Health Testing', description: '', image: '', directory: 'health-testing', status: 1 },

    // Billing submodules
    { id: 123, mid: 20, name: 'Insurance Claims', description: '', image: '', directory: 'insurance-claims', status: 1 },
    { id: 124, mid: 20, name: 'Transactions', description: '', image: '', directory: 'transactions', status: 1 },
    { id: 125, mid: 20, name: 'Financial Reports', description: '', image: '', directory: 'financial-reports', status: 1 },

    // Analytics submodules
    { id: 126, mid: 21, name: 'Sales Analytics', description: '', image: '', directory: 'sales-analytics', status: 1 },
    { id: 127, mid: 21, name: 'Inventory Analytics', description: '', image: '', directory: 'inventory-analytics', status: 1 },
    { id: 128, mid: 21, name: 'Patient Analytics', description: '', image: '', directory: 'patient-analytics', status: 1 },

    // Staff submodules
    { id: 129, mid: 22, name: 'Staff Management', description: '', image: '', directory: 'staff-management', status: 1 },
    { id: 130, mid: 22, name: 'Scheduling', description: '', image: '', directory: 'scheduling', status: 1 },
    { id: 131, mid: 22, name: 'Roles & Permissions', description: '', image: '', directory: 'roles-permissions', status: 1 },
    { id: 132, mid: 22, name: 'Payroll', description: '', image: '', directory: 'payroll', status: 1 },

    // Sales submodules
    { id: 133, mid: 23, name: 'POS', description: '', image: '', directory: 'pos', status: 1 },
    { id: 134, mid: 23, name: 'Receipts', description: '', image: '', directory: 'receipts', status: 1 },
    { id: 135, mid: 23, name: 'Receipt Designer', description: '', image: '', directory: 'receipt-designer', status: 1 },
];

// Connect to the database
db.connectToDatabase()
    .then(async () => {
        console.log('Database connected successfully');

        // Check for existing modules and insert missing ones
        for (const module of missingModuleData) {
            const existingModule = await Module.findOne({ id: module.id });
            if (!existingModule) {
                await Module.create(module);
                console.log(`Added module: ${module.name}`);
            } else {
                console.log(`Module already exists: ${module.name}`);
            }
        }

        // Check for existing submodules and insert missing ones
        for (const subModule of missingSubModuleData) {
            const existingSubModule = await SubModule.findOne({ id: subModule.id });
            if (!existingSubModule) {
                await SubModule.create(subModule);
                console.log(`Added submodule: ${subModule.name}`);
            } else {
                console.log(`Submodule already exists: ${subModule.name}`);
            }
        }

        // Close the connection
        await mongoose.connection.close();
        console.log('Database connection closed');
    })
    .catch((error) => {
        console.error('Error updating data:', error);
    });