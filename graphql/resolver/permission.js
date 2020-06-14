const Permission = require('../../models/permission');

const { transformPermission } = require('./merge');

module.exports = {

    permissions: async () => {
        try {
          const permissions = await Permission.find();
          return permissions.map(permission => {
            return transformPermission(permission);
          });
        } catch (err) {
          throw err;
        }
      },
      createPermission: async(args,req) => {
        try{
          const permission = new Permission({
              user:args.permissionInput.user,
              worktype:args.permissionInput.worktype,
              supplier:args.permissionInput.supplier,
              suppliertype:args.permissionInput.suppliertype,
              item:args.permissionInput.item,
              vehicletype:args.permissionInput.vehicletype,
              role:args.permissionInput.role,
              itemcategory:args.permissionInput.itemcategory,            
            });
          
            let createdPermission;
            try {
              const result = await permission.save();
              createdPermission = transformPermission(result);            
            }catch(err){
                throw err;
            }
            return createdPermission;
        }catch(err){
            throw err;
        }
    }
}