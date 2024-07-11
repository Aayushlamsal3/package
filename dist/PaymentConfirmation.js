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
const PaymentConfirmation = () => {
  const location = (0, _reactRouterDom.useLocation)();
  const [isPaymentVerified, setIsPaymentVerified] = (0, _react.useState)(false);
  const [errorMessage, setErrorMessage] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    handlePaymentConfirmation();
  }, []); // Only run once on component mount

  const handlePaymentConfirmation = async () => {
    try {
      const {
        search
      } = location;
      const params = new URLSearchParams(search);

      // Extract required parameters from the query string
      const pidx = params.get("pidx");
      const status = params.get("status");
      const transaction_id = params.get("transaction_id");
      const tidx = params.get("tidx");
      const amount = params.get("amount");
      const total_amount = params.get("total_amount");
      const mobile = params.get("mobile");
      const purchase_order_id = params.get("purchase_order_id");
      const purchase_order_name = params.get("purchase_order_name");
      if (status === "Completed") {
        // Make a POST request to your backend API to verify payment
        const response = await _axios.default.post("http://localhost:3005/api/verify-payment", {
          pidx,
          transaction_id,
          tidx,
          amount,
          total_amount,
          mobile,
          status,
          purchase_order_id,
          purchase_order_name
        });
        if (response.data.success) {
          // Payment verified successfully, update state
          setIsPaymentVerified(true);
        } else {
          // Handle payment verification failure
          console.error("Payment verification failed:", response.data.error);
          setErrorMessage("Payment verification failed. Please try again.");
        }
      } else {
        // Handle non-completed status (Pending, User canceled, etc.)
        console.log("Payment status: ".concat(status));
        setErrorMessage("Payment status: ".concat(status, ". Please try again."));
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      setErrorMessage("Error verifying payment. Please try again.");
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-confirmation-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-confirmation-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-confirmation-content"
  }, isPaymentVerified ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, "Thank You for Your Payment!"), /*#__PURE__*/_react.default.createElement("p", null, "Your payment has been confirmed successfully."), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "green-button"
  }, "Go Back Home")) : /*#__PURE__*/_react.default.createElement("p", null, errorMessage))));
};
var _default = exports.default = PaymentConfirmation;