const Unit = require("../../models/unit");
const Role = require("../../models/role");


const { transformUnit } = require("./merge");

module.exports = {
  units: async () => {
    try {
      const units = await Unit.find();
      if (units == undefined) {
        throw new Error("No units found.");
      }
      return units.map((unit) => {
        return transformUnit(unit);
      });
    } catch (err) {
      throw err;
    }
  },
  unit: async (args) => {
    try {
      const unit = await Unit.findOne({ _id: args._id });
      if (unit == undefined) {
        throw new Error("No unit found.");
      }
      return transformUnit(unit);
    } catch (err) {
      throw err;
    }
  },
  createUnit: async (args) => {
    try {
      const unit = new Unit({
        name: args.unitInput.name,
      });

      let createdUnit;
      try {
        const result = await unit.save();
        createdUnit = transformUnit(result);
      } catch (err) {
        throw err;
      }
      return createdUnit;
    } catch (err) {
      throw err;
    }
  },
  updateUnit: async (args) => {
    try {
      const unit = await Unit.find({ _id: args._id });
      if (unit == undefined) {
        throw new Error("No unit found.");
      }
      let unitUpdated;
      try {
        unitUpdated = await Unit.findOneAndUpdate(
          { _id: args._id },
          { $set: { name: args.name } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformUnit(unitUpdated);
    } catch (err) {
      throw err;
    }
  },
  deleteUnit: async (args,req) => {
    try {
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
      const unit = await Unit.find({ _id: args._id });
      if (unit == undefined) {
        throw new Error("No unit found.");
      }
      let unitDelete;
      try {
        unitDelete = await Unit.findByIdAndDelete(args._id);
        return transformUnit(unitDelete);
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  },
};
