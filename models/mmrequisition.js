const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mmRequisitionSchema = new Schema({

    status:{
        type: String,
        enum: ['CREATED', 'APPROVED'],
        required: true
    },
    createdByUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    camp: {
        type: Schema.Types.ObjectId,
        ref: 'Camp',
        required: true
    },
    description:{
        type: String,
        required: true
    },
    items:[{
        type: Schema.Types.ObjectId,
        ref: 'ItemObject'
    }],
    approvalsNeeded:[{
        type: Schema.Types.ObjectId,
        ref: 'Approval'
    }]

} ,  { timestamps: true });

module.exports = mongoose.model('mmRequisition', mmRequisitionSchema);