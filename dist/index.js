"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BluebookService", {
  enumerable: true,
  get: function () {
    return _BluebookService.default;
  }
});
var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _BluebookService = _interopRequireDefault(require("../src/BluebookService"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_dotenv.default.config();
const root = _client.default.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement("div", {
  className: "main-container"
}, /*#__PURE__*/_react.default.createElement(_App.default, null))));
(0, _reportWebVitals.default)();