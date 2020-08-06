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
  supplier: async (args) => {
    try {
      const supplier = await Supplier.findById(args._id);
      if (!supplier) {
        throw new Error('no supplier found');
      }
      return transformSupplier(supplier);
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
            name: args.supplierEditInput.name,
            contactname: args.supplierEditInput.contactname,
            email: args.supplierEditInput.email,
            phone1: args.supplierEditInput.phone1,
            address1: args.supplierEditInput.address1,
            address2: args.supplierEditInput.address2,
            city: args.supplierEditInput.city,
            state:args.supplierEditInput.state,
            country:args.supplierEditInput.country,
            zipcode:args.supplierEditInput.zipcode,
            panNumber:args.supplierEditInput.panNumber,
            gstNumber: args.supplierEditInput.gstNumber,
            cstNumber: args.supplierEditInput.cstNumber,
            accountBankName: args.supplierEditInput.accountBankName,
            accountBranchName: args.supplierEditInput.accountBranchName,
            accountBranchCity: args.supplierEditInput.accountBranchCity,
            accountNumber: args.supplierEditInput.accountNumber,
            accountIIFSCCode: args.supplierEditInput.accountIIFSCCode,
            accountHolderName: args.supplierEditInput.accountHolderName,
            accountPaymentFavour: args.supplierEditInput.accountPaymentFavour,
            supplierTypes: args.supplierEditInput.supplierTypes
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
