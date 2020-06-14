const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    contactName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone1: {
        type: String,
        required: false
    },
    phone2: {
        type: String,
        required: false
    },
    address1: {
        type: String,
        required: false
    },
    address2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    zipcode: {
        type: String,
        required: false
    },
    panNumber: {
        type: String,
        required: false
    },
    gstNumber: {
        type: String,
        required: false
    },
    cstNumber: {
        type: String,
        required: false
    },
    accountBankName: {
        type: String,
        required: false
    },
    accountBranchName: {
        type: String,
        required: false
    },
    accountBranchCity: {
        type: String,
        required: false
    },
    accountNumber: {
        type: String,
        required: false
    },
    accountIIFSCCode: {
        type: String,
        required: false
    },
    accountHolderName: {
        type: String,
        required: false
    },
    accountPaymentFavour: {
        type: String,
        required: false
    },
    supplierTypes: [{
        type: Schema.Types.ObjectId,
        ref: 'SupplierType'
    }]

} ,  { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);