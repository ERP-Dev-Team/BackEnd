const Supplier = require("../../models/supplier");

const { transformSupplier } = require("./merge");

module.exports = {
  suppliers: async () => {
    try {
      const suppliers = await Supplier.find();
      if(suppliers == undefined){
        throw new Error('No suppliers found.');
    }
      return suppliers.map((supplier) => {
        return transformSupplier(supplier);
      });
    } catch (err) {
      throw err;
    }
  },
  createSupplier: async (args) => {
    try {
      const supplier = new Supplier({
        name: args.supplierInput.name,
        contactname: args.supplierInput.contactname,
        email: args.supplierInput.email,
        phone1: args.supplierInput.phone1,
        address1: args.supplierInput.address1,
        address2: args.supplierInput.address2,
        city: args.supplierInput.city,
        state:args.supplierInput.state,
        country:args.supplierInput.country,
        zipcode:args.supplierInput.zipcode,
        panNumber:args.supplierInput.panNumber,
        gstNumber: args.supplierInput.gstNumber,
        cstNumber: args.supplierInput.cstNumber,
        accountBankName: args.supplierInput.accountBankName,
        accountBranchName: args.supplierInput.accountBranchName,
        accountBranchCity: args.supplierInput.accountBranchCity,
        accountNumber: args.supplierInput.accountNumber,
        accountIIFSCCode: args.supplierInput.accountIIFSCCode,
        accountHolderName: args.supplierInput.accountHolderName,
        accountPaymentFavour: args.supplierInput.accountPaymentFavour,
        supplierTypes: args.supplierInput.supplierTypes
      });

      let createdSupplier;
      try {
        const result = await supplier.save();
        createdSupplier = transformSupplier(result);
      } catch (err) {
        throw err;
      }
      return createdSupplier;
    } catch (err) {
      throw err;
    }
  },
  updateSupplier: async (args) => {
    try {
      const supplier = await Supplier.find({ _id: args._id });
      if (supplier == undefined) {
        throw new Error("No supplier found.");
      }
      let supplierUpdated;
      try {
        supplierUpdated = await Supplier.findOneAndUpdate(
          { _id: args._id },
          { $set: { 
            name: args.name,
            contactname: args.contactname,
            email: args.email,
            phone1: args.phone1,
            address1: args.address1,
            address2: args.address2,
            city: args.city,
            state:args.state,
            country:args.country,
            zipcode:args.zipcode,
            panNumber:args.panNumber,
            gstNumber: args.gstNumber,
            cstNumber: args.cstNumber,
            accountBankName: args.accountBankName,
            accountBranchName: args.accountBranchName,
            accountBranchCity: args.accountBranchCity,
            accountNumber: args.accountNumber,
            accountIIFSCCode: args.accountIIFSCCode,
            accountHolderName: args.accountHolderName,
            accountPaymentFavour: args.accountPaymentFavour,
            supplierTypes: args.supplierTypes
            } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformSupplier(supplierUpdated);
    } catch (err) {
      throw err;
    }
  },
};
