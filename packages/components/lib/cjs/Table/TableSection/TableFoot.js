"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFoot = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tableSection = require("./tableSection");

var _templateObject;

var TableFoot = _styledComponents["default"].tbody.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TableFoot",
  componentId: "sc-c49038-0"
}).attrs(function (_ref) {
  var _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign;
  return {
    textAlign: textAlign
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _tableSection.tableSectionCSS);

exports.TableFoot = TableFoot;
//# sourceMappingURL=TableFoot.js.map