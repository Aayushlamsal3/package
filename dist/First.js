"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _khalti = _interopRequireDefault(require("./khalti.png"));
var _pi = require("react-icons/pi");
var _md = require("react-icons/md");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const First = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "first"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _khalti.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "Title"
  }, "Bluebook Service with Pick & Drop"), /*#__PURE__*/_react.default.createElement("div", {
    className: "p2"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_pi.PiPhoneCallFill, {
    className: "phone-icon"
  }), "01-5970053"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_md.MdMessage, {
    className: "message-icon"
  }), "bluebook@khalti.com")), /*#__PURE__*/_react.default.createElement("p", {
    className: "p3"
  }, "This service is only for Kathmandu Valley")));
};
var _default = exports.default = First;