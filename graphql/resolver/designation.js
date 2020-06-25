const Designation = require("../../models/designation");

const { transformDesignation } = require("./merge");

module.exports = {
  designations: async () => {
    try {
      const designations = await Designation.find();
      if (designations == undefined) {
        throw new Error("No designations found.");
      }
      return designations.map((designation) => {
        return transformDesignation(designation);
      });
    } catch (err) {
      throw err;
    }
  },
  designation: async (args) => {
    try {
      const designation = await Designation.findOne({ _id: args._id });
      if (designation == undefined) {
        throw new Error("No designation found.");
      }
      return transformDesignation(designation);
    } catch (err) {
      throw err;
    }
  },
  createDesignation: async (args) => {
    try {
      const designation = new Designation({
        name: args.designationInput.name,
      });

      let createdDesignation;
      try {
        const result = await designation.save();
        createdDesignation = transformDesignation(result);
      } catch (err) {
        throw err;
      }
      return createdDesignation;
    } catch (err) {
      throw err;
    }
  },
  updateDesignation: async (args) => {
    try {
      const designation = await Designation.find({ _id: args._id });
      if (designation == undefined) {
        throw new Error("No designation found.");
      }
      let designationUpdated;
      try {
        designationUpdated = await Designation.findOneAndUpdate(
          { _id: args._id },
          { $set: { name: args.name } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformDesignation(designationUpdated);
    } catch (err) {
      throw err;
    }
  },
  deleteDesignation: async (args) => {
    try {
      const designation = await Designation.find({ _id: args._id });
      if (designation == undefined) {
        throw new Error("No designation found.");
      }
      let designationDelete;
      try {
        designationDelete = await Designation.findByIdAndDelete(args._id);
        return transformDesignation(designationDelete);
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  },
};
