"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showRowTotals = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _excluded = ["hide_row_totals"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var showRowTotals = function showRowTotals(_ref) {
  var config = _ref.config,
      data = _ref.data,
      fields = _ref.fields;
  var _config$hide_row_tota = config.hide_row_totals,
      hide_row_totals = _config$hide_row_tota === void 0 ? false : _config$hide_row_tota,
      restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var show_row_totals = !hide_row_totals;
  return {
    config: _objectSpread({
      show_row_totals: show_row_totals
    }, restConfig),
    data: data,
    fields: fields
  };
};

exports.showRowTotals = showRowTotals;
//# sourceMappingURL=showRowTotals.js.map