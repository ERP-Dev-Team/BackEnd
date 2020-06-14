const mmRequisition = require("../../models/mmrequisition");

const { transformmmRequisition } = require("./merge");

module.exports = {
  mmrequisitions: async () => {
    try {
      const mmrequisitions = await mmRequisition.find();
      return mmrequisitions.map((mmrequisition) => {
        return transformmmRequisition(mmrequisition);
      });
    } catch (err) {
      throw err;
    }
  },
  createmmRequisition: async (args) => {
    try {
      const mmrequisition = new mmRequisition({
        status: args.mmrequisitionInput.status,
        createdByUser: args.mmrequisitionInput.createdByUser,
        camp: args.mmrequisitionInput.camp,
        description: args.mmrequisitionInput.description,
        items: args.mmrequisitionInput.items,
        appovalsNeeded: args.mmrequisitionInput.appovalsNeeded,
      });

      let createdmmRequisition;
      try {
        const result = await mmrequisition.save();
        createdmmRequisition = transformmmRequisition(result);
      } catch (err) {
        throw err;
      }
      return createdmmRequisition;
    } catch (err) {
      throw err;
    }
  },
  updatemmRequisition: async (args) => {
    try {
      const mmrequisition = await mmRequisition.find({ _id: args._id });
      if (mmrequisition == undefined) {
        throw new Error("No Material Managemnt Requisition found.");
      }
      let mmRequisitionUpdated;
      try {
        mmRequisitionUpdated = await mmRequisition
          .findOneAndUpdate(
            { _id: args._id },
            {
              $set: {
                camp: args.camp,
                description: args.description,
                items: args.items,
              },
            },
            { new: true } //returns new document else will return document before update
          )
          .exec();
      } catch (err) {
        throw err;
      }
      return transformmmRequisition(mmRequisitionUpdated);
    } catch (err) {
      throw err;
    }
  },
};
