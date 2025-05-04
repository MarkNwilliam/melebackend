
// ===== accessLogRoutes.js =====

// routes/accessLogRoutes.js
const express = require('express');
const router = express.Router();
const accessLogController = require('../controllers/accessLogController');

// Access Log routes
router.post('/access-logs', accessLogController.addAccessLog); // Add a new access log
router.get('/access-logs', accessLogController.getAllAccessLogs); // Get all access logs
router.get('/access-logs/:accessLogId', accessLogController.getAccessLogById); // Get a single access log by ID
router.put('/access-logs/:accessLogId', accessLogController.updateAccessLog); // Update an access log
router.delete('/access-logs/:accessLogId', accessLogController.deleteAccessLog); // Delete an access log

module.exports = router;
// ===== assetPurchaseRoutes.js =====

const express = require('express');
const router = express.Router();
const assetPurchaseController = require('../controllers/assetPurchaseController');

// Create a new AssetPurchase
router.post('/', assetPurchaseController.createAssetPurchase);

// Get all AssetPurchases
router.get('/', assetPurchaseController.getAllAssetPurchases);

// Get a single AssetPurchase by ID
router.get('/:id', assetPurchaseController.getAssetPurchaseById);

// Update an AssetPurchase by ID
router.put('/:id', assetPurchaseController.updateAssetPurchase);

// Delete an AssetPurchase by ID
router.delete('/:id', assetPurchaseController.deleteAssetPurchase);

module.exports = router;
// ===== attendanceRoutes.js =====

// routes/attendanceRoutes.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Attendance routes
router.post('/attendance', attendanceController.addAttendance); // Add a new attendance record
router.get('/attendance/:employeeId', attendanceController.getAttendanceByEmployee); // Get all attendance records for an employee
router.put('/attendance/:attendanceId', attendanceController.updateAttendance); // Update an attendance record
router.delete('/attendance/:attendanceId', attendanceController.deleteAttendance); // Delete an attendance record

module.exports = router;
// ===== bankRoutes.js =====

// routes/bankRoutes.js
const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

// Bank routes
router.post('/banks', bankController.addBank); // Add a new bank
router.get('/banks', bankController.getAllBanks); // Get all banks
router.get('/banks/:bankId', bankController.getBankById); // Get a single bank by ID
router.put('/banks/:bankId', bankController.updateBank); // Update a bank
router.delete('/banks/:bankId', bankController.deleteBank); // Delete a bank

module.exports = router;
// ===== categoryRoutes.js =====

// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// 1. Get all categories
router.get('/', categoryController.getAllCategories);

// 2. Get a single category by ID
router.get('/:id', categoryController.getCategoryById);

// 3. Create a new category
router.post('/', categoryController.createCategory);

// 4. Update a category by ID
router.put('/:id', categoryController.updateCategory);

// 5. Delete a category by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
// ===== ciSessionsRoutes.js =====

// routes/ciSessionsRoutes.js
const express = require('express');
const router = express.Router();
const ciSessionsController = require('../controllers/ciSessionsController');

// CI Sessions routes
router.post('/ci-sessions', ciSessionsController.addCiSession); // Add a new session
router.get('/ci-sessions', ciSessionsController.getAllCiSessions); // Get all sessions
router.get('/ci-sessions/:ciSessionId', ciSessionsController.getCiSessionById); // Get a single session by ID
router.put('/ci-sessions/:ciSessionId', ciSessionsController.updateCiSession); // Update a session
router.delete('/ci-sessions/:ciSessionId', ciSessionsController.deleteCiSession); // Delete a session

module.exports = router;
// ===== customerRoutes.js =====

// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Customer routes
router.post('/customers', customerController.addCustomer); // Add a new customer
router.get('/customers', customerController.getAllCustomers); // Get all customers
router.get('/customers/:customerId', customerController.getCustomerById); // Get a single customer by ID
router.put('/customers/:customerId', customerController.updateCustomer); // Update a customer
router.delete('/customers/:customerId', customerController.deleteCustomer); // Delete a customer

module.exports = router;
// ===== employeeRoutes.js =====

// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Employee routes
router.post('/employees', employeeController.addEmployee); // Add a new employee
router.get('/employees', employeeController.getAllEmployees); // Get all employees
router.get('/employees/:employeeId', employeeController.getEmployeeById); // Get a single employee by ID
router.put('/employees/:employeeId', employeeController.updateEmployee); // Update an employee
router.delete('/employees/:employeeId', employeeController.deleteEmployee); // Delete an employee

