const User = require("../../models/user");
const bcrypt = require("bcrypt");

const { transformUser } = require("./merge");

module.exports = {
  users: async () => {
    try {
      const users = await User.find();
      return users.map((user) => {
        return transformUser(user);
      });
    } catch (err) {
      throw err;
    }
  },
  user: async (args) => {
    try {
      const user = await User.findById(args._id);
      if (user) {
        return transformUser(user);
      } else {
        return undefined;
      }
    } catch (err) {
      throw err;
    }
  },
  createUser: async (args) => {
    try {
      const passwordHashed = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        userName: args.userInput.userName,
        password: passwordHashed,
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
        campsAllowed: args.userInput.campsAllowed,
      });

      let createdUser;
      try {
        const result = await user.save();
        createdUser = transformUser(result);
      } catch (err) {
        throw err;
      }
      return createdUser;
    } catch (err) {
      throw err;
    }
  },
  updateUser: async (args) => {
    try {
      const user = await User.find({ _id: args.userEditInput._id });
      if (user == undefined) {
        throw new Error("No user found.");
      }
      let userUpdated;
      try {
        userUpdated = await User.findOneAndUpdate(
          { _id: args._id },
          {
            $set: {
              firstName: args.userEditInput.firstName,
              lastName: args.userEditInput.lastName,
              email: args.userEditInput.email,
              phone1: args.userEditInput.phone1,
              phone2: args.userEditInput.phone2,
              phoneIMEI: args.userEditInput.phoneIMEI,
              address1: args.userEditInput.address1,
              address2: args.userEditInput.address2,
              city: args.userEditInput.city,
              state: args.userEditInput.state,
              country: args.userEditInput.country,
              zipcode: args.userEditInput.zipcode,
              joiningPlace: args.userEditInput.joiningPlace,
              joiningDate: args.userEditInput.joiningDate,
              dateOfBirth: args.userEditInput.dateOfBirth,
              qualification: args.userEditInput.qualification,
              salary: args.userEditInput.salary,
              batta: args.userEditInput.batta,
              salaryEffectiveDate: args.userEditInput.salaryEffectiveDate,
              salaryOld: args.userEditInput.salaryOld,
              battaOld: args.userEditInput.battaOld,
              loginAllowed: args.userEditInput.loginAllowed,
              refPerson: args.userEditInput.refPerson,
              refPersonPhone: args.userEditInput.refPersonPhone,
              refPersonAddress: args.userEditInput.refPersonAddress,
              IMEIAllowed: args.userEditInput.IMEIAllowed,
              bankAccountNumber: args.userEditInput.bankAccountNumber,
              bankName: args.userEditInput.bankName,
              bankBranchName: args.userEditInput.bankBranchName,
              bankBranchCity: args.userEditInput.bankBranchCity,
              bankIIFSCCode: args.userEditInput.bankIIFSCCode,
              bankAccountHolderName: args.userEditInput.bankAccountHolderName,
              designation: args.userEditInput.designation,
              rolesAllowed: args.userEditInput.rolesAllowed,
              modulesAllowed: args.userEditInput.modulesAllowed,
              campsAllowed: args.userEditInput.campsAllowed,
            },
          },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformUser(userUpdated);
    } catch (err) {
      throw err;
    }
  },
};
