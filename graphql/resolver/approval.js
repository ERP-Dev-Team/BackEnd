const Approval = require("../../models/approval");

const { transformApproval } = require("./merge");

module.exports = {
  approval: async (args, req) => { 
    try{
      try {
        const approval = await Approval.findOne({ _id: args._id });
        if (approval == undefined) {
            throw new Error("No approval found.");
        }
        return transformApproval(approval);
    } catch (err) {
        throw err;
    }
    }catch(err){
      throw err;
    }
  },
  createApproval: async (args, req) => {
    try {
      const approval = new Approval({
        role: args.approvalInput.role,
        note: args.approvalInput.note,
        camp: args.approvalInput.camp,
        isApproved: args.approvalInput.isApproved,
      });

      let createdApproval;
      try {
        const result = await approval.save();
        createdApproval = transformApproval(result);
      } catch (err) {
        throw err;
      }
      return createdApproval;
    } catch (err) {
      throw err;
    }
  },
  updateApproval: async (args, req) => {
    try {
      const approval = await Approval.find({ _id: args._id });
      if (approval == undefined) {
        throw new Error("No Approval found.");
      }
      let approvalUpdated;
      try {
        approvalUpdated = await Approval.findOneAndUpdate(
          { _id: args._id },
          {
            $set: {
              note: args.note,
              isApproved: args.isApproved,
            },
          },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformApproval(approvalUpdated);
    } catch (err) {
      throw err;
    }
  },
};
