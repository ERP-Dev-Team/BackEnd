const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    partNumber: {
        type: String,
        required: false
    },
    unit: {
        type: Schema.Types.ObjectId,
        ref: 'Unit'
    },
    hsnNumber: {
        type: String,
        required: false
    },
    itemCode: {
        type: String,
        unique: true,
        required: true
    },
    itemCategory: {
        type: Schema.Types.ObjectId,
        ref: 'ItemCategory'
    }

} ,  { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);