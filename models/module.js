const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moduleSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    rolesAllowed:[{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }]

} ,  { timestamps: true });

module.exports = mongoose.model('Module', moduleSchema);