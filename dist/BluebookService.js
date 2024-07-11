"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BluebookService = _ref => {
  let {
    company
  } = _ref;
  const [post, setPost] = (0, _react.useState)({
    vehicle_type: "2w",
    manufacture_year: "",
    engine_capacity: 0,
    last_renewal_to_year: "",
    last_renewal_to_month: "",
    last_renewal_to_day: "",
    last_renewal_from_year: "",
    last_renewal_from_month: "",
    last_renewal_from_day: "",
    product_code: "nLFrfbH2RGAoULAiqsoSST",
    get_third_party_insurance: false
  });
  const history = (0, _reactRouterDom.useHistory)();
  const handleInput = event => {
    const value = event.target.value;
    const name = event.target.name;
    setPost({
      ...post,
      [name]: value
    });
  };
  const handleCheckbox = event => {
    setPost({
      ...post,
      get_third_party_insurance: event.target.checked
    });
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const last_renewal_to = "".concat(post.last_renewal_to_year, "-").concat(post.last_renewal_to_month, "-").concat(post.last_renewal_to_day);
    const last_renewal_from = "".concat(post.last_renewal_from_year, "-").concat(post.last_renewal_from_month, "-").concat(post.last_renewal_from_day);
    try {
      const response = await _axios.default.post("http://localhost:3005/api/details", {
        vehicle_type: post.vehicle_type,
        manufacture_year: post.manufacture_year,
        engine_capacity: post.engine_capacity,
        last_renewal_to,
        last_renewal_from,
        product_code: post.product_code,
        get_third_party_insurance: post.get_third_party_insurance
      }, {
        headers: {
          "Content-Type": "application/json",
          "x-company-id": company // set company identifier in headers
        }
      });
      console.log("Response:", response.data);
      history.push({
        pathname: "/details",
        state: response.data
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bluebook-container"
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "Vehicle-type-cont"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "Vehicle-type"
  }, "Vehicle Type ", /*#__PURE__*/_react.default.createElement("span", null, "*"))), /*#__PURE__*/_react.default.createElement("select", {
    name: "vehicle_type",
    className: "vehicle-type",
    id: "",
    placeholder: "Select Vehicle Type",
    onChange: handleInput
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "2w"
  }, "Two Wheeler"), /*#__PURE__*/_react.default.createElement("option", {
    value: "4w"
  }, "Four Wheeler")))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "manufacture_year"
  }, "Year of Manufacture(YYYY) AD ", /*#__PURE__*/_react.default.createElement("span", null, "*"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "manufacture_year",
    id: "",
    className: "manu-inp",
    placeholder: "Manufacture Year (YYYY) AD",
    onChange: handleInput,
    required: true
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "engine_capacity"
  }, "Vehicle Cubic Capacity (CC) ", /*#__PURE__*/_react.default.createElement("span", null, "*"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "engine_capacity",
    id: "",
    className: "manu-inp",
    placeholder: "Vehicle Cubic Capacity (CC)",
    onChange: handleInput,
    required: true
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "last_renewal_from"
  }, "Last Renewal From (BS)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "last-renewal"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "last_renewal_from_year",
    id: "",
    className: "inp-bs",
    placeholder: "Year",
    onChange: handleInput,
    required: true
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "last_renewal_from_month",
    id: "",
    className: "inp-bs",
    placeholder: "Month",
    onChange: handleInput,
    required: true
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "last_renewal_from_day",
    id: "",
    className: "inp-bs",
    placeholder: "Day",
    onChange: handleInput,
    required: true
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "last_renewal_to"
  }, "Last Renewal To (BS)"), /*#__PURE__*/_react.default.createElement("div", {
    className: "last-renewal"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "last_renewal_to_year",
    id: "",
    className: "inp-bs",
    placeholder: "Year",
    onChange: handleInput,
    required: true
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "last_renewal_to_month",
    id: "",
    className: "inp-bs",
    placeholder: "Month",
    onChange: handleInput,
    required: true
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "last_renewal_to_day",
    id: "",
    className: "inp-bs",
    placeholder: "Day",
    onChange: handleInput,
    required: true
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-container"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "get_third_party_insurance",
    id: "get_third_party_insurance",
    onChange: handleCheckbox
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "get_third_party_insurance"
  }, "Third-party Insurance")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "calculate",
    type: "submit"
  }, "Calculate"))));
};
var _default = exports.default = BluebookService;