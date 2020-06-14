const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mmPurchaseOrderSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["CREATED", "PENDING FOR APPROVAL", "ORDER CONFIRMED"],
      required: true,
    },
    createdByUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    purchaseOrderNumber: {
      type: Schema.Types.Number,
      unique: true,
      required: true,
    },
    camp: {
      type: Schema.Types.ObjectId,
      ref: "Camp",
      required: true,
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "ItemObject",
      },
    ],
    internalIndent: {
      type: Schema.Types.ObjectId,
      ref: "mmInternalIndent",
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

module.exports = mongoose.model("mmPurchaseOrder", mmPurchaseOrderSchema);
