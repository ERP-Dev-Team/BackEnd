const BankDetails = require("../../models/bankdetails");

const { transformBankDetails } = require("./merge");

module.exports = {
  bankdetails: async () => {
    try {
      const bankDetails = await BankDetails.find();
      if(bankDetails == undefined){
        throw new Error('No Banks Details found.');
    }
      return bankDetails.map((bankDetail) => {
        return transformBankDetails(bankDetail);
      });
    } catch (err) {
      throw err;
    }
  },
  createBankDetails: async (args) => {
    try {
      const bankDetails = new BankDetails({
        bankName: args.bankDetailsInput.bankName,
        accountNumber: args.bankDetailsInput.accountNumber,
        accountHolderName: args.bankDetailsInput.accountHolderName,
        IIFSCCode: args.bankDetailsInput.IIFSCCode,
        branch: args.bankDetailsInput.branch,
        branchCity: args.bankDetailsInput.branchCity,
        paymentFavour: args.bankDetailsInput.paymentFavour
      });

      let createdBankDetails;
      try {
        const result = await bankDetails.save();
        createdBankDetails = transformBankDetails(result);
      } catch (err) {
        throw err;
      }
      return createdBankDetails;
    } catch (err) {
      throw err;
    }
  },
  updateBankDetails: async (args) => {
    try {
      const bankDetails = await BankDetails.find({ _id: args._id });
      if (bankDetails == undefined) {
        throw new Error("No Bank Details found.");
      }
      let bankDetailsUpdated;
      try {
        bankDetailsUpdated = await BankDetails.findOneAndUpdate(
          { _id: args._id },
          { $set: { 
            bankName: args.bankName,
            accountNumber: args.accountNumber,
            accountHolderName: args.accountHolderName,
            IIFSCCode: args.IIFSCCode,
            branch: args.branch,
            branchCity: args.branchCity,
            paymentFavour: args.paymentFavour
            } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformBankDetails(bankDetailsUpdated);
    } catch (err) {
      throw err;
    }
  },
};
