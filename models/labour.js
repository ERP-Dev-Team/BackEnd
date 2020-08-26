const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LabourSchema = new Schema({

    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    name: {
        type: String,
        required: true
    },
    idPhotoLocation: {
        type: String,
        required: false
    },
    camp: {
        type: Schema.Types.ObjectId,
        ref: 'Camp'
    },
    wage: {
        type: Schema.Types.Number,
        required: false,
    },
    type: {
        type: String,
        enum: ['MALE', 'FEMALE'],
        required: true
    },
    
    

}, { timestamps: true });

module.exports = mongoose.model('Labour', LabourSchema);