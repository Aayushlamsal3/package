"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Citizenship1 = _ref => {
  let {
    setImageName
  } = _ref;
  const [image, setImage] = (0, _react.useState)(null);
  const [imageNameState, setImageNameState] = (0, _react.useState)({});
  const handleImageChange = event => {
    // event.target.name = event.target.files[0]
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setImageNameState({
        ...imageNameState,
        citizenship_front: file.name
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "upload-citizenship-front",
    className: "upload-label"
  }, "Citizenship Front"), /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-insurance"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    id: "upload-citizenship-front",
    name: "citizenship_front",
    accept: "image/*",
    onChange: handleImageChange,
    style: {
      display: "none",
      border: "1px solid #ffaa00"
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "upload-citizenship-front",
    className: "upload-button"
  }, image ? /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: "citizenship_front",
    className: "uploaded-image"
  }) : /*#__PURE__*/_react.default.createElement("span", null, "Click to upload"))));
};
var _default = exports.default = Citizenship1;