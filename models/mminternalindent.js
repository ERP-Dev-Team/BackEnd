const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mmInternalIndentSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["CREATED", "APPROVED"],
      required: true,
    },
    createdByUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    indentNumber: {
      type: Schema.Types.Number,
      unique: true,
      required: true,
    },
    camp: {
      type: Schema.Types.ObjectId,
      ref: "Camp",
      required: true,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "ItemObject",
      },
    ],
    requisition: {
      type: Schema.Types.ObjectId,
      ref: "mmRequisition",
      required: true,
    },
    approvalsNeeded: [
      {
        type: Schema.Types.ObjectId,
        ref: "Approval",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("mmInternalIndent", mmInternalIndentSchema);
