const mmInternalIndent = require("../../models/mminternalindent");

const { transformmmInternalIndent } = require("./merge");
const { getNextCounterValue } = require("./counter");

module.exports = {
  mminternalindents: async () => {
    try {
      const mminternalindents = await mmInternalIndent.find();
      return mminternalindents.map((mminternalindent) => {
        return transformmmInternalIndent(mminternalindent);
      });
    } catch (err) {
      throw err;
    }
  },
  createmmInternalIndent: async (args) => {
    try {
      var newIndentNumber = await getNextCounterValue(
        "mminternalindents.indentNumber"
      );
      const mminternalindent = new mmInternalIndent({
        status: args.mminternalIndentInput.status,
        createdByUser: args.mminternalIndentInput.createdByUser,
        indentNumber: newIndentNumber._doc.value,
        camp: args.mminternalIndentInput.camp,
        items: args.mminternalIndentInput.items,
        appovalsNeeded: args.mminternalIndentInput.appovalsNeeded,
        requisition: args.mminternalIndentInput.requisition,
      });

      let createdmmInternalIndent;
      try {
        const result = await mminternalindent.save();
        createdmmInternalIndent = transformmmInternalIndent(result);
      } catch (err) {
        throw err;
      }
      return createdmmInternalIndent;
    } catch (err) {
      throw err;
    }
  },
  updatemmInternalIndent: async (args) => {
    try {
      const mminternalindent = await mmInternalIndent.find({ _id: args._id });
      if (mminternalindent == undefined) {
        throw new Error("No Material Managemnt Internal Indent found.");
      }
      let mmInternalIndentUpdated;
      try {
        mmInternalIndentUpdated = await mmInternalIndent
          .findOneAndUpdate(
            { _id: args._id },
            {
              $set: {
                status: args.status,
                camp: args.camp,
                items: args.items,
              },
            },
            { new: true } //returns new document else will return document before update
          )
          .exec();
      } catch (err) {
        throw err;
      }
      return transformmmInternalIndent(mmInternalIndentUpdated);
    } catch (err) {
      throw err;
    }
  },
};
