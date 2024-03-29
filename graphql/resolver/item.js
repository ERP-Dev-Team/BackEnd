const Module = require("../../models/module");
const Role = require("../../models/role");
const Item = require("../../models/item");

const { transformItem } = require("./merge");

module.exports = {
  items: async () => {
    try {
      const items = await Item.find();
      if (items == undefined) {
        throw new Error("No items found.");
      }
      return items.map((item) => {
        return transformItem(item);
      });
    } catch (err) {
      throw err;
    }
  },
  item: async (args) => {
    try {
      const item = await Item.findOne({ _id: args._id });
      if (item == undefined) {
        throw new Error("No item found.");
      }
      return transformItem(item);
    } catch (err) {
      throw err;
    }
  },
  createItem: async (args) => {
    try {
      const item = new Item({
        name: args.itemInput.name,
        description: args.itemInput.description,
        partNumber: args.itemInput.partNumber,
        unit: args.itemInput.unit,
        hsnNumber: args.itemInput.hsnNumber,
        itemCode: args.itemInput.itemCode,
        itemCategory: args.itemInput.itemCategory,
      });

      let createdItem;
      try {
        const result = await item.save();
        createdItem = transformItem(result);
      } catch (err) {
        throw err;
      }
      return createdItem;
    } catch (err) {
      throw err;
    }
  },
  updateItem: async (args) => {
    try {
      const item = await Item.find({ _id: args._id });
      if (item == undefined) {
        throw new Error("No item found.");
      }
      let itemUpdated;
      try {
        itemUpdated = await Item.findOneAndUpdate(
          { _id: args._id },
          {
            $set: {
              name: args.name,
              description: args.description,
              partNumber: args.partNumber,
              unit: args.unit,
              hsnNumber: args.hsnNumber,
              itemCode: args.itemCode,
              itemCategory: args.itemCategory,
            },
          },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformItem(itemUpdated);
    } catch (err) {
      throw err;
    }
  },
  deleteItem: async (args,req) => {
    try {
      if (req.isAuth) {
        var cavedObject = await Module.findOne({name:"ITEM"});
        if(cavedObject){
        
        var rolesAllowed = req.rolesAllowed;
        var isAdmin = false;
        for (var i = 0; i < rolesAllowed.length; i++) {
          try {
            var roleDb = await Role.findById(rolesAllowed[i])
            if (roleDb) {
              console.log(roleDb.name);
              if (roleDb.name == 'ADMIN') {
                isAdmin = true;
                break;
              }
            }
          } catch (err) { }
        }
        if (!isAdmin) {
          throw new Error('Not authorized.');
        }
      }else{
        throw new Error('Internal Error, msg: Caved not found.');
      }
      } else {
        throw new Error('Not authorized.');
      }

      const item = await Item.find({ _id: args._id });
      if (item == undefined) {
        throw new Error("No item found.");
      }
      let itemDelete;
      try {
        itemDelete = await Item.findByIdAndDelete(args._id);
        return transformItem(itemDelete);
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  },
};
