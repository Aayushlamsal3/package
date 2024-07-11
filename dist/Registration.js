"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Registration = _ref => {
  var _location$state, _response_detail$tota;
  let {
    company
  } = _ref;
  const location = (0, _reactRouterDom.useLocation)();
  if (!((_location$state = location.state) !== null && _location$state !== void 0 && _location$state.response_detail)) {
    window.location.replace("/");
  }
  const {
    response_detail,
    hl_service_log
  } = location.state;
  (0, _react.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "registration"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "Invoice"
  }, "Invoice"), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Particular"), /*#__PURE__*/_react.default.createElement("th", null, "Amount"))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Unpaid Tax"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.unpaid_tax)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Unpaid Tax Fine"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.unpaid_tax_fine_amt)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Tax(Current Year)"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.tax_cy)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Tax Fine(Current Year)"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.tax_fine_cy)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Renewal Charge"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.renewal_charge)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Renewal Fine"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.renewal_fine)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Model Tax"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.modal_tax)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Insurance Amount"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.insurance)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Service Charge"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.service_charge)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Total Amount"), /*#__PURE__*/_react.default.createElement("td", null, "Rs. ", response_detail.total_amount)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "cont-reg-div"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: {
      pathname: "/form",
      state: {
        ins: response_detail.insurance,
        total_amount: (_response_detail$tota = response_detail === null || response_detail === void 0 ? void 0 : response_detail.total_amount) !== null && _response_detail$tota !== void 0 ? _response_detail$tota : "",
        hl_service_log: hl_service_log
      }
    },
    className: "cont-registration-btn"
  }, "Next"))));
};
var _default = exports.default = Registration;