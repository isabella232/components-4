"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruncateHeader = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@looker/components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var renderFor = ['table'];

var TruncateHeader = function TruncateHeader(props) {
  var config = props.config,
      onConfigChange = props.onConfigChange;
  var truncate_header = config.truncate_header;

  if (!renderFor.includes(config.type)) {
    return null;
  }

  var handleChange = function handleChange(e) {
    var _ref = e.target,
        checked = _ref.checked;

    var draft = _objectSpread(_objectSpread({}, config), {}, {
      truncate_header: checked
    });

    onConfigChange(draft);
  };

  return _react["default"].createElement(_components.FieldCheckbox, {
    label: "Truncate header",
    checked: truncate_header,
    onChange: handleChange
  });
};

exports.TruncateHeader = TruncateHeader;
//# sourceMappingURL=TruncateHeader.js.map