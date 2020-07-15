const { mapReduce } = require("../models/unit");

function createHashmap(values) {
    var hashMap = new Map();
    try {
        for (var i = 0; i < values.length; i++) {
            hashMap.set(values[i],i);
        }
    } catch (err) {
        throw err;
    }
    return hashMap;
}

exports.createHashmap = createHashmap;