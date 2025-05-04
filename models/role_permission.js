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