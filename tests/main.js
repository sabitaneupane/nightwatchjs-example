var extend = function (target) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function (source) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  });
  return target;
};


var urlLoad = require("./main/loadSite.js");
module.exports = extend(module.exports, urlLoad);


