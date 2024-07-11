"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _cashback = _interopRequireDefault(require("./cashback.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SecondImage = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _cashback.default,
    alt: "",
    className: "bluebook-img"
  }));
};
var _default = exports.default = SecondImage;