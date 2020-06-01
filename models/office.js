const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const officeSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    phone1: {
        type: String,
        required: false
    },
    phone2: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    contactPerson: {
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

} , { timestamps: true });

module.exports = mongoose.model('Office', officeSchema);