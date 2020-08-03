const Device = require("../../models/device");

const { transformDevice } = require("./merge");

module.exports = {
    devices: async () => {
        try {
            const devices = await Device.find();
            return devices.map((device) => {
                return transformDevice(device);
            });
        } catch (err) {
            throw err;
        }
    },
    device: async (args) => {
        try {
            const device = await Device.findOne({ _id: args._id });
            if (device == undefined) {
                throw new Error("No device found.");
            }
            return transformDevice(device);
        } catch (err) {
            throw err;
        }
    },
    createDevice: async (args) => {
        try {
            const device = new Device({
                make: args.deviceInput.make,
                model: args.deviceInput.model,
                cellNumber: args.deviceInput.cellNumber,
                IMEI: args.deviceInput.IMEI,
                userAssigned: args.deviceInput.userAssigned,
            });

            let createdDevice;
            try {
                const result = await device.save();
                createdDevice = transformDevice(result);
            } catch (err) {
                throw err;
            }
            return createdDevice;
        } catch (err) {
            throw err;
        }
    },
    updateDevice: async (args) => {
        try {
            const device = await Device.find({ _id: args._id });
            if (device == undefined) {
                throw new Error("No device found.");
            }
            let deviceUpdated;
            try {
                deviceUpdated = await Device.findOneAndUpdate(
                    { _id: args._id },
                    {
                        $set: {
                            make: args.editDeviceInput.make,
                            model: args.editDeviceInput.model,
                            OS: args.editDeviceInput.OS,
                            upTime: args.editDeviceInput.upTime,
                            cellNumber: args.editDeviceInput.cellNumber,
                            lastUsedUser: args.editDeviceInput.lastUsedUser,
                            networkName: args.editDeviceInput.networkName,
                            networkType: args.editDeviceInput.networkType,
                            networkStrength: args.editDeviceInput.networkStrength,
                            batteryPercentage: args.editDeviceInput.batteryPercentage,
                            lastKnownLatitude: args.editDeviceInput.lastKnownLatitude,
                            lastKnownLongitude: args.editDeviceInput.lastKnownLongitude,
                        },
                    },
                    { new: true } //returns new document else will return document before update
                ).exec();
            } catch (err) {
                throw err;
            }
            return transformDevice(deviceUpdated);
        } catch (err) {
            throw err;
        }
    },
    deleteDevice: async (args) => {
        try {
            const device = await Device.find({ _id: args._id });
            if (device == undefined) {
                throw new Error("No device found.");
            }
            let deviceDelete;
            try {
                deviceDelete = await Device.findByIdAndDelete(args._id);
                return transformDevice(deviceDelete);
            } catch (err) {
                throw err;
            }
        } catch (err) {
            throw err;
        }
    },
};
