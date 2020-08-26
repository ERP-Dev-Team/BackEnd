var multer = require('multer');
const fs = require("fs"); 
const path = require("path"); 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
         var date = new Date();
         var path = `${process.env.ATTENDANCE_PHOTO_PATH}` + date.getDate() + `-` + (date.getMonth() + 1) + `-` + date.getFullYear()+`/`;
         fs.mkdirSync(path, { recursive: true });
        cb(null, path);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

exports.storageEngine = storage;