module.exports = router;
// ===== expenseItemRoutes.js =====

const express = require('express');
const router = express.Router();
const expenseItemController = require('../controllers/expenseItemController');

// Create a new ExpenseItem
router.post('/', expenseItemController.createExpenseItem);

// Get all ExpenseItems
router.get('/', expenseItemController.getAllExpenseItems);

// Get a single ExpenseItem by ID
router.get('/:id', expenseItemController.getExpenseItemById);

// Update an ExpenseItem by ID
router.put('/:id', expenseItemController.updateExpenseItem);

// Delete an ExpenseItem by ID
router.delete('/:id', expenseItemController.deleteExpenseItem);

module.exports = router;
// ===== expenseRoutes.js =====

// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Expense routes
router.post('/expenses', expenseController.addExpense); // Add a new expense
router.get('/expenses', expenseController.getAllExpenses); // Get all expenses
router.get('/expenses/:expenseId', expenseController.getExpenseById); // Get a single expense by ID
router.put('/expenses/:expenseId', expenseController.updateExpense); // Update an expense
router.delete('/expenses/:expenseId', expenseController.deleteExpense); // Delete an expense

module.exports = router;
// ===== fixedAssetsRoutes.js =====

const express = require('express');
const router = express.Router();
const fixedAssetsController = require('../controllers/fixedAssetsController');

// Create a new FixedAsset
router.post('/', fixedAssetsController.createFixedAsset);

// Get all FixedAssets
router.get('/', fixedAssetsController.getAllFixedAssets);

// Get a single FixedAsset by ID
router.get('/:id', fixedAssetsController.getFixedAssetById);

// Update a FixedAsset by ID
router.put('/:id', fixedAssetsController.updateFixedAsset);

// Delete a FixedAsset by ID
router.delete('/:id', fixedAssetsController.deleteFixedAsset);

module.exports = router;
// ===== index.js =====

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
// ===== invoiceRoutes.js =====

// routes/invoiceRoutes.js
const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

// Invoice routes
router.post('/invoices', invoiceController.createInvoice); // Create a new invoice
router.get('/invoices', invoiceController.getAllInvoices); // Get all invoices
router.get('/invoices/:invoiceId', invoiceController.getInvoiceById); // Get a single invoice by ID
router.put('/invoices/:invoiceId', invoiceController.updateInvoice); // Update an invoice
router.delete('/invoices/:invoiceId', invoiceController.deleteInvoice); // Delete an invoice

module.exports = router;
// ===== languageRoutes.js =====

// routes/languageRoutes.js
const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

// Language routes
router.post('/language-phrases', languageController.addLanguagePhrase); // Add a new language phrase
router.get('/language-phrases', languageController.getAllLanguagePhrases); // Get all language phrases
router.get('/language-phrases/:languagePhraseId', languageController.getLanguagePhraseById); // Get a single language phrase by ID
router.put('/language-phrases/:languagePhraseId', languageController.updateLanguagePhrase); // Update a language phrase
router.delete('/language-phrases/:languagePhraseId', languageController.deleteLanguagePhrase); // Delete a language phrase

module.exports = router;
// ===== manufacturerLedgerRoutes.js =====

// routes/manufacturerLedgerRoutes.js
const express = require('express');
const router = express.Router();
const manufacturerLedgerController = require('../controllers/manufacturerLedgerController');

// Manufacturer Ledger routes
router.post('/manufacturer-ledgers', manufacturerLedgerController.addLedgerEntry); // Add a new ledger entry
router.get('/manufacturer-ledgers/:manufacturerId', manufacturerLedgerController.getLedgerEntries); // Get all ledger entries for a manufacturer
router.get('/manufacturer-ledgers/entry/:ledgerEntryId', manufacturerLedgerController.getLedgerEntryById); // Get a single ledger entry by ID
router.put('/manufacturer-ledgers/:ledgerEntryId', manufacturerLedgerController.updateLedgerEntry); // Update a ledger entry
router.delete('/manufacturer-ledgers/:ledgerEntryId', manufacturerLedgerController.deleteLedgerEntry); // Delete a ledger entry

module.exports = router;
// ===== manufacturerRoutes.js =====

