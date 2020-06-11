const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemObjectSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    quantity: {
      type: Schema.Types.Number,
      required: true,
    },
    cost: {
      type: Schema.Types.Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ItemObject", itemObjectSchema);
