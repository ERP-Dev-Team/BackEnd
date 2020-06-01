const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    status:{
        type: String,
        enum: ['Open', 'Closed','Paused','Terminated'],
        required: true
    },
    startDate: {
        type: String,
        required: false
    },
    endDate: {
        type: String,
        required: false
    },

} , { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);