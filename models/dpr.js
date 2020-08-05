const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DPRSchema = new Schema({

    camp: {
        type: Schema.Types.ObjectId,
        ref: 'Camp'
    },
    workType: {
        type: Schema.Types.ObjectId,
        ref: 'WorkType'
    },
    workDescription: {
        type: String,
        required: false
    },
    length: {
        type: Schema.Types.Number,
        required: false,
    },
    breadth: {
        type: Schema.Types.Number,
        required: false,
    },
    height: {
        type: Schema.Types.Number,
        required: false,
    },
    cummulative: {
        type: Schema.Types.Number,
        required: false,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    photoLocation: {
        type: String,
        required: false
    },
    locationLatitude: {
        type: String,
        required: false
    },
    locationLongitude: {
        type: String,
        required: false
    },
    approvalsNeeded: [
        {
            type: Schema.Types.ObjectId,
            ref: "Approval",
        },
    ],

}, { timestamps: true });

module.exports = mongoose.model('DPR', DPRSchema);