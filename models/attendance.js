const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    camp: {
        type: Schema.Types.ObjectId,
        ref: 'Camp',
        required: false
    },
    loginTimestamp: {
        type: String,
        required: false
    },
    loginPhoto: {
        type: String,
        required: false
    },
    logoutPhoto: {
        type: String,
        required: false
    },
    shift: {
        type: String,
        enum: ['DAY', 'EVENING', 'NIGHT'],
        required: false
    },
    logoutTimestamp: {
        type: String,
        required: false
    },
    batta: {
        type: String,
        required: false
    },
    workType: {
        type: Schema.Types.ObjectId,
        ref: 'WorkType',
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
    quantity: {
        type: String,
        required: false
    },
    device: {
        type: Schema.Types.ObjectId,
        ref: 'Device',
        required: false
    },
    approvalsNeeded: [
        {
            type: Schema.Types.ObjectId,
            ref: "Approval",
        }
    ]


}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);