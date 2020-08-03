const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema({

    make: {
        type: String,
        required: false
    },
    model: {
        type: String,
        required: false
    },
    OS: {
        type: String,
        required: false
    },
    upTime: {
        type: String,
        required: false
    },
    cellNumber: {
        type: String,
        required: false
    },
    IMEI: {
        type: String,
        required: true,
        unique: true
    },
    userAssigned: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    lastUsedUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    networkName: {
        type: String,
        required: false
    },
    networkType: {
        type: String,
        enum: ['WIFI', 'CELLULAR'],
        required: false
    },
    networkStrength: {
        type: String,
        required: false
    },
    batteryPercentage: {
        type: String,
        required: false
    },
    lastKnownLatitude: {
        type: String,
        required: false
    },
    lastKnownLongitude: {
        type: String,
        required: false
    },


}, { timestamps: true });

module.exports = mongoose.model('Device', deviceSchema);