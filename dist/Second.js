"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Terms = _interopRequireDefault(require("./Terms"));
require("./App.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Make sure to import the CSS file

const Second = () => {
  const [showTerms, setShowTerms] = (0, _react.useState)(false);
  const handleTermsClick = () => {
    setShowTerms(prevShowTerms => !prevShowTerms);
  };
  const closeModal = () => {
    setShowTerms(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "second"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "Title"
  }, "Bluebook Service with Pick & Drop"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "terms",
    onClick: handleTermsClick
  }, "Terms and Condition"), showTerms && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement(_Terms.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "term-close"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button",
    onClick: closeModal
  }, "Close")))), /*#__PURE__*/_react.default.createElement("p", {
    className: "note"
  }, "Note: Customer Support: 01-5970053 WhatsApp/Viber (Chat only): 9801890083. This Service is only for Kathmandu Valley"));
};
var _default = exports.default = Second;