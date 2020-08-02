const Attendance = require("../../models/attendance");

const { transformAttendance } = require("./merge");

module.exports = {
    attendance: async (args) => {
        try {
            const attendance = await Attendance.findOne({ _id: args._id });
            if (attendance == undefined) {
                throw new Error("No attendance found.");
            }
            return transformAttendance(attendance);
        } catch (err) {
            throw err;
        }
    },
    createAttendance: async (args) => {
        try {
            const attendance = new Attendance({
                user: args.attendanceInput.user,
                camp: args.attendanceInput.camp,
                loginTimestamp: args.attendanceInput.loginTimestamp,
                loginPhoto: args.attendanceInput.loginPhoto,
                logoutPhoto: args.attendanceInput.logoutPhoto,
                shift: args.attendanceInput.shift,
                logoutTimestamp: args.attendanceInput.logoutTimestamp,
                batta: args.attendanceInput.batta,
                workType: args.attendanceInput.workType,
                loginLatitude: args.attendanceInput.loginLatitude,
                loginLongitude: args.attendanceInput.loginLongitude,
                logoutLatitude: args.attendanceInput.logoutLatitude,
                logoutLongitude: args.attendanceInput.logoutLongitude,
                quantity: args.attendanceInput.loginPhoto,
                device: args.attendanceInput.device,
                approval: args.attendanceInput.approval,
            });

            let createdAttendance;
            try {
                const result = await attendance.save();
                createdAttendance = transformAttendance(result);
            } catch (err) {
                throw err;
            }
            return createdAttendance;
        } catch (err) {
            throw err;
        }
    },
    updateAttendance: async (args) => {
        try {
            const attendance = await Attendance.find({ _id: args._id });
            if (attendance == undefined) {
                throw new Error("No attendance found.");
            }
            let attendanceUpdated;
            try {
                attendanceUpdated = await Attendance.findOneAndUpdate(
                    { _id: args._id },
                    {
                        $set: {
                            camp: args.editAttendanceInput.camp,
                            loginTimestamp: args.editAttendanceInput.loginTimestamp,
                            loginPhoto: args.editAttendanceInput.loginPhoto,
                            logoutPhoto: args.editAttendanceInput.logoutPhoto,
                            shift: args.editAttendanceInput.shift,
                            logoutTimestamp: args.editAttendanceInput.logoutTimestamp,
                            batta: args.editAttendanceInput.batta,
                            workType: args.editAttendanceInput.workType,
                            loginLatitude: args.editAttendanceInput.loginLatitude,
                            loginLongitude: args.editAttendanceInput.loginLongitude,
                            logoutLatitude: args.editAttendanceInput.logoutLatitude,
                            logoutLongitude: args.editAttendanceInput.logoutLongitude,
                            quantity: args.editAttendanceInput.loginPhoto,
                            device: args.editAttendanceInput.device,
                        },
                    },
                    { new: true } //returns new document else will return document before update
                ).exec();
            } catch (err) {
                throw err;
            }
            return transformAttendance(attendanceUpdated);
        } catch (err) {
            throw err;
        }
    },
    deleteAttendance: async (args) => {
        try {
            const attendance = await Attendance.find({ _id: args._id });
            if (attendance == undefined) {
                throw new Error("No attendance found.");
            }
            let attendanceDelete;
            try {
                attendanceDelete = await Device.findByIdAndDelete(args._id);
                return transformAttendance(attendanceDelete);
            } catch (err) {
                throw err;
            }
        } catch (err) {
            throw err;
        }
    },
};
