const { mapReduce } = require("../models/unit");

function createHashmap(values) {
    var hashMap = new Map();
    try {
        for (var i = 0; i < values.length; i++) {
            hashMap.set(values[i], i);
        }
    } catch (err) {
        throw err;
    }
    return hashMap;
}

function extractAttendnaceRelativePath(path) {
    if (path) {
        var slugs = path.split('/');
        if (slugs) {
            for (var i = 0; i < slugs.length; i++) {
                if (slugs[i] === 'erp') {
                    if (slugs[i + 1] === 'images') {
                        return slugs[i + 2] + '/' + slugs[i + 3];
                    }
                }
            }
        } else {
            throw Error("unable to extract path slugs");
        }
    } else {
        throw Error("path not defined");
    }
}



exports.createHashmap = createHashmap;
exports.extractAttendnaceRelativePath = extractAttendnaceRelativePath;