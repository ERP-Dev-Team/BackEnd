const Labour = require("../../models/labour");

const { transformLabour } = require("./merge");

module.exports = {
    labourers: async () => {
        try {
            const labourers = await Labour.find();
            if (labourers == undefined) {
                throw new Error("No labourers found.");
            }
            return labourers.map((labour) => {
                return transformLabour(labour);
            });
        } catch (err) {
            throw err;
        }
    },
    labour: async (args) => {
        try {
            const labour = await Labour.findOne({ _id: args._id });
            if (labour == undefined) {
                throw new Error("No labour found.");
            }
            return transformLabour(labour);
        } catch (err) {
            throw err;
        }
    },
    createLabour: async (args) => {
        try {

            const labour = new Labour({
                supplier: args.labourInput.supplier,
                name: args.labourInput.name,
                idPhotoLocation: args.labourInput.idPhotoLocation,
                camp: args.labourInput.camp,
                wage: args.labourInput.wage,
                type: args.labourInput.type,
            });

            let createdLabour;
            try {
                const result = await labour.save();
                createdLabour = transformLabour(result);
            } catch (err) {
                throw err;
            }
            return createdLabour;
        } catch (err) {
            throw err;
        }
    },
    updateLabour: async (args) => {
        try {
            const labour = await Labour.find({ _id: args._id });
            if (labour == undefined) {
                throw new Error("No labour found.");
            }
            let labourUpdated;
            try {
                labourUpdated = await Labour.findOneAndUpdate(
                    { _id: args._id },
                    {
                        $set: {
                            name: args.labourEditInput.name,
                            idPhotoLocation: args.labourEditInput.idPhotoLocation,
                            camp: args.labourEditInput.camp,
                            wage: args.labourEditInput.wage,
                            type: args.labourEditInput.type,
                        },
                    },
                    { new: true } //returns new document else will return document before update
                ).exec();
            } catch (err) {
                throw err;
            }
            return transformLabour(labourUpdated);
        } catch (err) {
            throw err;
        }
    },
    deleteLabour: async (args) => {
        try {
            const labour = await Labour.find({ _id: args._id });
            if (labour == undefined) {
                throw new Error("No labour found.");
            }
            let labourDelete;
            try {
                labourDelete = await Labour.findByIdAndDelete(args._id);
                return transformLabour(labourDelete);
            } catch (err) {
                throw err;
            }
        } catch (err) {
            throw err;
        }
    },
};
