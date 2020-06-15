const mmPurchaseOrder = require("../../models/mmpurchaseorder");

const { transformmmPurchaseOrder } = require("./merge");
const { getNextCounterValue } = require("./counter");

module.exports = {
  mmpurchaseorders: async () => {
    try {
      const mmPurchaseOrders = await mmPurchaseOrder.find();
      return mmPurchaseOrders.map((mmPurchaseOrder) => {
        return transformmmPurchaseOrder(mmPurchaseOrder);
      });
    } catch (err) {
      throw err;
    }
  },
  createmmPurchaseOrder: async (args) => {
    try {
      var newPurchaseOrderNumber = await getNextCounterValue(
        "mmpurchaseorder.purchaseOrderNumber"
      );
      const mmpurchaseorder = new mmPurchaseOrder({
        status: args.mmpurchaseOrderInput.status,
        createdByUser: args.mmpurchaseOrderInput.createdByUser,
        purchaseOrderNumber: newPurchaseOrderNumber._doc.value,
        camp: args.mmpurchaseOrderInput.camp,
        supplier: args.mmpurchaseOrderInput.supplier,
        items: args.mmpurchaseOrderInput.items,
        appovalsNeeded: args.mmpurchaseOrderInput.appovalsNeeded,
        internalIndent: args.mmpurchaseOrderInput.internalIndent,
      });

      let createdmmPurchaseOrder;
      try {
        const result = await mmpurchaseorder.save();
        createdmmPurchaseOrder = transformmmPurchaseOrder(result);
      } catch (err) {
        throw err;
      }
      return createdmmPurchaseOrder;
    } catch (err) {
      throw err;
    }
  },
  updatemmPurchaseOrder: async (args) => {
    try {
      const mmpurchaseorder = await mmPurchaseOrder.find({ _id: args._id });
      if (mmpurchaseorder == undefined) {
        throw new Error("No material management purchase order found.");
      }
      let mmPurchaseOrderUpdated;
      try {
        mmPurchaseOrderUpdated = await mmPurchaseOrder
          .findOneAndUpdate(
            { _id: args._id },
            {
              $set: {
                status: args.status,
                camp: args.camp,
                items: args.items,
                supplier: args.supplier,
              },
            },
            { new: true } //returns new document else will return document before update
          )
          .exec();
      } catch (err) {
        throw err;
      }
      return transformmmPurchaseOrder(mmPurchaseOrderUpdated);
    } catch (err) {
      throw err;
    }
  },
};
