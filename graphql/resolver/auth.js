const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getJWTKey } = require("../../helper/private");
const { transformAuthData } = require("./merge");
var { formatError, FormatError } = require("../errors/index");
// pass the errorName on the context
const errorName = formatError.errorName;

module.exports = {
  login: async ({ userName, password }) => {
    const user = await User.findOne({ userName: userName });
    if (!user) {
      // throw new Error("User does not exist");
      throw new Error(errorName.INVALID_LOGIN);
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      // throw new Error("Password is incorrect");
      throw new Error(errorName.INVALID_LOGIN);
    }
    const token = jwt.sign(
      {
        userName: user.userName,
        superRole: user.superRole,
        designation: user.designation,
        rolesAllowed: user.rolesAllowed,
        modulesAllowed: user.modulesAllowed,
      },
      getJWTKey(),
      {
        expiresIn: "1h",
      }
    );
    return transformAuthData(user.userName, token, 1, user.modulesAllowed);
  },
};
