"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("./Box"));
var _reactRouterDom = require("react-router-dom");
var _Fourth = _interopRequireDefault(require("./Fourth"));
var _Error = _interopRequireDefault(require("./Error"));
var _Sixth = _interopRequireDefault(require("./Sixth"));
var _FinalPage = _interopRequireDefault(require("./FinalPage"));
var _Citizenship = _interopRequireDefault(require("./Citizenship1"));
var _PaymentCallback = _interopRequireDefault(require("./PaymentCallback"));
var _PaymentSuccess = _interopRequireDefault(require("./PaymentSuccess"));
var _PaymentFailed = _interopRequireDefault(require("./PaymentFailed"));
var _PaymentConfirmation = _interopRequireDefault(require("./PaymentConfirmation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const App = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    component: _Box.default,
    exact: true
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/registration",
    component: _Fourth.default,
    exact: true
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/form",
    component: _Sixth.default,
    exact: true
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/final",
    component: _FinalPage.default,
    exact: true
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/insurance",
    component: _Citizenship.default,
    exact: true
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/payment-callback",
    component: _PaymentCallback.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/payment-success",
    component: _PaymentSuccess.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/payment-failed",
    component: _PaymentFailed.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/payment-confirmation",
    component: _PaymentConfirmation.default
  }))));
};
var _default = exports.default = App;