// routes/manufacturerRoutes.js
const express = require('express');
const router = express.Router();
const manufacturerController = require('../controllers/manufacturerController');

// Manufacturer routes
router.post('/manufacturers', manufacturerController.addManufacturer); // Add a new manufacturer
router.get('/manufacturers', manufacturerController.getAllManufacturers); // Get all manufacturers
router.get('/manufacturers/:manufacturerId', manufacturerController.getManufacturerById); // Get a single manufacturer by ID
router.put('/manufacturers/:manufacturerId', manufacturerController.updateManufacturer); // Update a manufacturer
router.delete('/manufacturers/:manufacturerId', manufacturerController.deleteManufacturer); // Delete a manufacturer

module.exports = router;
// ===== moduleRoutes.js =====

// routes/moduleRoutes.js
const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

// Module routes
router.post('/modules', moduleController.addModule); // Add a new module
router.get('/modules', moduleController.getAllModules); // Get all modules
router.get('/modules/:moduleId', moduleController.getModuleById); // Get a single module by ID
router.put('/modules/:moduleId', moduleController.updateModule); // Update a module
router.delete('/modules/:moduleId', moduleController.deleteModule); // Delete a module

module.exports = router;
// ===== payrollTaxSetupRoutes.js =====

// routes/payrollTaxSetupRoutes.js
const express = require('express');
const router = express.Router();
const payrollTaxSetupController = require('../controllers/payrollTaxSetupController');

// Payroll Tax Setup routes
router.post('/payroll-tax-setups', payrollTaxSetupController.addPayrollTaxSetup); // Add a new payroll tax setup
router.get('/payroll-tax-setups', payrollTaxSetupController.getAllPayrollTaxSetups); // Get all payroll tax setups
router.get('/payroll-tax-setups/:payrollTaxSetupId', payrollTaxSetupController.getPayrollTaxSetupById); // Get a single payroll tax setup by ID
router.put('/payroll-tax-setups/:payrollTaxSetupId', payrollTaxSetupController.updatePayrollTaxSetup); // Update a payroll tax setup
router.delete('/payroll-tax-setups/:payrollTaxSetupId', payrollTaxSetupController.deletePayrollTaxSetup); // Delete a payroll tax setup

module.exports = router;
// ===== personalLoanInformationRoutes.js =====

// routes/personalLoanInformationRoutes.js
const express = require('express');
const router = express.Router();
const personalLoanInformationController = require('../controllers/personalLoanInformationController');

// Personal Loan Information routes
router.post('/personal-loan-information', personalLoanInformationController.addPersonalLoanInformation); // Add a new personal loan information
router.get('/personal-loan-information', personalLoanInformationController.getAllPersonalLoanInformation); // Get all personal loan information
router.get('/personal-loan-information/:personalLoanInformationId', personalLoanInformationController.getPersonalLoanInformationById); // Get a single personal loan information by ID
router.put('/personal-loan-information/:personalLoanInformationId', personalLoanInformationController.updatePersonalLoanInformation); // Update personal loan information
router.delete('/personal-loan-information/:personalLoanInformationId', personalLoanInformationController.deletePersonalLoanInformation); // Delete personal loan information

module.exports = router;
// ===== personalLoanRoutes.js =====

// routes/personalLoanRoutes.js
const express = require('express');
const router = express.Router();
const personalLoanController = require('../controllers/personalLoanController');

// Personal Loan routes
router.post('/personal-loans', personalLoanController.addPersonalLoan); // Add a new personal loan
router.get('/personal-loans', personalLoanController.getAllPersonalLoans); // Get all personal loans
router.get('/personal-loans/:personalLoanId', personalLoanController.getPersonalLoanById); // Get a single personal loan by ID
router.put('/personal-loans/:personalLoanId', personalLoanController.updatePersonalLoan); // Update a personal loan
router.delete('/personal-loans/:personalLoanId', personalLoanController.deletePersonalLoan); // Delete a personal loan

module.exports = router;
// ===== productReturnRoutes.js =====

// routes/productReturnRoutes.js
const express = require('express');
const router = express.Router();
const productReturnController = require('../controllers/productReturnController');

// Product Return routes
router.post('/product-returns', productReturnController.addProductReturn); // Add a new product return
router.get('/product-returns', productReturnController.getAllProductReturns); // Get all product returns
router.get('/product-returns/:productReturnId', productReturnController.getProductReturnById); // Get a single product return by ID
router.put('/product-returns/:productReturnId', productReturnController.updateProductReturn); // Update a product return
router.delete('/product-returns/:productReturnId', productReturnController.deleteProductReturn); // Delete a product return

