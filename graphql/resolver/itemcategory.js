const ItemCategory = require("../../models/itemcategory");
const Module = require("../../models/module");
const Role = require("../../models/role");

const { transformItemCategory } = require("./merge");

module.exports = {
  itemcategories: async () => {
    try {
      const itemcategories = await ItemCategory.find();
      if (itemcategories == undefined) {
        throw new Error("No item categories found.");
      }
      return itemcategories.map((itemcategory) => {
        return transformItemCategory(itemcategory);
      });
    } catch (err) {
      throw err;
    }
  },
  itemcategory: async (args) => {
    try {
      const itemCategory = await ItemCategory.findOne({ _id: args._id });
      if (itemCategory == undefined) {
        throw new Error("No item category found.");
      }
      return transformItemCategory(itemCategory);
    } catch (err) {
      throw err;
    }
  },
  createItemCategory: async (args) => {
    try {
      const itemcategory = new ItemCategory({
        name: args.itemCategoryInput.name,
      });

      let createdItemCategory;
      try {
        const result = await itemcategory.save();
        createdItemCategory = transformItemCategory(result);
      } catch (err) {
        throw err;
      }
      return createdItemCategory;
    } catch (err) {
      throw err;
    }
  },
  updateItemCategory: async (args) => {
    try {
      const itemCategory = await ItemCategory.find({ _id: args._id });
      if (itemCategory == undefined) {
        throw new Error("No item category found.");
      }
      let itemCategoryUpdated;
      try {
        itemCategoryUpdated = await ItemCategory.findOneAndUpdate(
          { _id: args._id },
          { $set: { name: args.name } },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformItemCategory(itemCategoryUpdated);
    } catch (err) {
      throw err;
    }
  },
  deleteItemCategory: async (args,req) => {
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

      const item = await ItemCategory.find({ _id: args._id });
      if (item == undefined) {
        throw new Error("No item category found.");
      }
      let itemDelete;
      try {
        itemDelete = await ItemCategory.findByIdAndDelete(args._id);
        return transformItemCategory(itemDelete);
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  },
};
