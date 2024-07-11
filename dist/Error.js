"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Error = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "error-heading"
  }, "404"), /*#__PURE__*/_react.default.createElement("p", {
    className: "lost"
  }, "Oh no, it seems you're lost ! \uD83E\uDD7A"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/",
    style: {
      textDecoration: 'none'
    }
  }, " ", /*#__PURE__*/_react.default.createElement("button", {
    className: "error-btns"
  }, "Go Back to Home")));
};
var _default = exports.default = Error;