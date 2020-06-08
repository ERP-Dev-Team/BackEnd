const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankDetailsSchema = new Schema({

    bankName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    accountHolderName: {
        type: String,
        required: true
    },
    IIFSCCode: {
        type: String,
        required: false
    },
    branch:{
        type: String,
        required: false
    },
    branchCity:{
        type: String,
        required: false
    },
    accountHolderName:{
        type: String,
        required: false
    },
    paymentFavour:{
        type: String,
        required: false
    }

} ,  { timestamps: true });

module.exports = mongoose.model('BankDetails', bankDetailsSchema);