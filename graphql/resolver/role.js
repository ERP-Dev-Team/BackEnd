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
  role: async (args) => {
    try {
      const role = await Role.findOne({ _id: args._id });
      if (role == undefined) {
        throw new Error("No role found.");
      }
      return transformRole(role);
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
  deleteRole: async (args, req) => {
    try {
      if (req.isAuth) {
        var rolesAllowed = req.rolesAllowed;
        var isAdmin = false;
        for (var i = 0; i < rolesAllowed.length; i++) {
          try {
            var roleDb = await Role.findById(rolesAllowed[i])
            if (roleDb) {

              if (roleDb.name == 'ADMIN') {
                isAdmin = true;
                break;
              }
            }
          } catch (err) { }
        }
        if (!isAdmin) {
          throw new Error('Not authorized');
        }
      } else {
        throw new Error('Not authorized');
      }
      const role = await Role.find({ _id: args._id });
      if (role == undefined) {
        throw new Error("No role found.");
      }
      let roleDelete;
      try {
        roleDelete = await Role.findByIdAndDelete(args._id);
        return transformRole(roleDelete);
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  },
};
