const Camp = require("../../models/camp");

const { transformCamp } = require("./merge");

module.exports = {
  camps: async () => {
    try {
      const camps = await Camp.find();
      return camps.map((camp) => {
        return transformCamp(camp);
      });
    } catch (err) {
      throw err;
    }
  },
  camp: async (args) => {
    try {
      const camp = await Camp.findOne({ _id: args._id });
      if (camp == undefined) {
        throw new Error("No camp found.");
      }
      return transformCamp(camp);
    } catch (err) {
      throw err;
    }
  },
  createCamp: async (args) => {
    try {
      const camp = new Camp({
        name: args.campInput.name,
        status: args.campInput.status,
        project: args.campInput.project,
        address: args.campInput.address,
        startDate: args.campInput.startDate,
        endDate: args.campInput.endDate,
      });

      let createdCamp;
      try {
        const result = await camp.save();
        createdCamp = transformCamp(result);
      } catch (err) {
        throw err;
      }
      return createdCamp;
    } catch (err) {
      throw err;
    }
  },
  updateCamp: async (args) => {
    try {
      const camp = await Camp.find({ _id: args._id });
      if (camp == undefined) {
        throw new Error("No camp found.");
      }
      let campUpdated;
      try {
        campUpdated = await Camp.findOneAndUpdate(
          { _id: args._id },
          {
            $set: {
              name: args.name,
              status: args.status,
              project: args.project,
              address: args.address,
              startDate: args.startDate,
              endDate: args.endDate,
            },
          },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformCamp(campUpdated);
    } catch (err) {
      throw err;
    }
  },
  deleteCamp: async (args) => {
    try {
      const camp = await Camp.find({ _id: args._id });
      if (camp == undefined) {
        throw new Error("No camp found.");
      }
      let campDelete;
      try {
        let campDelete = await Camp.findByIdAndDelete(args._id);
        return transformCamp(campDelete);
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  },
};
