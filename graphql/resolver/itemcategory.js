const ItemCategory = require("../../models/itemcategory");

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
};
