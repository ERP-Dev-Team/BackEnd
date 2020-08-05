const DPR = require("../../models/dpr");

const { transformDPR } = require("./merge");

module.exports = {
    dprs: async () => {
        try {
            const dprs = await DPR.find();
            if (dprs == undefined) {
                throw new Error("No dprs found.");
            }
            return dprs.map((item) => {
                return transformDPR(item);
            });
        } catch (err) {
            throw err;
        }
    },
    dpr: async (args) => {
        try {
            const dpr = await DPR.findOne({ _id: args._id });
            if (dpr == undefined) {
                throw new Error("No dpr found.");
            }
            return transformDPR(dpr);
        } catch (err) {
            throw err;
        }
    },
    createDPR: async (args) => {
        try {

            const dpr = new DPR({
                camp: args.dprInput.camp,
                workType: args.dprInput.workType,
                workDescription: args.dprInput.workDescription,
                length: args.dprInput.length,
                breadth: args.dprInput.breadth,
                height: args.dprInput.height,
                cummulative: args.dprInput.cummulative,
                createdBy: args.dprInput.createdBy,
                photoLocation: args.dprInput.photoLocation,
                locationLatitude: args.dprInput.locationLatitude,
                locationLongitude: args.dprInput.locationLongitude,
                approvalsNeeded: args.dprInput.approvalsNeeded,
            });

            let createdDPR;
            try {
                const result = await dpr.save();
                createdDPR = transformDPR(result);
            } catch (err) {
                throw err;
            }
            return createdDPR;
        } catch (err) {
            throw err;
        }
    },
    updateDPR: async (args) => {
        try {
            const dpr = await DPR.find({ _id: args._id });
            if (dpr == undefined) {
                throw new Error("No dpr found.");
            }
            let dprUpdated;
            try {
                dprUpdated = await DPR.findOneAndUpdate(
                    { _id: args._id },
                    {
                        $set: {
                            camp: args.dprEditInput.camp,
                            workType: args.dprEditInput.workType,
                            workDescription: args.dprEditInput.workDescription,
                            length: args.dprEditInput.length,
                            breadth: args.dprEditInput.breadth,
                            height: args.dprEditInput.height,
                            cummulative: args.dprEditInput.cummulative,
                            createdBy: args.dprEditInput.createdBy,
                            photoLocation: args.dprEditInput.photoLocation,
                            locationLatitude: args.dprEditInput.locationLatitude,
                            locationLongitude: args.dprEditInput.locationLongitude,
                        },
                    },
                    { new: true } //returns new document else will return document before update
                ).exec();
            } catch (err) {
                throw err;
            }
            return transformDPR(dprUpdated);
        } catch (err) {
            throw err;
        }
    },
    deleteDPR: async (args) => {
        try {
            const dpr = await DPR.find({ _id: args._id });
            if (dpr == undefined) {
                throw new Error("No dpr found.");
            }
            let dprDelete;
            try {
                dprDelete = await Item.findByIdAndDelete(args._id);
                return transformDPR(dprDelete);
            } catch (err) {
                throw err;
            }
        } catch (err) {
            throw err;
        }
    },
};
