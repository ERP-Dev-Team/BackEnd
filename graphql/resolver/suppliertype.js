const SupplierType = require('../../models/suppliertype');
const Role = require("../../models/role");
const { transformSupplierType } = require('./merge');

module.exports = {
  suppliertypes: async () => {
    try {
      const suppliertypes = await SupplierType.find();
      if (suppliertypes == undefined) {
        throw new Error('No Supplier Types found.');
      }
      return suppliertypes.map(suppliertype => {
        return transformSupplierType(suppliertype);
      });
    } catch (err) {
      throw err;
    }
  },
  suppliertype: async (args) => {
    try {
      const suppliertype = await SupplierType.findOne({_id:args._id});
      if (!suppliertype) {
        throw new Error('no supplier found');
      }
      return transformSupplierType(suppliertype);
    } catch (err) {
      throw err;
    }
  },
  createSupplierType: async (args) => {
    try {
      const suppliertype = new SupplierType({
        name: args.supplierTypeInput.name,
      });

      let createdSupplierType;
      try {
        const result = await suppliertype.save();
        createdSupplierType = transformSupplierType(result);
      } catch (err) {
        throw err;
      }
      return createdSupplierType;
    } catch (err) {
      throw err;
    }
  },
  updateSupplierType: async (args) => {
    try {
      const supplierType = await SupplierType.find({ _id: args._id });
      if (supplierType == undefined) {
        throw new Error('No supplier type found.');
      }
      let supplierTypeUpdated;
      try {
        supplierTypeUpdated = await SupplierType.findOneAndUpdate(
          { "_id": args._id },
          { "$set": { name: args.name } },
          { "new": true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformSupplierType(supplierTypeUpdated);
    } catch (err) { throw err; }
  },
  deleteSupplierType: async (args,req) =>{
    try{
      if (req.isAuth) {
        var rolesAllowed = req.rolesAllowed;
        var isAdmin = false;
        for (var i = 0; i < rolesAllowed.length; i++) {
          try {
            var roleDb = await Role.findById(rolesAllowed[i])
            if (roleDb) {

              if (roleDb.name == 'ADMIN') {
                isAdmin = true;
                break;
              }
            }
          } catch (err) { }
        }
        if (!isAdmin) {
          throw new Error('Not authorized');
        }
      } else {
        throw new Error('Not authorized');
      }
      const supplierType = await SupplierType.find({ _id: args._id });
      if (supplierType == undefined) {
        throw new Error("No supplier type found.");
      }
      let supplierTypeDelete;
      try {
        supplierTypeDelete = await SupplierType.findByIdAndDelete(args._id);
        return transformSupplierType(supplierTypeDelete);
      } catch (err) {
        throw err;
      }
    }catch(err){
      throw err;
    }
  }
}