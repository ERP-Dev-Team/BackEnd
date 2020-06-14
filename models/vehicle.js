const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    registrationNumber: {
        type: String,
        unique: true,
        required: true
    },
    vin: {
        type: String,
        unique: true,
    },
    vehicleType: {
        type: Schema.Types.ObjectId,
        ref: 'VehicleType',
        required: true
    },
    make: {
        type: String,
        required: false
    },
    ownerStatus:{
        type: String,
        enum: ['OWN', 'RENT','LEASE'],
        required: true
    }

} ,  { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);