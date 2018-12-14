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

var assertion = require("./testfile/assertion.js");
module.exports = extend(module.exports, assertion);

var setvalue = require("./testfile/setvalue.js");
module.exports = extend(module.exports, setvalue);

var keysEnter = require("./testfile/keysEnter.js");
module.exports = extend(module.exports, keysEnter);
