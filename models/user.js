const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },
    phone1:{
        type: String,
        required: false
    },
    phone2:{
        type: String,
        required: false
    },
    phoneIMEI:{
        type: String,
        required: false
    },
    address1:{
        type: String,
        required: false
    },
    address2:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    state:{
        type: String,
        required: false
    },
    country:{
        type: String,
        required: false
    },
    zipcode:{
        type: String,
        required: false
    },
    joiningPlace:{
        type: String,
        required: false
    },
    joiningDate:{
        type: String,
        required: false
    },
    dateOfBirth:{
        type: String,
        required: false
    },
    qualification:{
        type: String,
        required: false
    },
    salary:{
        type: String,
        required: false
    },
    batta:{
        type: String,
        required: false
    },
    salaryEffectiveDate:{
        type: String,
        required: false
    },
    salaryOld:{
        type: String,
        required: false
    },
    battaOld:{
        type: String,
        required: false
    },
    loginAllowed:{
        type: Schema.Types.Boolean,
        required: true
    },
    lastLogin:{
        type: String,
        required: false
    },
    lastLoginDevice:{
        type: String,
        required: false
    },
    refPerson:{
        type: String,
        required: false
    },
    refPersonPhone:{
        type: String,
        required: false
    },
    refPersonAddress:{
        type: String,
        required: false
    },
    IMEIAllowed:{
        type: Schema.Types.Boolean,
        required: true
    },
    bankAccountNumber:{
        type: String,
        required: false
    },
    bankName:{
        type: String,
        required: false
    },
    bankBranchName:{
        type: String,
        required: false
    },
    bankBranchCity:{
        type: String,
        required: false
    },
    bankIIFSCCode:{
        type: String,
        required: false
    },
    bankAccountHolderName:{
        type: String,
        required: false
    },
    designation:[{
        type: Schema.Types.ObjectId,
        ref: 'Designation'
    }],
    rolesAllowed:[{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }],
    campsAllowed:[{
        type: Schema.Types.ObjectId,
        ref: 'Camp'
    }],
    
    

} ,  { timestamps: true });

module.exports = mongoose.model('User', userSchema);