const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cavedSchema = new Schema({

    create: [{
        type: Schema.Types.ObjectId,
        ref: 'Role',
    }],
    approval:[{
        type: Schema.Types.ObjectId,
        ref: 'Role',
    }],
    view:[{
        type: Schema.Types.ObjectId,
        ref: 'Role',
    }],
    edit:[{
        type: Schema.Types.ObjectId,
        ref: 'Role',
    }],
    delete:[{
        type: Schema.Types.ObjectId,
        ref: 'Role',
    }],

} ,  { timestamps: true });

module.exports = mongoose.model('Caved', cavedSchema);