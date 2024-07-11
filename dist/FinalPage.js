"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
var _NoTerms = _interopRequireDefault(require("./NoTerms"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FinalPage = _ref => {
  var _location$state;
  let {
    company
  } = _ref;
  const location = (0, _reactRouterDom.useLocation)();
  const [showAlert, setShowAlert] = (0, _react.useState)(false);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const paymentRequest = {
        return_url: "http://localhost:3000/payment-confirmation",
        website_url: "http://localhost:3000",
        amount: location.state.total_amount * 100,
        // Convert to paisa
        purchase_order_id: "Order_" + new Date().getTime(),
        purchase_order_name: "Bluebook Renewal",
        customer_info: {
          name: location.state.user_data.fullname,
          email: location.state.user_data.email,
          phone: location.state.user_data.contactnumber
        }
      };
      const initiateResponse = await _axios.default.post("http://localhost:3005/api/initiate-payment", paymentRequest, {
        headers: {
          "Content-Type": "application/json",
          "x-company-id": company //company identifier
        }
      });
      if (initiateResponse.data.payment_url) {
        window.location.href = initiateResponse.data.payment_url;
      } else {
        console.error("Failed to initiate payment", initiateResponse.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  if (!((_location$state = location.state) !== null && _location$state !== void 0 && _location$state.user_data)) {
    window.location.replace("/");
  }
  const {
    total_amount
  } = location.state;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-confirmation-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "MAIN-BOX"
  }, /*#__PURE__*/_react.default.createElement(_NoTerms.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "Big-Box-three"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "total-form-big"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Rs. ", total_amount), /*#__PURE__*/_react.default.createElement("p", null, "Total Payable Amount")), /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-btn"
  }, /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "final-goback-link"
  }, " ", "Back to Home")), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleSubmit,
    className: "final-submit"
  }, "Pay with Khalti")), showAlert && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert"
  }, "Thanks for submitting the form! We'll contact you soon!"))));
};
var _default = exports.default = FinalPage;