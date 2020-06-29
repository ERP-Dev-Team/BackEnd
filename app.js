const express = require("express");
const bodyParser = require("body-parser");
const graphQlHttp = require("express-graphql");
const mongoose = require("mongoose");
const app = express();
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolver/index");
const isAuth = require("./middleware/isAuth");
const cors = require("cors");
const { formatError, FormatError } = require("./graphql/errors/index");
const Module = require("./models/module");
const Caved = require("./models/caved");
const User = require("./models/user");
const { transformModule } = require("./graphql/resolver/merge");
const errorName = formatError.errorName;

app.use(cors());
app.use(bodyParser.json());
app.use(isAuth);
app.use(
  "/api",
  graphQlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
    context: { errorName },
    formatError: (err) => {
      return formatError.getError(err);
    },
  })
);

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useFindAndModify: false }
  )
  .then(async () => {
    app.listen(3000);
    initModules();
  })
  .catch((err) => {
    console.log(err);
  });

async function initModules() {
  const modulesList = [
    "PROJECT",
    "CAMP",
    "ROLE",
    "ITEM",
    "UNIT",
    "DESIGNATION",
    "VEHICLE",
    "SUPPLIER",
    "MMREQUISITION",
  ];
  modulesList.forEach(async (moduleName) => {
    await createModule(moduleName);
  });
}

async function createModule(moduleName) {
  try {
    const moduledb = await Module.findOne({ name: moduleName });
    if (!moduledb) {
      var caved = new Caved();
      caved = await caved.save();
      const module = new Module({
        name: moduleName,
        caved: caved._doc._id,
      });

      let createdModule;
      try {
        const result = await module.save();
        createdModule = transformModule(result);
      } catch (err) {
        throw err;
      }
      setModuleAllowedForAdmin(createdModule._id);
      return createdModule;
    }
  } catch (err) {
    throw err;
  }
}

async function setModuleAllowedForAdmin(_id) {
  var user = await User.findOne({ userName: "admin" });
  if (user) {
    user._doc.modulesAllowed.push(_id);
    try {
      await user.save();
    } catch (err) {
      throw err;
    }
  }
}
