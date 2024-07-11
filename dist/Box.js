"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _BluebookService = _interopRequireDefault(require("./BluebookService"));
require("./index.css");
var _Second = _interopRequireDefault(require("./Second"));
var _First = _interopRequireDefault(require("./First"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Box = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Big-Box1"
  }, /*#__PURE__*/_react.default.createElement(_First.default, null), /*#__PURE__*/_react.default.createElement(_Second.default, null), /*#__PURE__*/_react.default.createElement(_BluebookService.default, null));
};
var _default = exports.default = Box;