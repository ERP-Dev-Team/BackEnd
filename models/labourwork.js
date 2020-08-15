const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LabourWorkSchema = new Schema({

    quantity: {
        type: Schema.Types.Number,
        required: false,
    },
    labour: {
        type: Schema.Types.ObjectId,
        ref: 'Labour'
    },
    loginPhoto: {
        type: String,
        required: false
    },
    logoutPhoto: {
        type: String,
        required: false
    },
    loginLatitude: {
        type: String,
        required: false
    },
    loginLongitude: {
        type: String,
        required: false
    },
    logoutLatitude: {
        type: String,
        required: false
    },
    logoutLongitude: {
        type: String,
        required: false
    },



}, { timestamps: true });

module.exports = mongoose.model('LabourWork', LabourWorkSchema);