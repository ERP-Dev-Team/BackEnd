const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mmPurchaseOrderSchema = new Schema({

    status:{
        type: String,
        enum: ['CREATED', 'PENDING FOR APPROVAL','ORDER CONFIRMED'],
        required: true
    },
    createdByUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    purchaseOrderNumber: {
        type: String,
        required: true
    },
    camp:{
        type: Schema.Types.ObjectId,
        ref: 'Camp',
        required: true
    },
    supplier:{
        type: Schema.Types.ObjectId,
        ref: 'Supplier',
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

module.exports = mongoose.model('mmInternalIndent', mmInternalIndentSchema);