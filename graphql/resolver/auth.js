const User = require("../../models/user");
const Device = require("../../models/device");
const bcrypt = require("bcrypt");
const { getToken } = require("../../helper/private");
const { transformAuthData } = require("./merge");

module.exports = {
  login: async ({ userName, password, IMEI }) => {
    const user = await User.findOne({ userName: userName });
    if (!user) {
      throw new Error("User does not exist");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect");
    }
    var token = "Not intialised";
    if (IMEI) {
      const isIMEIAllowed = user.IMEIAllowed;
      if (isIMEIAllowed) {
        token = getToken(user);
      } else {
        // const device = await Device.findOne({ IMEI: IMEI });
        // if (device) {
        //   console.dir(device);
        //   const userAssignedId = device.userAssigned;
        //   if (userAssignedId+'' === user._id+'') {
            token = getToken(user);
        //   }
        // } else {
        //   throw new Error("Device not found");
        // }
      }
    } else {
      token = getToken(user);
    }

    return await transformAuthData(user.userName, token, 1, user.modulesAllowed,user.campsAllowed);
  },
};
