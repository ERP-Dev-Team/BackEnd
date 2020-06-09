const BillingDetails = require("../../models/billingdetails");

const { transformBillingDetails } = require("./merge");

module.exports = {
  billingdetails: async () => {
    try {
      const billingDetails = await BillingDetails.find();
      if(billingDetails == undefined){
        throw new Error('No Billing Details found.');
    }
      return billingDetails.map((billingDetail) => {
        return transformBillingDetails(billingDetail);
      });
    } catch (err) {
      throw err;
    }
  },
  createBillingDetails: async (args) => {
    try {
      const billingDetails = new BillingDetails({
        billingName: args.billingDetailsInput.billingName,
        address: args.billingDetailsInput.address,
        gstin: args.billingDetailsInput.gstin,
        phone1: args.billingDetailsInput.phone1,
        phone2: args.billingDetailsInput.phone2,
        email: args.billingDetailsInput.email,
        website: args.billingDetailsInput.website
      });

      let createdBillingDetails;
      try {
        const result = await billingDetails.save();
        createdBillingDetails = transformBillingDetails(result);
      } catch (err) {
        throw err;
      }
      return createdBillingDetails;
    } catch (err) {
      throw err;
    }
  },
  updateBillingDetails: async (args) => {
    try {
      const billingDetails = await BillingDetails.find({ _id: args._id });
      if (billingDetails == undefined) {
        throw new Error("No Billing Details found.");
      }
      let billingDetailsUpdated;
      try {
        billingDetailsUpdated = await BillingDetails.findOneAndUpdate(
          { _id: args._id },
          { $set: { 
            billingName: args.billingName,
            address: args.address,
            gstin: args.gstin,
            phone1: args.phone1,
            phone2: args.phone2,
            email: args.email,
            website: args.website
            } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformBillingDetails(billingDetailsUpdated);
    } catch (err) {
      throw err;
    }
  },
};
