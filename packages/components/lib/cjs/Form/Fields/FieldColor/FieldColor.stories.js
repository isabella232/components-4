"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Required = exports.FloatingLabelNoDefaultValue = exports.FloatingLabel = exports.ControlledFloatingLabelNoValue = exports.ControlledFloatingLabel = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _componentsProviders = require("@looker/components-providers");

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _FieldColor = require("./FieldColor");

var _excluded = ["externalLabel", "initialValue"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldColor.FieldColor,
  title: 'FieldColor'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var _ref$externalLabel = _ref.externalLabel,
      externalLabel = _ref$externalLabel === void 0 ? true : _ref$externalLabel,
      initialValue = _ref.initialValue,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(initialValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(e) {
    return setValue(e.currentTarget.value);
  };

  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_FieldColor.FieldColor, (0, _extends2["default"])({}, args, {
    value: value,
    onChange: handleChange
  })));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  initialValue: 'purple',
  label: 'Basic'
};
var Required = Template.bind({});
exports.Required = Required;
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
var FloatingLabel = Template.bind({});
exports.FloatingLabel = FloatingLabel;
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
var FloatingLabelNoDefaultValue = Template.bind({});
exports.FloatingLabelNoDefaultValue = FloatingLabelNoDefaultValue;
FloatingLabelNoDefaultValue.args = {
  externalLabel: false,
  initialValue: undefined,
  label: 'Example'
};

var ControlledFloatingLabelNoValue = function ControlledFloatingLabelNoValue() {
  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      blue = _useState4[0],
      setBlue = _useState4[1];

  var onClickSetColorToBlue = function onClickSetColorToBlue() {
    return setBlue('blue');
  };

  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(_Button.Button, {
    onClick: onClickSetColorToBlue
  }, "Blue"), _react["default"].createElement(_FieldColor.FieldColor, {
    externalLabel: false,
    label: "Controlled",
    value: blue
  }));
};

exports.ControlledFloatingLabelNoValue = ControlledFloatingLabelNoValue;
ControlledFloatingLabelNoValue.parameters = {
  storyshots: {
    disable: true
  }
};

var ControlledFloatingLabel = function ControlledFloatingLabel() {
  var _useState5 = (0, _react.useState)('white'),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      blue = _useState6[0],
      setBlue = _useState6[1];

  var onClickSetColorToBlue = function onClickSetColorToBlue() {
    return setBlue('blue');
  };

  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(_Button.Button, {
    onClick: onClickSetColorToBlue
  }, "Blue"), _react["default"].createElement(_FieldColor.FieldColor, {
    externalLabel: false,
    label: "Controlled",
    value: blue
  }));
};

exports.ControlledFloatingLabel = ControlledFloatingLabel;
ControlledFloatingLabel.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldColor.stories.js.map