const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    caved: {
      type: Schema.Types.ObjectId,
      ref: "Caved",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Module", moduleSchema);