module.exports = router;
// ===== productRoutes.js =====

// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product routes
router.post('/products', productController.addProduct); // Add a new product
router.get('/products', productController.getAllProducts); // Get all products
router.put('/products/:productId', productController.updateProduct); // Update a product
router.delete('/products/:productId', productController.deleteProduct); // Delete a product

module.exports = router;
// ===== productServiceRoutes.js =====


// ===== protected.js =====

const express = require('express');
const validateToken = require('../authMiddleware');

const router = express.Router();

// Protected route
router.get('/', validateToken, (req, res) => {
  const user = req.user;
  res.json({ message: 'You are authenticated!', user });
});

module.exports = router;
// ===== purchaseRoutes.js =====

// routes/purchaseRoutes.js
const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

// Purchase routes
router.post('/purchases', purchaseController.createPurchase); // Create a new purchase
router.get('/purchases', purchaseController.getAllPurchases); // Get all purchases
router.get('/purchases/:purchaseId', purchaseController.getPurchaseById); // Get a single purchase by ID
router.put('/purchases/:purchaseId', purchaseController.updatePurchase); // Update a purchase
router.delete('/purchases/:purchaseId', purchaseController.deletePurchase); // Delete a purchase

module.exports = router;
// ===== rolePermissionRoutes.js =====

// routes/rolePermissionRoutes.js
const express = require('express');
const router = express.Router();
const rolePermissionController = require('../controllers/rolePermissionController');

// Role Permission routes
router.post('/role-permissions', rolePermissionController.addRolePermission); // Add a new role permission
router.get('/role-permissions', rolePermissionController.getAllRolePermissions); // Get all role permissions
router.get('/role-permissions/:rolePermissionId', rolePermissionController.getRolePermissionById); // Get a single role permission by ID
router.put('/role-permissions/:rolePermissionId', rolePermissionController.updateRolePermission); // Update a role permission
router.delete('/role-permissions/:rolePermissionId', rolePermissionController.deleteRolePermission); // Delete a role permission

module.exports = router;
// ===== salaryRoutes.js =====

// routes/salaryRoutes.js
const express = require('express');
const router = express.Router();
const salaryController = require('../controllers/salaryController');

// Salary routes
router.post('/salary', salaryController.addSalaryPayment); // Add a new salary payment
router.get('/salary/:employeeId', salaryController.getSalaryPaymentsByEmployee); // Get all salary payments for an employee
router.put('/salary/:salaryPaymentId', salaryController.updateSalaryPayment); // Update a salary payment
router.delete('/salary/:salaryPaymentId', salaryController.deleteSalaryPayment); // Delete a salary payment

module.exports = router;
// ===== secRoleRoutes.js =====

// routes/secRoleRoutes.js
const express = require('express');
const router = express.Router();
const secRoleController = require('../controllers/secRoleController');

// SecRole routes
router.post('/sec-roles', secRoleController.addSecRole); // Add a new role
router.get('/sec-roles', secRoleController.getAllSecRoles); // Get all roles
router.get('/sec-roles/:secRoleId', secRoleController.getSecRoleById); // Get a single role by ID
router.put('/sec-roles/:secRoleId', secRoleController.updateSecRole); // Update a role
router.delete('/sec-roles/:secRoleId', secRoleController.deleteSecRole); // Delete a role

module.exports = router;
// ===== secUserRoleRoutes.js =====

// routes/secUserRoleRoutes.js
const express = require('express');
const router = express.Router();
const secUserRoleController = require('../controllers/secUserRoleController');

// SecUserRole routes
router.post('/sec-user-roles', secUserRoleController.assignRoleToUser); // Assign a role to a user
router.get('/sec-user-roles', secUserRoleController.getAllUserRoleAssignments); // Get all user-role assignments
router.get('/sec-user-roles/:userRoleAssignmentId', secUserRoleController.getUserRoleAssignmentById); // Get a single user-role assignment by ID
router.put('/sec-user-roles/:userRoleAssignmentId', secUserRoleController.updateUserRoleAssignment); // Update a user-role assignment
router.delete('/sec-user-roles/:userRoleAssignmentId', secUserRoleController.deleteUserRoleAssignment); // Delete a user-role assignment

