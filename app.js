const express = require("express");
const bodyParser = require("body-parser");
const graphQlHttp = require("express-graphql");
const mongoose = require("mongoose");
const app = express();
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolver/index");
const isAuth = require("./middleware/isAuth");
const cors = require("cors");
const Module = require("./models/module");
const Caved = require("./models/caved");
const User = require("./models/user");
const Role = require("./models/role");
const bcrypt = require("bcrypt");
const { transformModule } = require("./graphql/resolver/merge");

app.use(cors());
app.use(bodyParser.json());
app.use(isAuth);
app.use(
  "/api",
  graphQlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useFindAndModify: false }
  )
  .then(async () => {
    app.listen(3000);
    initAdmin();
    initModules();
  })
  .catch((err) => {
    console.log(err);
  });

async function initAdmin() {
  var user = await User.findOne({ userName: "admin" });
  var role = await Role.findOne({ name: "ADMIN" });
  if (!role) {
    role = new Role({
      name: "ADMIN",
    });
    try {
      role = await role.save();
    } catch (err) {
      throw err;
    }
  }
  if (!user) {
    const passwordHashed = await bcrypt.hash("admin1234", 12);
    user = new User({
      userName: "admin",
      password: passwordHashed,
      firstName: "admin",
      email: "erpadmin@skandacivicon.com",
      loginAllowed: true,
      IMEIAllowed: true,
      rolesAllowed: [role._doc._id],
    });
    try {
      user = await user.save();
    } catch (err) {
      throw err;
    }
  }
}

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
