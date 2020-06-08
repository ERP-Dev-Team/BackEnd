const VehicleType = require('../../models/vehicletype');

const { transformVehicleType } = require('./merge');

module.exports = {
    vehicletypes: async () => {
        try {
          const vehicleTypes = await VehicleType.find();
          if(vehicleTypes == undefined){
            throw new Error('No Vehicle Types found.');
          }
          return vehicleTypes.map(vehicletype => {
            return transformVehicleType(vehicletype);
          });
        } catch (err) {
          throw err;
        }
      },
      createVehicleType: async(args) =>{
        try{
          const vehicleType = new VehicleType({
              name: args.vehicleTypeInput.name,
            });

            let createdVehicleType;
            try {
              const result = await vehicleType.save();
              createdVehicleType = transformVehicleType(result);                 
            }catch(err){
                throw err;
            }
            return createdVehicleType;
        }catch(err){
            throw err;
        }
    },
    updateVehicleType:async(args)=>{
        try{
            const vehicleType = await VehicleType.find({_id:args._id});
            if(vehicleType == undefined){
                throw new Error('No supplier type found.');
            }
            let vehicleTypeUpdated;
            try{
                vehicleTypeUpdated=await VehicleType.findOneAndUpdate(
                {"_id": args._id},
                { "$set":{name: args.name}},
                {"new": true} //returns new document else will return document before update
            ).exec();
            }catch(err){
                throw err;
            }
            return transformVehicleType(vehicleTypeUpdated);
        }catch(err){throw err;}
    }
}