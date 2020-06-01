const WorkType = require("../../models/worktype");

const { transformWorkType } = require("./merge");

module.exports = {
  worktypes: async () => {
    try {
      const workTypes = await WorkType.find();
      return workTypes.map((workType) => {
        return transformWorkType(workType);
      });
    } catch (err) {
      throw err;
    }
  },
  createWorkType: async (args) => {
    try {
      const workType = new WorkType({
        name: args.workTypeInput.name,
        unit: args.workTypeInput.unit,
      });

      let createdWorkType;
      try {
        const result = await workType.save();
        createdWorkType = transformWorkType(result);
      } catch (err) {
        throw err;
      }
      return createdWorkType;
    } catch (err) {
      throw err;
    }
  },
  updateWorkType: async (args) => {
    try {
      const workType = await WorkType.find({ _id: args._id });
      if (workType == undefined) {
        throw new Error("No work type found.");
      }
      let workTypeUpdated;
      try {
        workTypeUpdated = await WorkType.findOneAndUpdate(
          { _id: args._id },
          { $set: { name: args.name, unit: args.unit } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformWorkType(workTypeUpdated);
    } catch (err) {
      throw err;
    }
  },
};
