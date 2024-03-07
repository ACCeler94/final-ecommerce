"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Button_1 = require("../../common/Button/Button");
const Container_1 = require("../../common/Container/Container");
const RegisterSuccessPage_module_css_1 = require("./RegisterSuccessPage.module.css");
const RegisterSuccessPage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("main", { className: RegisterSuccessPage_module_css_1.default.registerSuccess, children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "You have been successfully registered!" }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Login", buttonHandler: () => navigate('/account/sign-in') })] }) }));
};
exports.default = RegisterSuccessPage;
//# sourceMappingURL=RegisterSuccessPage.js.map