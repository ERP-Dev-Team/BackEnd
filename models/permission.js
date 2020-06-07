const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const permissionSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'Caved',
        required: true
    },
    worktype: {
        type: Schema.Types.ObjectId,
        ref: 'Caved',
        required: true
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Caved',
        required: true
    },
    suppliertype: {
        type: Schema.Types.ObjectId,
        ref: 'Caved',
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Caved',
        required: true
    },
    vehicletype: {
        type: Schema.Types.ObjectId,
        ref: 'Caved',
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Caved',
        required: true
    },
    itemcategory: {
        type: Schema.Types.ObjectId,
        ref: 'Caved',
        required: true
    },

} ,  { timestamps: true });

module.exports = mongoose.model('Permission', permissionSchema);