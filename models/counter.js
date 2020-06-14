const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const counterSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    value: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Counter", counterSchema);
