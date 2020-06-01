const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    status:{
        type: String,
        enum: ['Active', 'Inactive'],
        required: true
    },
    project:{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    address:{
        type: String,
        required: false
    },
    startDate: {
        type: String,
        required: false
    },
    endDate: {
        type: String,
        required: false
    },

} ,  { timestamps: true });

module.exports = mongoose.model('Camp', campSchema);