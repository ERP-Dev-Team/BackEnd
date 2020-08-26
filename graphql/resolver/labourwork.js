const LabourWork = require("../../models/labourwork");

const { transformLabourWork } = require("./merge");

module.exports = {
    labourwork: async (args) => {
        try {
            const labourwork = await LabourWork.findOne({ _id: args._id });
            if (labourwork == undefined) {
                throw new Error("No labour work found.");
            }
            return transformLabourWork(labourwork);
        } catch (err) {
            throw err;
        }
    },
    createLabourWork: async (args) => {
        try {

            const labourWork = new LabourWork({
                quantity: args.labourWorkInput.quantity,
                labour: args.labourWorkInput.labour,
                loginPhoto: args.labourWorkInput.loginPhoto,
                logoutPhoto: args.labourWorkInput.logoutPhoto,
                loginLatitude: args.labourWorkInput.loginLatitude,
                loginLongitude: args.labourWorkInput.loginLongitude,
                logoutLatitude: args.labourWorkInput.logoutLatitude,
                logoutLongitude: args.labourWorkInput.logoutLongitude,
            });

            let createdLabourWork;
            try {
                const result = await labourWork.save();
                createdLabourWork = transformLabourWork(result);
            } catch (err) {
                throw err;
            }
            return createdLabourWork;
        } catch (err) {
            throw err;
        }
    },
    deleteLabourWork: async (args) => {
        try {
            const labourWork = await LabourWork.find({ _id: args._id });
            if (labourWork == undefined) {
                throw new Error("No labour work found.");
            }
            let labourWorkDelete;
            try {
                labourWorkDelete = await LabourWork.findByIdAndDelete(args._id);
                return transformLabourWork(labourWorkDelete);
            } catch (err) {
                throw err;
            }
        } catch (err) {
            throw err;
        }
    },
};
