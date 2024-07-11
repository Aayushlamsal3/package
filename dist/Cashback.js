"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Cashback = _interopRequireDefault(require("./Cashback.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Cashback = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _Cashback.default,
    alt: "",
    className: "bluebook-img"
  }));
};
var _default = exports.default = Cashback;