module.exports = router;
// ===== serviceInvoiceRoutes.js =====

// routes/serviceInvoiceRoutes.js
const express = require('express');
const router = express.Router();
const serviceInvoiceController = require('../controllers/serviceInvoiceController');

// Service Invoice routes
router.post('/service-invoices', serviceInvoiceController.createServiceInvoice); // Create a new service invoice
router.get('/service-invoices', serviceInvoiceController.getAllServiceInvoices); // Get all service invoices
router.get('/service-invoices/:serviceInvoiceId', serviceInvoiceController.getServiceInvoiceById); // Get a single service invoice by ID
router.put('/service-invoices/:serviceInvoiceId', serviceInvoiceController.updateServiceInvoice); // Update a service invoice
router.delete('/service-invoices/:serviceInvoiceId', serviceInvoiceController.deleteServiceInvoice); // Delete a service invoice

module.exports = router;
// ===== smsSettingsRoutes.js =====

// routes/smsSettingsRoutes.js
const express = require('express');
const router = express.Router();
const smsSettingsController = require('../controllers/smsSettingsController');

// SMS Settings routes
router.post('/sms-settings', smsSettingsController.addSmsSettings); // Add new SMS settings
router.get('/sms-settings', smsSettingsController.getAllSmsSettings); // Get all SMS settings
router.get('/sms-settings/:smsSettingsId', smsSettingsController.getSmsSettingsById); // Get a single SMS setting by ID
router.put('/sms-settings/:smsSettingsId', smsSettingsController.updateSmsSettings); // Update SMS settings
router.delete('/sms-settings/:smsSettingsId', smsSettingsController.deleteSmsSettings); // Delete SMS settings

module.exports = router;
// ===== stockFixedAssetRoutes.js =====

const express = require('express');
const router = express.Router();
const stockFixedAssetController = require('../controllers/stockFixedAssetController');

// Create a new StockFixedAsset
router.post('/', stockFixedAssetController.createStockFixedAsset);

// Get all StockFixedAssets
router.get('/', stockFixedAssetController.getAllStockFixedAssets);

// Get a single StockFixedAsset by ID
router.get('/:id', stockFixedAssetController.getStockFixedAssetById);

// Update a StockFixedAsset by ID
router.put('/:id', stockFixedAssetController.updateStockFixedAsset);

// Delete a StockFixedAsset by ID
router.delete('/:id', stockFixedAssetController.deleteStockFixedAsset);

module.exports = router;
// ===== subModuleRoutes.js =====

// routes/subModuleRoutes.js
const express = require('express');
const router = express.Router();
const subModuleController = require('../controllers/subModuleController');

// SubModule routes
router.post('/submodules', subModuleController.addSubModule); // Add a new submodule
router.get('/submodules', subModuleController.getAllSubModules); // Get all submodules
router.get('/submodules/:subModuleId', subModuleController.getSubModuleById); // Get a single submodule by ID
router.put('/submodules/:subModuleId', subModuleController.updateSubModule); // Update a submodule
router.delete('/submodules/:subModuleId', subModuleController.deleteSubModule); // Delete a submodule

module.exports = router;
// ===== supplierLedgerRoutes.js =====

// routes/supplierLedgerRoutes.js
const express = require('express');
const router = express.Router();
const supplierLedgerController = require('../controllers/supplierLedgerController');

// Supplier Ledger routes
router.post('/supplier-ledgers', supplierLedgerController.addLedgerEntry); // Add a new ledger entry
router.get('/supplier-ledgers/:supplierId', supplierLedgerController.getLedgerEntries); // Get all ledger entries for a supplier
router.get('/supplier-ledgers/entry/:ledgerEntryId', supplierLedgerController.getLedgerEntryById); // Get a single ledger entry by ID
router.put('/supplier-ledgers/:ledgerEntryId', supplierLedgerController.updateLedgerEntry); // Update a ledger entry
router.delete('/supplier-ledgers/:ledgerEntryId', supplierLedgerController.deleteLedgerEntry); // Delete a ledger entry

module.exports = router;
// ===== supplierRoutes.js =====

// routes/supplierRoutes.js
const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Supplier routes
router.post('/suppliers', supplierController.addSupplier); // Add a new supplier
router.get('/suppliers', supplierController.getAllSuppliers); // Get all suppliers
router.get('/suppliers/:supplierId', supplierController.getSupplierById); // Get a single supplier by ID
router.put('/suppliers/:supplierId', supplierController.updateSupplier); // Update a supplier
router.delete('/suppliers/:supplierId', supplierController.deleteSupplier); // Delete a supplier

