const Vehicle = require("../../models/vehicle");

const { transformVehicle } = require("./merge");

module.exports = {
  vehicles: async () => {
    try {
      const vehicles = await Vehicle.find();
      if(vehicles == undefined){
        throw new Error('No Vehicles found.');
    }
      return vehicles.map((vehicle) => {
        return transformVehicle(vehicle);
      });
    } catch (err) {
      throw err;
    }
  },
  createVehicle: async (args) => {
    try {
      const vehicle = new Vehicle({
        registrationNumber: args.vehicleInput.registrationNumber,
        vin: args.vehicleInput.vin,
        vehicleType: args.vehicleInput.vehicleType,
        make: args.vehicleInput.make,
        ownerStatus: args.vehicleInput.ownerStatus,
      });

      let createdVehicle;
      try {
        const result = await vehicle.save();
        createdVehicle = transformVehicle(result);
      } catch (err) {
        throw err;
      }
      return createdVehicle;
    } catch (err) {
      throw err;
    }
  },
  updateVehicle: async (args) => {
    try {
      const vehicle = await Vehicle.find({ _id: args._id });
      if (vehicle == undefined) {
        throw new Error("No vehicle found.");
      }
      let vehicleUpdated;
      try {
        vehicleUpdated = await Vehicle.findOneAndUpdate(
          { _id: args._id },
          { $set: { 
            registrationNumber: args.registrationNumber,
            vin: args.vin,
            vehicleType: args.vehicleType,
            make: args.make,
            ownerStatus: args.ownerStatus,
            } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformVehicle(vehicleUpdated);
    } catch (err) {
      throw err;
    }
  },
};
