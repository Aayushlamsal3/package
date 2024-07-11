"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PaymentCallback = () => {
  const location = (0, _reactRouterDom.useLocation)();
  const history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(() => {
    const params = new URLSearchParams(location.search);
    async function savePaymentConfirmation() {
      try {
        const response = await _axios.default.get("http://localhost:3005/api/payment-confirmation", {
          params: {
            pidx: params.get("pidx"),
            transaction_id: params.get("transaction_id"),
            tidx: params.get("tidx"),
            amount: params.get("amount"),
            mobile: params.get("mobile"),
            status: params.get("status"),
            purchase_order_id: params.get("purchase_order_id"),
            purchase_order_name: params.get("purchase_order_name")
          }
        });
        if (response.data.success) {
          history.push("/payment-success");
        } else {
          history.push("/payment-failed");
        }
      } catch (error) {
        console.error("Payment Confirmation Error:", error);
        history.push("/payment-failed");
      }
    }
    savePaymentConfirmation();
  }, [location, history]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Processing your payment"));
};
var _default = exports.default = PaymentCallback;