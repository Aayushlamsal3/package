"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _UploadInsurance = _interopRequireDefault(require("./UploadInsurance"));
var _Citizenship = _interopRequireDefault(require("./Citizenship1"));
var _Citizenship2 = _interopRequireDefault(require("./Citizenship2"));
var _NoNote = _interopRequireDefault(require("./NoNote"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Form = _ref => {
  var _location$state;
  let {
    company
  } = _ref;
  const location = (0, _reactRouterDom.useLocation)();
  const history = (0, _reactRouterDom.useHistory)();
  if (!((_location$state = location.state) !== null && _location$state !== void 0 && _location$state.hl_service_log)) {
    window.location.replace("/");
  }
  const [imageName, setImageName] = (0, _react.useState)({
    insurance_photo: "insurance_photo.jpg",
    citizenship_front: "citizenship_front.jpg",
    citizenship_back: "citizenship_back.jpg"
  });
  const {
    total_amount,
    hl_service_log,
    insurance_photo,
    citizenship_front,
    citizenship_back,
    ins
  } = location.state;
  const [post, setPost] = (0, _react.useState)({
    fullname: "",
    contactnumber: "",
    email: "",
    address: "",
    city: "",
    vehicle_number: "",
    hl_service_log: hl_service_log,
    product_code: "nLFrfbH2RGAoULAiqsoSST",
    insurance_photo,
    citizenship_front,
    citizenship_back
  });
  const handleInput = event => {
    const value = event.target.value;
    const name = event.target.name;
    setPost({
      ...post,
      [name]: value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    history.push({
      pathname: "/final",
      state: {
        user_data: post,
        total_amount: total_amount,
        insurance_photo: !ins.insurance ? imageName.insurance_photo : "",
        citizenship_front: imageName.citizenship_front,
        citizenship_back: imageName.citizenship_back
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_NoNote.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "formpage-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "total-form"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Total Amount"), /*#__PURE__*/_react.default.createElement("p", null, "Rs. ", total_amount)), /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    className: "second-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-sidebyside"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-label-inp"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "fullname"
  }, "Full Name ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    onChange: handleInput,
    type: "text",
    name: "fullname",
    id: "fullname",
    placeholder: "Full Name",
    className: "sec",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "single-label-inp"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "contactnumber"
  }, "Contact Number ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    onChange: handleInput,
    type: "tel",
    name: "contactnumber",
    id: "contactnumber",
    placeholder: "Contact Number",
    className: "sec",
    required: true
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-sidebyside"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-label-inp"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email"
  }, "Email ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    onChange: handleInput,
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Email",
    className: "sec",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "single-label-inp"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "address"
  }, "Pick Location ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    onChange: handleInput,
    type: "text",
    name: "address",
    id: "address",
    placeholder: "Pick Location",
    className: "sec",
    required: true
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-sidebyside"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-label-inp"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "city"
  }, "City ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    onChange: handleInput,
    type: "text",
    name: "city",
    id: "city",
    placeholder: "City",
    className: "sec",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "single-label-inp"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "vehicle_number"
  }, "Vehicle Number ", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    onChange: handleInput,
    type: "text",
    name: "vehicle_number",
    id: "vehicle_number",
    placeholder: "Vehicle Number",
    className: "sec",
    required: true
  }))), !ins ? /*#__PURE__*/_react.default.createElement(_UploadInsurance.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-sidebyside"
  }, /*#__PURE__*/_react.default.createElement(_Citizenship.default, null), /*#__PURE__*/_react.default.createElement(_Citizenship2.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-btn-next"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "form-btn"
  }, "Next")))));
};
var _default = exports.default = Form;