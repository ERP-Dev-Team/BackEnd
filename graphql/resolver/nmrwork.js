const NMRWork = require("../../models/nmrwork");

const { transformNMRWork } = require("./merge");
const { getNextCounterValue } = require("./counter");

module.exports = {
    nmrworks: async (args) => {
        try {
            const nmrWorks = await NMRWork.find({ supplier: args.supplier });
            return nmrWorks.map((nmrWork) => {
                return transformNMRWork(nmrWork);
            });
        } catch (err) {
            throw err;
        }
    },
    nmrwork: async (args) => {
        try {
            const nmrwork = await NMRWork.findOne({ _id: args._id });
            if (nmrwork == undefined) {
                throw new Error("No NMR work found.");
            }
            //console.log(JSON.stringify(nmrwork));
            return transformNMRWork(nmrwork);
        } catch (err) {
            throw err;
        }
    },
    createNMRWork: async (args) => {
        try {
            var newIndentNumber = await getNextCounterValue(
                "nmrworks.indentNumber"
              );
            const nmrWork = new NMRWork({
                supplier: args.nmrWorkInput.supplier,
                workType: args.nmrWorkInput.workType,
                remark: args.nmrWorkInput.remark,
                camp: args.nmrWorkInput.camp,
                labourInvolved: args.nmrWorkInput.labourInvolved,
                indentNumber: newIndentNumber._doc.value,
                status: args.nmrWorkInput.status,
                shift: args.nmrWorkInput.shift,
                finalCost: args.nmrWorkInput.finalCost,
                approvalsNeeded: args.nmrWorkInput.approvalsNeeded,
            });

            let createdNMRWork;
            try {
                const result = await nmrWork.save();
                createdNMRWork = transformNMRWork(result);
            } catch (err) {
                throw err;
            }
            return createdNMRWork;
        } catch (err) {
            throw err;
        }
    },
    deleteNMRWork: async (args) => {
        try {
            const nmrWork = await NMRWork.find({ _id: args._id });
            if (nmrWork == undefined) {
                throw new Error("No nmr work found.");
            }
            let nmrWorkDelete;
            try {
                nmrWorkDelete = await NMRWork.findByIdAndDelete(args._id);
                return transformNMRWork(nmrWorkDelete);
            } catch (err) {
                throw err;
            }
        } catch (err) {
            throw err;
        }
    },
};
