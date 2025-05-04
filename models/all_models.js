
// ===== User.js =====

// models/User.js
const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    date_of_birth: {
        type: Date,
    },
    status: {
        type: Number,
        default: 1, // 1 = active, 0 = inactive
    },
    logo: {
        type: String, // URL or path to the profile picture
    },
}, { timestamps: true });

// Define the UserLogin Schema
const userLoginSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    user_type: {
        type: Number,
        default: 2, // 2 = regular user, 1 = admin
    },
    security_code: {
        type: String,
    },
    status: {
        type: Number,
        default: 0, // 0 = inactive, 1 = active
    },
}, { timestamps: true });

// Create the Models
const User = mongoose.model('User', userSchema);
const UserLogin = mongoose.model('UserLogin', userLoginSchema);

// Export the models
module.exports = { User, UserLogin };
// ===== acc_coa.js =====

const mongoose = require('mongoose');

const accCoaSchema = new mongoose.Schema({
    HeadCode: { type: String, required: true },
    HeadName: { type: String, required: true },
    PHeadName: { type: String, required: true },
    HeadLevel: { type: Number, required: true },
    IsActive: { type: Boolean, required: true },
    IsTransaction: { type: Boolean, required: true },
    IsGL: { type: Boolean, required: true },
    HeadType: { type: String, required: true },
    IsBudget: { type: Boolean, required: true },
    IsDepreciation: { type: Boolean, required: true },
    DepreciationRate: { type: Number, required: true },
    CreateBy: { type: String, required: true },
    CreateDate: { type: Date, required: true },
    UpdateBy: { type: String, required: true },
    UpdateDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('AccCoa', accCoaSchema);
// ===== acc_transaction.js =====

const mongoose = require('mongoose');

const accTransactionSchema = new mongoose.Schema({
    VNo: { type: String, default: null },
    Vtype: { type: String, default: null },
    VDate: { type: Date, default: null },
    COAID: { type: String, required: true },
    Narration: { type: String, default: null },
    Debit: { type: Number, default: null },
    Credit: { type: Number, default: null },
    IsPosted: { type: String, default: null },
    CreateBy: { type: String, default: null },
    CreateDate: { type: Date, default: null },
    UpdateBy: { type: String, default: null },
    UpdateDate: { type: Date, default: null },
    IsAppove: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('AccTransaction', accTransactionSchema);
// ===== accesslog.js =====


// ===== asset_purchase.js =====

const mongoose = require('mongoose');

const assetPurchaseSchema = new mongoose.Schema({
    p_date: { type: Date, required: true },
    supplier_id: { type: String, required: true },
    grand_total: { type: Number, required: true },
    payment_type: { type: Number, default: null },
    bank_id: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('AssetPurchase', assetPurchaseSchema);
// ===== attendance.js =====

const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employee_id: { type: Number, required: true },
    date: { type: Date, required: true },
    sign_in: { type: String, required: true },
    sign_out: { type: String, required: true },
    staytime: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
// ===== bank_add.js =====

const mongoose = require('mongoose');

const bankAddSchema = new mongoose.Schema({
    bank_id: { type: String, required: true },
    bank_name: { type: String, required: true },
    ac_name: { type: String, default: null },
    ac_number: { type: String, default: null },
    branch: { type: String, default: null },
    signature_pic: { type: String, default: null },
    status: { type: Number, default: null },
}, { timestamps: true });

module.exports = mongoose.model('BankAdd', bankAddSchema);
// ===== bank_summary.js =====

const mongoose = require('mongoose');

const bankSummarySchema = new mongoose.Schema({
    bank_id: { type: String, default: null },
    description: { type: String, default: null },
    deposite_id: { type: String, default: null },
    date: { type: String, default: null },
    ac_type: { type: String, default: null },
    dr: { type: Number, default: 0.0 },
    cr: { type: Number, default: 0.0 },
    ammount: { type: Number, default: 0.0 },
    status: { type: Number, default: 1 },
}, { timestamps: true });

module.exports = mongoose.model('BankSummary', bankSummarySchema);
// ===== category.js =====

const mongoose = require('mongoose');

// Define the Category Schema
const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        unique: true, // Ensure category names are unique
    },
    status: {
        type: Number,
        default: 1, // Default status is 1 (active)
    },
}, { timestamps: true }); // Add createdAt and updatedAt fields

// Create the Category Model
const Category = mongoose.model('Category', categorySchema);

// Export the model
module.exports = Category;
// ===== ci_sessions.js =====

const mongoose = require('mongoose');

const ciSessionsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    ip_address: { type: String, required: true },
    timestamp: { type: Number, default: 0 },
    data: { type: Buffer, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CiSessions', ciSessionsSchema);
// ===== company_information.js =====

const mongoose = require('mongoose');

const companyInformationSchema = new mongoose.Schema({
    company_id: { type: String, required: true },
    company_name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    website: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CompanyInformation', companyInformationSchema);
// ===== currency_tbl.js =====

const mongoose = require('mongoose');

const currencyTblSchema = new mongoose.Schema({
    currency_name: { type: String, required: true },
    icon: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CurrencyTbl', currencyTblSchema);
// ===== customer_information.js =====

const mongoose = require('mongoose');

const customerInformationSchema = new mongoose.Schema({
    customer_name: { type: String, default: null },
    customer_address: { type: String, required: true },
    customer_mobile: { type: String, required: true },
    customer_email: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CustomerInformation', customerInformationSchema);
// ===== customer_ledger.js =====

const mongoose = require('mongoose');

const customerLedgerSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    customer_id: { type: Number, required: true },
    invoice_no: { type: Number, default: null },
    receipt_no: { type: String, default: null },
    amount: { type: Number, default: 0.0 },
    description: { type: String, required: true },
    payment_type: { type: String, required: true },
    cheque_no: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: Number, required: true },
    d_c: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('CustomerLedger', customerLedgerSchema);
// ===== daily_closing.js =====

const mongoose = require('mongoose');

const dailyClosingSchema = new mongoose.Schema({
    closing_id: { type: String, required: true },
    last_day_closing: { type: Number, required: true },
    cash_in: { type: Number, required: true },
    cash_out: { type: Number, required: true },
    date: { type: String, required: true },
    amount: { type: Number, required: true },
    adjustment: { type: Number, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('DailyClosing', dailyClosingSchema);
// ===== designation.js =====

const mongoose = require('mongoose');

const designationSchema = new mongoose.Schema({
    designation: { type: String, required: true },
    details: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Designation', designationSchema);
// ===== employee_history.js =====

const mongoose = require('mongoose');

const employeeHistorySchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    designation: { type: String, required: true },
    phone: { type: String, required: true },
    rate_type: { type: Number, required: true },
    hrate: { type: Number, required: true },
    email: { type: String, required: true },
    blood_group: { type: String, required: true },
    address_line_1: { type: String, required: true },
    address_line_2: { type: String, required: true },
    image: { type: String, default: null },
    country: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('EmployeeHistory', employeeHistorySchema);
// ===== employee_salary_payment.js =====

const mongoose = require('mongoose');

const employeeSalaryPaymentSchema = new mongoose.Schema({
    generate_id: { type: Number, required: true },
    employee_id: { type: String, required: true },
    total_salary: { type: Number, default: 0.0 },
    total_working_minutes: { type: String, required: true },
    working_period: { type: String, required: true },
    payment_due: { type: String, required: true },
    payment_date: { type: String, required: true },
    paid_by: { type: String, required: true },
    salary_month: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('EmployeeSalaryPayment', employeeSalaryPaymentSchema);
// ===== employee_salary_setup.js =====

const mongoose = require('mongoose');

const employeeSalarySetupSchema = new mongoose.Schema({
    employee_id: { type: String, required: true },
    sal_type: { type: String, required: true },
    salary_type_id: { type: String, required: true },
    amount: { type: Number, default: 0.0 },
    create_date: { type: Date, default: null },
    update_date: { type: Date, default: null },
    update_id: { type: String, required: true },
    gross_salary: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('EmployeeSalarySetup', employeeSalarySetupSchema);
// ===== expense.js =====

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    type: { type: String, required: true },
    voucher_no: { type: String, required: true },
    amount: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
// ===== expense_item.js =====


// ===== fixed_assets.js =====

const mongoose = require('mongoose');

const fixedAssetsSchema = new mongoose.Schema({
    item_code: { type: String, required: true },
    item_name: { type: String, required: true },
    price: { type: Number, required: true },
    insert_date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('FixedAssets', fixedAssetsSchema);
// ===== invoice.js =====

const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoice_id: { type: Number, default: null },
    customer_id: { type: Number, default: null },
    date: { type: Date, default: null },
    total_amount: { type: Number, default: 0.0 },
    invoice: { type: Number, default: null },
    total_discount: { type: Number, default: 0.0 },
    invoice_discount: { type: Number, default: 0.0 },
    total_tax: { type: Number, default: 0.0 },
    prevous_due: { type: Number, default: 0.0 },
    sales_by: { type: String, default: null },
    invoice_details: { type: String, default: null },
    status: { type: Number, required: true },
    payment_type: { type: Number, default: 1 },
    bank_id: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
// ===== invoice_details.js =====

const mongoose = require('mongoose');

const invoiceDetailsSchema = new mongoose.Schema({
    invoice_details_id: { type: String, required: true },
    invoice_id: { type: Number, required: true },
    product_id: { type: String, required: true },
    batch_id: { type: String, required: true },
    cartoon: { type: Number, default: null },
    quantity: { type: Number, required: true },
    rate: { type: Number, default: null },
    manufacturer_rate: { type: Number, default: null },
    total_price: { type: Number, default: null },
    discount: { type: Number, default: null },
    tax: { type: Number, default: null },
    paid_amount: { type: Number, default: null },
    due_amount: { type: Number, default: null },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('InvoiceDetails', invoiceDetailsSchema);
// ===== language.js =====

const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    phrase: { type: String, required: true },
    english: { type: String, default: null },
    bangla: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Language', languageSchema);
// ===== manufacturer_information.js =====

const mongoose = require('mongoose');

const manufacturerInformationSchema = new mongoose.Schema({
    manufacturer_name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ManufacturerInformation', manufacturerInformationSchema);
// ===== manufacturer_ledger.js =====

const mongoose = require('mongoose');

const manufacturerLedgerSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    manufacturer_id: { type: Number, required: true },
    chalan_no: { type: String, default: null },
    deposit_no: { type: String, default: null },
    amount: { type: Number, default: 0.0 },
    description: { type: String, required: true },
    payment_type: { type: String, required: true },
    cheque_no: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: Number, required: true },
    d_c: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('ManufacturerLedger', manufacturerLedgerSchema);
// ===== module.js =====

const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: null },
    image: { type: String, required: true },
    directory: { type: String, required: true },
    status: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Module', moduleSchema);
// ===== payroll_tax_setup.js =====

const mongoose = require('mongoose');

const payrollTaxSetupSchema = new mongoose.Schema({
    start_amount: { type: Number, default: 0.0 },
    end_amount: { type: Number, default: 0.0 },
    rate: { type: Number, default: 0.0 },
    status: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PayrollTaxSetup', payrollTaxSetupSchema);
// ===== person_information.js =====

const mongoose = require('mongoose');

const personInformationSchema = new mongoose.Schema({
    person_name: { type: String, required: true },
    person_phone: { type: String, required: true },
    person_address: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PersonInformation', personInformationSchema);
// ===== person_ledger.js =====

const mongoose = require('mongoose');

const personLedgerSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    person_id: { type: String, required: true },
    date: { type: String, required: true },
    debit: { type: Number, default: 0.0 },
    credit: { type: Number, default: 0.0 },
    details: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PersonLedger', personLedgerSchema);
// ===== personal_loan.js =====


// ===== pesonal_loan_information.js =====

const mongoose = require('mongoose');

const personalLoanInformationSchema = new mongoose.Schema({
    person_id: { type: String, required: true },
    person_name: { type: String, required: true },
    person_phone: { type: String, required: true },
    person_address: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PersonalLoanInformation', personalLoanInformationSchema);
// ===== product_category.js =====

const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
    category_name: { type: String, default: null },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ProductCategory', productCategorySchema);
// ===== product_information.js =====

const mongoose = require('mongoose');

const productInformationSchema = new mongoose.Schema({
    product_id: { type: String, required: true },
    category_id: { type: String, required: true },
    product_name: { type: String, required: true },
    generic_name: { type: String, required: true },
    strength: { type: String, required: true },
    box_size: { type: String, required: true },
    product_location: { type: String, required: true },
    price: { type: String, required: true },
    tax: { type: String, default: null },
    product_model: { type: String, default: null },
    manufacturer_id: { type: Number, required: true },
    manufacturer_price: { type: Number, default: null },
    unit: { type: String, default: null },
    product_details: { type: String, default: null },
    image: { type: String, required: true },
    status: { type: Number, required: true },
    tax0: { type: String, default: null },
    tax1: { type: String, default: null },
    tax2: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('ProductInformation', productInformationSchema);
// ===== product_purchase.js =====

const mongoose = require('mongoose');

const productPurchaseSchema = new mongoose.Schema({
    chalan_no: { type: String, required: true },
    manufacturer_id: { type: String, required: true },
    grand_total_amount: { type: Number, default: 0.0 },
    total_discount: { type: Number, default: 0.0 },
    purchase_date: { type: String, required: true },
    purchase_details: { type: String, required: true },
    status: { type: Number, required: true },
    purchase_id: { type: String, required: true },
    bank_id: { type: String, default: null },
    payment_type: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ProductPurchase', productPurchaseSchema);
// ===== product_purchase_details.js =====

const mongoose = require('mongoose');

const productPurchaseDetailsSchema = new mongoose.Schema({
    purchase_detail_id: { type: String, required: true },
    purchase_id: { type: String, required: true },
    product_id: { type: String, required: true },
    quantity: { type: Number, default: 0.0 },
    rate: { type: Number, default: 0.0 },
    total_amount: { type: Number, default: 0.0 },
    discount: { type: Number, default: 0.0 },
    batch_id: { type: String, required: true },
    expeire_date: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ProductPurchaseDetails', productPurchaseDetailsSchema);
// ===== product_return.js =====

const mongoose = require('mongoose');

const productReturnSchema = new mongoose.Schema({
    return_id: { type: String, required: true },
    product_id: { type: String, required: true },
    invoice_id: { type: String, required: true },
    purchase_id: { type: String, default: null },
    date_purchase: { type: String, required: true },
    date_return: { type: String, required: true },
    byy_qty: { type: Number, default: 0.0 },
    ret_qty: { type: Number, default: 0.0 },
    customer_id: { type: String, required: true },
    manufacturer_id: { type: String, required: true },
    product_rate: { type: Number, default: 0.0 },
    deduction: { type: Number, default: 0.0 },
    total_deduct: { type: Number, default: 0.0 },
    total_tax: { type: Number, default: 0.0 },
    total_ret_amount: { type: Number, default: 0.0 },
    net_total_amount: { type: Number, default: 0.0 },
    reason: { type: String, required: true },
    usablity: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ProductReturn', productReturnSchema);
// ===== product_service.js =====

const mongoose = require('mongoose');

const productServiceSchema = new mongoose.Schema({
    service_name: { type: String, required: true },
    description: { type: String, required: true },
    charge: { type: Number, default: 0.0 },
    tax0: { type: String, default: null },
    tax1: { type: String, default: null },
    tax2: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('ProductService', productServiceSchema);
// ===== product_type.js =====

const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
    type_id: { type: String, default: null },
    type_name: { type: String, default: null },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ProductType', productTypeSchema);
// ===== role_permission.js =====

const mongoose = require('mongoose');

const rolePermissionSchema = new mongoose.Schema({
    fk_module_id: { type: Number, required: true },
    role_id: { type: Number, required: true },
    create: { type: Boolean, default: null },
    read: { type: Boolean, default: null },
    update: { type: Boolean, default: null },
    delete: { type: Boolean, default: null },
}, { timestamps: true });

module.exports = mongoose.model('RolePermission', rolePermissionSchema);
// ===== salary_sheet_generate.js =====

const mongoose = require('mongoose');

const salarySheetGenerateSchema = new mongoose.Schema({
    name: { type: String, default: null },
    gdate: { type: String, default: null },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
    generate_by: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SalarySheetGenerate', salarySheetGenerateSchema);
// ===== salary_type.js =====

const mongoose = require('mongoose');

const salaryTypeSchema = new mongoose.Schema({
    sal_name: { type: String, required: true },
    salary_type: { type: String, required: true },
    status: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SalaryType', salaryTypeSchema);
// ===== sec_role.js =====

const mongoose = require('mongoose');

const secRoleSchema = new mongoose.Schema({
    type: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SecRole', secRoleSchema);
// ===== sec_userrole.js =====

const mongoose = require('mongoose');

const secUserRoleSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    roleid: { type: Number, required: true },
    createby: { type: String, required: true },
    createdate: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model('SecUserRole', secUserRoleSchema);
// ===== service_invoice.js =====

const mongoose = require('mongoose');

const serviceInvoiceSchema = new mongoose.Schema({
    voucher_no: { type: String, required: true },
    date: { type: Date, required: true },
    employee_id: { type: String, required: true },
    customer_id: { type: String, required: true },
    total_amount: { type: Number, default: 0.0 },
    total_discount: { type: Number, default: 0.0 },
    invoice_discount: { type: Number, default: 0.0 },
    total_tax: { type: Number, default: 0.0 },
    paid_amount: { type: Number, default: 0.0 },
    due_amount: { type: Number, default: 0.0 },
    shipping_cost: { type: Number, default: 0.0 },
    previous: { type: Number, default: 0.0 },
    details: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ServiceInvoice', serviceInvoiceSchema);
// ===== service_invoice_details.js =====

const mongoose = require('mongoose');

const serviceInvoiceDetailsSchema = new mongoose.Schema({
    service_id: { type: Number, required: true },
    service_inv_id: { type: String, required: true },
    qty: { type: Number, default: 0.0 },
    charge: { type: Number, default: 0.0 },
    discount: { type: Number, default: 0.0 },
    discount_amount: { type: Number, default: 0.0 },
    total: { type: Number, default: 0.0 },
}, { timestamps: true });

module.exports = mongoose.model('ServiceInvoiceDetails', serviceInvoiceDetailsSchema);
// ===== sms_settings.js =====

const mongoose = require('mongoose');

const smsSettingsSchema = new mongoose.Schema({
    url: { type: String, required: true },
    sender_id: { type: String, required: true },
    api_key: { type: String, required: true },
    isinvoice: { type: Number, default: 0 },
    ispurchase: { type: Number, default: 0 },
    isservice: { type: Number, default: 0 },
    ispayment: { type: Number, default: 0 },
    isreceive: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('SmsSettings', smsSettingsSchema);
// ===== stock_fixed_asset.js =====

const mongoose = require('mongoose');

const stockFixedAssetSchema = new mongoose.Schema({
    purchase_id: { type: Number, required: true },
    item_code: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('StockFixedAsset', stockFixedAssetSchema);
// ===== sub_module.js =====

const mongoose = require('mongoose');

const subModuleSchema = new mongoose.Schema({
    mid: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    directory: { type: String, required: true },
    status: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SubModule', subModuleSchema);
// ===== supplier_information.js =====

const mongoose = require('mongoose');

const supplierInformationSchema = new mongoose.Schema({
    supplier_id: { type: String, required: true },
    supplier_name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SupplierInformation', supplierInformationSchema);
// ===== supplier_ledger.js =====

const mongoose = require('mongoose');

const supplierLedgerSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    supplier_id: { type: String, required: true },
    chalan_no: { type: String, default: null },
    deposit_no: { type: String, default: null },
    amount: { type: Number, default: 0.0 },
    description: { type: String, required: true },
    payment_type: { type: String, required: true },
    cheque_no: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: Number, required: true },
    d_c: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('SupplierLedger', supplierLedgerSchema);
// ===== synchronizer_setting.js =====

const mongoose = require('mongoose');

const synchronizerSettingSchema = new mongoose.Schema({
    hostname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    port: { type: String, required: true },
    debug: { type: String, required: true },
    project_root: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SynchronizerSetting', synchronizerSettingSchema);
// ===== tax_collection.js =====

const mongoose = require('mongoose');

const taxCollectionSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    customer_id: { type: String, required: true },
    relation_id: { type: String, required: true },
    tax0: { type: String, default: null },
    tax1: { type: String, default: null },
    tax2: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('TaxCollection', taxCollectionSchema);
// ===== tax_information.js =====

const mongoose = require('mongoose');

const taxInformationSchema = new mongoose.Schema({
    tax_id: { type: String, required: true },
    tax: { type: Number, default: null },
    status: { type: Number, default: null },
}, { timestamps: true });

module.exports = mongoose.model('TaxInformation', taxInformationSchema);
// ===== tax_settings.js =====

const mongoose = require('mongoose');

const taxSettingsSchema = new mongoose.Schema({
    default_value: { type: Number, required: true },
    tax_name: { type: String, required: true },
    nt: { type: Number, required: true },
    reg_no: { type: String, default: null },
    is_show: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('TaxSettings', taxSettingsSchema);
// ===== unit.js =====

const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    unit_name: { type: String, required: true },
    status: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Unit', unitSchema);
// ===== user_login.js =====

const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    user_type: { type: Number, default: null },
    security_code: { type: String, default: null },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('UserLogin', userLoginSchema);
// ===== users.js =====

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    last_name: { type: String, default: null },
    first_name: { type: String, default: null },
    gender: { type: String, default: null },
    date_of_birth: { type: String, default: null },
    logo: { type: String, default: null },
    status: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Users', usersSchema);
// ===== web_setting.js =====

const mongoose = require('mongoose');

const webSettingSchema = new mongoose.Schema({
    logo: { type: String, default: null },
    invoice_logo: { type: String, default: null },
    favicon: { type: String, default: null },
    currency: { type: String, default: null },
    timezone: { type: String, default: null },
    currency_position: { type: String, default: null },
    footer_text: { type: String, default: null },
    language: { type: String, default: null },
    rtr: { type: String, default: null },
    captcha: { type: Number, default: 1 },
    site_key: { type: String, default: null },
    secret_key: { type: String, default: null },
    discount_type: { type: Number, default: 1 },
}, { timestamps: true });

module.exports = mongoose.model('WebSetting', webSettingSchema);