module.exports = router;
// ===== synchronizerSettingRoutes.js =====

// routes/synchronizerSettingRoutes.js
const express = require('express');
const router = express.Router();
const synchronizerSettingController = require('../controllers/synchronizerSettingController');

// Synchronizer Setting routes
router.post('/synchronizer-settings', synchronizerSettingController.addSynchronizerSetting); // Add a new synchronizer setting
router.get('/synchronizer-settings', synchronizerSettingController.getAllSynchronizerSettings); // Get all synchronizer settings
router.get('/synchronizer-settings/:synchronizerSettingId', synchronizerSettingController.getSynchronizerSettingById); // Get a single synchronizer setting by ID
router.put('/synchronizer-settings/:synchronizerSettingId', synchronizerSettingController.updateSynchronizerSetting); // Update a synchronizer setting
router.delete('/synchronizer-settings/:synchronizerSettingId', synchronizerSettingController.deleteSynchronizerSetting); // Delete a synchronizer setting

module.exports = router;
// ===== taxCollectionRoutes.js =====

// routes/taxCollectionRoutes.js
const express = require('express');
const router = express.Router();
const taxCollectionController = require('../controllers/taxCollectionController');

// Tax Collection routes
router.post('/tax-collections', taxCollectionController.addTaxCollection); // Add a new tax collection
router.get('/tax-collections', taxCollectionController.getAllTaxCollections); // Get all tax collections
router.get('/tax-collections/:taxCollectionId', taxCollectionController.getTaxCollectionById); // Get a single tax collection by ID
router.put('/tax-collections/:taxCollectionId', taxCollectionController.updateTaxCollection); // Update a tax collection
router.delete('/tax-collections/:taxCollectionId', taxCollectionController.deleteTaxCollection); // Delete a tax collection

module.exports = router;
// ===== taxRoutes.js =====

// routes/taxRoutes.js
const express = require('express');
const router = express.Router();
const taxController = require('../controllers/taxController');

// Tax routes
router.post('/taxes', taxController.addTax); // Add a new tax
router.get('/taxes', taxController.getAllTaxes); // Get all taxes
router.get('/taxes/:taxId', taxController.getTaxById); // Get a single tax by ID
router.put('/taxes/:taxId', taxController.updateTax); // Update a tax
router.delete('/taxes/:taxId', taxController.deleteTax); // Delete a tax

module.exports = router;
// ===== userRoutes.js =====

// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/register', userController.register); // Register a new user
router.post('/login', userController.login); // Login a user
router.get('/users', userController.getAllUsers); // Get all users
router.put('/users/:userId', userController.updateUser); // Update a user
router.delete('/users/:userId', userController.deleteUser); // Delete a user

module.exports = router;
// ===== users.js =====

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// ===== webSettingRoutes.js =====

// routes/webSettingRoutes.js
const express = require('express');
const router = express.Router();
const { WebSetting, Currency, Bank } = require('../models/web_setting');

// 1. Retrieve Web Setting Data
router.get('/settings', async (req, res) => {
    try {
        const settings = await WebSetting.findOne({ setting_id: 1 });
        if (settings) {
            res.status(200).json(settings);
        } else {
            res.status(404).json({ message: 'Web settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching web settings', error: error.message });
    }
});

// 2. Update Web Setting Data
router.put('/settings', async (req, res) => {
    try {
        const updatedSettings = await WebSetting.findOneAndUpdate(
            { setting_id: 1 },
            req.body,
            { new: true } // Return the updated document
        );
        if (updatedSettings) {
            res.status(200).json({ message: 'Web settings updated successfully', settings: updatedSettings });
        } else {
            res.status(404).json({ message: 'Web settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating web settings', error: error.message });
    }
});

// 3. Get Currency List
router.get('/currencies', async (req, res) => {
    try {
        const currencies = await Currency.find();
        res.status(200).json(currencies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching currencies', error: error.message });
    }
});

// 4. Get Bank List
router.get('/banks', async (req, res) => {
    try {
        const banks = await Bank.find();
        res.status(200).json(banks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching banks', error: error.message });
    }
});

module.exports = router;