"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Legend = require("./Legend");

Object.keys(_Legend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Legend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Legend[key];
    }
  });
});
//# sourceMappingURL=index.js.map