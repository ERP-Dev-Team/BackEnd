const Role = require("../../models/role");

const { transformRole } = require("./merge");

module.exports = {
  roles: async () => {
    try {
      const roles = await Role.find();
      if (roles == undefined) {
        throw new Error("No roles found.");
      }
      return roles.map((role) => {
        return transformRole(role);
      });
    } catch (err) {
      throw err;
    }
  },
  createRole: async (args) => {
    try {
      const role = new Role({
        name: args.roleInput.name,
      });

      let createdRole;
      try {
        const result = await role.save();
        createdRole = transformRole(result);
      } catch (err) {
        throw err;
      }
      return createdRole;
    } catch (err) {
      throw err;
    }
  },
  updateRole: async (args) => {
    try {
      const role = await Role.find({ _id: args._id });
      if (role == undefined) {
        throw new Error("No role found.");
      }
      let roleUpdated;
      try {
        roleUpdated = await Role.findOneAndUpdate(
          { _id: args._id },
          { $set: { name: args.name } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformRole(roleUpdated);
    } catch (err) {
      throw err;
    }
  },
};
