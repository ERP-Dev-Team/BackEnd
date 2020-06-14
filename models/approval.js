const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const approvalSchema = new Schema({

    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    note:{
        type: String,
        required: false
    },
    camp:{
        type: Schema.Types.ObjectId,
        ref: 'Camp'
    },
    isApproved: {
        type: Boolean,
        required: true
    },

} ,  { timestamps: true });

module.exports = mongoose.model('Approval', approvalSchema);