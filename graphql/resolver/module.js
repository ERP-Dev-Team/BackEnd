const Module = require("../../models/module");

const { transformModule } = require("./merge");

module.exports = {
  modules: async () => {
    try {
      const modules = await Module.find();
      if (modules == undefined) {
        throw new Error("No modules found.");
      }
      return modules.map((module) => {
        return transformModule(module);
      });
    } catch (err) {
      throw err;
    }
  },
  createModule: async (args) => {
    try {
      const module = new Module({
        name: args.moduleInput.name,
        rolesAllowed: args.moduleInput.rolesAllowed
      });

      let createdModule;
      try {
        const result = await module.save();
        createdModule = transformModule(result);
      } catch (err) {
        throw err;
      }
      return createdModule;
    } catch (err) {
      throw err;
    }
  },
  updateModule: async (args) => {
    try {
      const module = await Module.find({ _id: args._id });
      if (module == undefined) {
        throw new Error("No module found.");
      }
      let moduleUpdated;
      try {
        moduleUpdated = await Module.findOneAndUpdate(
          { _id: args._id },
          { $set: { name: args.name, rolesAllowed: args.rolesAllowed  } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformModule(moduleUpdated);
    } catch (err) {
      throw err;
    }
  },
};
