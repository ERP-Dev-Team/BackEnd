const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unitSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },

} ,  { timestamps: true });

module.exports = mongoose.model('Unit', unitSchema);