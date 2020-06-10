const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemObjectSchema = new Schema({

    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    quantity: {
        type: Double,
        required: true
    },
    cost: {
        type: Double,
        required: true
    }

} ,  { timestamps: true });

module.exports = mongoose.model('ItemObject', itemObjectSchema);