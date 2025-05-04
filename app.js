const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./db'); // Database module

// Import all routers
const indexRouter = require('./routes/index');
const protectedRouter = require('./routes/protected');
const categoriesRouter = require('./routes/categoryRoutes');
const userRouter = require('./routes/userRoutes');
const webSettingRoutes = require('./routes/webSettingRoutes');
const accessLogRoutes = require('./routes/accessLogRoutes');
const assetPurchaseRoutes = require('./routes/assetPurchaseRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const bankRoutes = require('./routes/bankRoutes');
const ciSessionsRoutes = require('./routes/ciSessionsRoutes');
const customerRoutes = require('./routes/customerRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const expenseItemRoutes = require('./routes/expenseItemRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const fixedAssetsRoutes = require('./routes/fixedAssetsRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const languageRoutes = require('./routes/languageRoutes');
const manufacturerLedgerRoutes = require('./routes/manufacturerLedgerRoutes');
const manufacturerRoutes = require('./routes/manufacturerRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const payrollTaxSetupRoutes = require('./routes/payrollTaxSetupRoutes');
const personalLoanInformationRoutes = require('./routes/personalLoanInformationRoutes');
const personalLoanRoutes = require('./routes/personalLoanRoutes');
const productReturnRoutes = require('./routes/productReturnRoutes');
const productRoutes = require('./routes/productRoutes');
const productServiceRoutes = require('./routes/productServiceRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const rolePermissionRoutes = require('./routes/rolePermissionRoutes');
const salaryRoutes = require('./routes/salaryRoutes');
const secRoleRoutes = require('./routes/secRoleRoutes');
const secUserRoleRoutes = require('./routes/secUserRoleRoutes');
const serviceInvoiceRoutes = require('./routes/serviceInvoiceRoutes');
const smsSettingsRoutes = require('./routes/smsSettingsRoutes');
const stockFixedAssetRoutes = require('./routes/stockFixedAssetRoutes');
const subModuleRoutes = require('./routes/subModuleRoutes');
const supplierLedgerRoutes = require('./routes/supplierLedgerRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const synchronizerSettingRoutes = require('./routes/synchronizerSettingRoutes');
const taxCollectionRoutes = require('./routes/taxCollectionRoutes');
const taxRoutes = require('./routes/taxRoutes');
const usersRouter = require('./routes/users');
const productTypeRoutes = require('./routes/productTypeRoutes'); 
const unitRoutes = require('./routes/unitRoutes');
const reportRoutes = require('./routes/reportRoutes');


const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware
app.use(logger('dev')); // Log requests to the console
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Enable CORS for http://localhost:3001
app.use(cors({
  origin: 'http://localhost:3001', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));

// Initialize database connection
db.connectToDatabase()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
    process.exit(1); // Exit if database connection fails
  });

// Routes
app.use('/', indexRouter); // Default route
app.use('/api/protected', protectedRouter); // Protected route
app.use('/api/categories', categoriesRouter); // Categories route
app.use('/api/users', userRouter); // User routes
app.use('/api/web-settings', webSettingRoutes);
app.use('/api/access-logs', accessLogRoutes);
app.use('/api/asset-purchases', assetPurchaseRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/banks', bankRoutes);
app.use('/api/ci-sessions', ciSessionsRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/expense-items', expenseItemRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/fixed-assets', fixedAssetsRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/language-phrases', languageRoutes);
app.use('/api/manufacturer-ledgers', manufacturerLedgerRoutes);
app.use('/api/manufacturers', manufacturerRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/payroll-tax-setups', payrollTaxSetupRoutes);
app.use('/api/personal-loan-information', personalLoanInformationRoutes);
app.use('/api/personal-loans', personalLoanRoutes);
app.use('/api/product-returns', productReturnRoutes);
app.use('/api/products', productRoutes);
app.use('/api/product-services', productServiceRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/role-permissions', rolePermissionRoutes);
app.use('/api/salary', salaryRoutes);
app.use('/api/sec-roles', secRoleRoutes);
app.use('/api/sec-user-roles', secUserRoleRoutes);
app.use('/api/service-invoices', serviceInvoiceRoutes);
app.use('/api/sms-settings', smsSettingsRoutes);
app.use('/api/stock-fixed-assets', stockFixedAssetRoutes);
app.use('/api/submodules', subModuleRoutes);
app.use('/api/supplier-ledgers', supplierLedgerRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/synchronizer-settings', synchronizerSettingRoutes);
app.use('/api/tax-collections', taxCollectionRoutes);
app.use('/api/taxes', taxRoutes);
app.use('/api/users', usersRouter);
app.use('/api/medicine-type', productTypeRoutes);
app.use('/api/pharmacies/:pharmacy_id/units', unitRoutes);
app.use("/api/reports", reportRoutes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'Endpoint not found'));
});

// Error handler
app.use((err, req, res, next) => {
  // Log the error
  console.error('Error:', err.message);

  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send JSON response for API errors
  if (req.originalUrl.startsWith('/api')) {
    res.status(err.status || 500).json({
      message: err.message,
      error: res.locals.error,
    });
  } else {
    // Render the error page for non-API routes
    res.status(err.status || 500);
    res.render('error');
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  try {
    await db.closeConnection();
    console.log('Database connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Error during shutdown:', err);
    process.exit(1);
  }
});

module.exports = app;