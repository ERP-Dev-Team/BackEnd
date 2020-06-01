const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workTypeSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    unit: {
        type: Schema.Types.ObjectId,
        ref: 'Unit'
    }

} ,  { timestamps: true });

module.exports = mongoose.model('WorkType', workTypeSchema);