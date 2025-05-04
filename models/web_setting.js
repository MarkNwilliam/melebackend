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