const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const billingDetailsSchema = new Schema({

    billingName: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    gstin: {
        type: String,
        required: false
    },
    phone1: {
        type: String,
        required: false
    },
    phone2:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },
    website:{
        type: String,
        required: false
    }

} ,  { timestamps: true });

module.exports = mongoose.model('BillingDetails', billingDetailsSchema);
