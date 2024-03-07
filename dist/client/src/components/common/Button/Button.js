"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_module_css_1 = require("./Button.module.css");
const Button = ({ buttonHandler, buttonText, type = 'submit', }) => {
    return ((0, jsx_runtime_1.jsx)("button", { className: Button_module_css_1.default.buttonBlack, onClick: buttonHandler, type: type, children: buttonText }));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map