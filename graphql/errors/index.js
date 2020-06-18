const FormatError = require("easygraphql-format-error");
const formatError = new FormatError([
  {
    name: "INVALID_LOGIN",
    message: "Invalid username or password",
    statusCode: 400,
  },
]);
module.exports = { formatError, FormatError };
