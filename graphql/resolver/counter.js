const Counter = require("../../models/counter");

module.exports = {
  counters: async () => {
    try {
      const counters = await Counter.find();
      if (counters == undefined) {
        throw new Error("No counters found.");
      }
      return counters.map((counter) => {
        return counter;
      });
    } catch (err) {
      throw err;
    }
  },
  getNextCounterValue: async (counterName) => {
    try {
      var counter = undefined;
      try {
        const counterNew = new Counter({
          name: counterName,
          value: 0,
        });
        counter = await counterNew.save();
      } catch (err) {
        counter = await Counter.findOne({ name: counterName });
      }
      const updatedCount = counter._doc.value + 1;
      counter = await Counter.findOneAndUpdate(
        { name: counterName },
        {
          $set: {
            value: updatedCount,
          },
        },
        { new: true } //returns new document else will return document before update
      ).exec();

      return counter;
    } catch (err) {
      throw err;
    }
  },
};
