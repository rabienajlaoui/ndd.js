var path = require("path");
var mymodule = require("./mymodule");
var dir = process.argv[2];
var filterExtension = process.argv[3];

var callback = function (err, list) {
  if (err) throw err;
  list.forEach(function (file) {
    console.log(file);
  });
};

mymodule(dir, filterExtension, callback);
var fs = require("fs");
var path = require("path");

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, list) {
    if (err) return callback(err);
    else {
      list = list.filter(function (file) {
        if (path.extname(file) === "." + extension) return true;
      });
      return callback(null, list);
    }
  });
};
