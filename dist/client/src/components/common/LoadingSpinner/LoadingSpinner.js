"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_spinners_1 = require("react-spinners");
const LoadingSpinner_module_css_1 = require("./LoadingSpinner.module.css");
const LoadingSpinner = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: LoadingSpinner_module_css_1.default.spinnerWrapper, children: (0, jsx_runtime_1.jsx)(react_spinners_1.MoonLoader, { color: "#212427", size: 75, speedMultiplier: 0.5 }) }));
};
exports.default = LoadingSpinner;
//# sourceMappingURL=LoadingSpinner.js.map