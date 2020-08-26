const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NMRWorkSchema = new Schema({

    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    workType: {
        type: Schema.Types.ObjectId,
        ref: 'WorkType'
    },
    remark: {
        type: String,
        required: false
    },
    camp: {
        type: Schema.Types.ObjectId,
        ref: 'Camp'
    },
    labourInvolved: [{
        type: Schema.Types.ObjectId,
        ref: 'Labour'
    }],
    indentNumber: {
        type: Schema.Types.Number,
        unique: true,
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'SETTLED'],
        required: true
    },
    shift: {
        type: String,
        enum: ['DAY', 'EVENING', 'NIGHT'],
        required: false
    },
    finalCost: {
        type: Schema.Types.Number,
        required: false,
    },
    approvalsNeeded: [
        {
            type: Schema.Types.ObjectId,
            ref: "Approval",
        },
    ]

}, { timestamps: true });

module.exports = mongoose.model('NMRWork', NMRWorkSchema);