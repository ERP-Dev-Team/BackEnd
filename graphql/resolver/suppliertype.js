const SupplierType = require('../../models/suppliertype');

const { transformSupplierType } = require('./merge');

module.exports = {
    suppliertypes: async () => {
        try {
          const suppliertypes = await SupplierType.find();
          if(suppliertypes == undefined){
            throw new Error('No Supplier Types found.');
          }
          return suppliertypes.map(suppliertype => {
            return transformSupplierType(suppliertype);
          });
        } catch (err) {
          throw err;
        }
      },
      createSupplierType: async(args) =>{
        try{
          const suppliertype = new SupplierType({
              name: args.supplierTypeInput.name,
            });

            let createdSupplierType;
            try {
              const result = await suppliertype.save();
              createdSupplierType = transformSupplierType(result);                 
            }catch(err){
                throw err;
            }
            return createdSupplierType;
        }catch(err){
            throw err;
        }
    },
    updateSupplierType:async(args)=>{
        try{
            const supplierType = await SupplierType.find({_id:args._id});
            if(supplierType == undefined){
                throw new Error('No supplier type found.');
            }
            let supplierTypeUpdated;
            try{
                supplierTypeUpdated=await SupplierType.findOneAndUpdate(
                {"_id": args._id},
                { "$set":{name: args.name}},
                {"new": true} //returns new document else will return document before update
            ).exec();
            }catch(err){
                throw err;
            }
            return transformSupplierType(supplierTypeUpdated);
        }catch(err){throw err;}
    }
}