"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lottieWeb = _interopRequireDefault(require("lottie-web"));
var _A6p8cZCxx = _interopRequireDefault(require("./7A6p8cZCxx.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Ensure to import your animation JSON

const MyLottieAnimation = _ref => {
  let {
    onAnimationComplete,
    width,
    height,
    color
  } = _ref;
  const animationContainer = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const anim = _lottieWeb.default.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: _A6p8cZCxx.default
    });

    // After 2 seconds, trigger the callback to signal animation completion
    const animationTimeout = setTimeout(() => {
      onAnimationComplete();
    }, 1500);
    return () => {
      anim.destroy(); // Clean up animation on unmount
      clearTimeout(animationTimeout); // Clear timeout on unmount
    };
  }, [onAnimationComplete]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "animation-container",
    ref: animationContainer,
    style: {
      width,
      height
    }
  }, /*#__PURE__*/_react.default.createElement("style", null, "\n        .animation-container > svg path {\n          fill: ".concat(color, "; // Customize SVG fill color\n        }\n      ")));
};
var _default = exports.default = MyLottieAnimation;