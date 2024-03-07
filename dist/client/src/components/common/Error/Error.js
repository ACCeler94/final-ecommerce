"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Error_module_css_1 = require("./Error.module.css");
const Button_1 = require("../Button/Button");
const react_router_dom_1 = require("react-router-dom");
const Error = ({ error }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const buttonHandler = () => {
        navigate('/');
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Error_module_css_1.default.errorWrapper, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Error" }), (0, jsx_runtime_1.jsx)("h2", { children: error.message }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Home", buttonHandler: buttonHandler })] }));
};
exports.default = Error;
//# sourceMappingURL=Error.js.map