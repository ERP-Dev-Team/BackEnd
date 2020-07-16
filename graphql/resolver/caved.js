const Caved = require('../../models/caved');

const { transformCaved } = require('./merge');

module.exports = {

  caveds: async () => {
    try {
      const caveds = await Caved.find();
      return caveds.map(caved => {
        return transformCaved(caved);
      });
    } catch (err) {
      throw err;
    }
  },
  createCaved: async (args, req) => {
    try {
      const caved = new Caved({
        create: args.cavedInput.create,
        approval: args.cavedInput.approval,
        view: args.cavedInput.view,
        edit: args.cavedInput.edit,
        delete: args.cavedInput.delete,
      });

      let createdCaved;
      try {
        const result = await caved.save();
        createdCaved = transformCaved(result);
      } catch (err) {
        throw err;
      }
      return createdCaved;
    } catch (err) {
      throw err;
    }
  },
  updateCaved: async (args) => {
    try {
      const caved = await Caved.find({ _id: args.cavedEditInput._id });
      if (caved == undefined) {
        throw new Error('No caved found.');
      }
      let cavedUpdated;
      try {
        cavedUpdated = await Caved.findOneAndUpdate(
          { "_id": args.cavedEditInput._id },
          { "$set": { create: args.cavedEditInput.create, approval: args.cavedEditInput.approval, view: args.cavedEditInput.view, edit: args.cavedEditInput.edit, delete: args.cavedEditInput.delete } },
          { "new": true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformCaved(cavedUpdated);
    } catch (err) { throw err; }
  }
}