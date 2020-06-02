const User = require('../../models/user');

const { transformUser } = require('./merge');

module.exports = {

    users: async () => {
        try {
          const users = await User.find();
          return users.map(user => {
            return transformUser(user);
          });
        } catch (err) {
          throw err;
        }
      },
      createUser: async(args) => {
        try{
          const user = new User({
              userName: args.userInput.userName,
              password: args.userInput.password,
              firstName: args.userInput.firstName,
              lastName: args.userInput.lastName,
              email: args.userInput.email,
              phone1: args.userInput.phone1,
              phone2: args.userInput.phone2,
              phoneIMEI: args.userInput.phoneIMEI,
              address1: args.userInput.address1,
              address2: args.userInput.address2,
              city: args.userInput.city,
              state: args.userInput.state,
              country: args.userInput.country,
              zipcode: args.userInput.zipcode,
              joiningPlace: args.userInput.joiningPlace,
              joiningDate: args.userInput.joiningDate,
              dateOfBirth: args.userInput.dateOfBirth,
              qualification: args.userInput.qualification,
              salary: args.userInput.salary,
              batta: args.userInput.batta,
              salaryEffectiveDate: args.userInput.salaryEffectiveDate,
              salaryOld: args.userInput.salaryOld,
              battaOld: args.userInput.battaOld,
              loginAllowed: args.userInput.loginAllowed,
              lastLogin: args.userInput.lastLogin,
              lastLoginDevice: args.userInput.lastLoginDevice,
              refPerson: args.userInput.refPerson,
              refPersonPhone: args.userInput.refPersonPhone,
              refPersonAddress: args.userInput.refPersonAddress,
              IMEIAllowed: args.userInput.IMEIAllowed,
              bankAccountNumber: args.userInput.bankAccountNumber,
              bankName: args.userInput.bankName,
              bankBranchName: args.userInput.bankBranchName,
              bankBranchCity: args.userInput.bankBranchCity,
              bankIIFSCCode: args.userInput.bankIIFSCCode,
              bankAccountHolderName: args.userInput.bankAccountHolderName,
              designation: args.userInput.designation,
              rolesAllowed: args.userInput.rolesAllowed,
              modulesAllowed: args.userInput.modulesAllowed,
              campsAllowed: args.userInput.campsAllowed
            });
          
            let createdUser;
            try {
              const result = await user.save();
              createdUser = transformUser(result);            
            }catch(err){
                throw err;
            }
            return createdUser;
        }catch(err){
            throw err;
        }
    },
    updateUser:async(args)=>{
      try{
          const user = await User.find({_id:args._id});
          if(user == undefined){
              throw new Error('No user found.');
          }
          let userUpdated;
          try{
            userUpdated=await User.findOneAndUpdate(
              {"_id": args._id},
              { "$set":{name: args.name, status: args.status,project: args.project,startDate: args.startDate, endDate: args.endDate}},
              {"new": true} //returns new document else will return document before update
          ).exec();
          }catch(err){
              throw err;
          }
          return transformUser(userUpdated);
      }catch(err){throw err;}
  }
}