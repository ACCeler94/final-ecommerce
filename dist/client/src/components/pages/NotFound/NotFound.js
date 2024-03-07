"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Button_1 = require("../../common/Button/Button");
const Container_1 = require("../../common/Container/Container");
const NotFound_module_css_1 = require("./NotFound.module.css");
const NotFound = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const redirectHandler = () => {
        navigate('/');
    };
    return ((0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsx)(Container_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: NotFound_module_css_1.default.notFoundWrapper, children: [(0, jsx_runtime_1.jsx)("h1", { children: "404 Not found..." }), (0, jsx_runtime_1.jsx)("h2", { children: "Page you are trying to access does not exist." }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Home", buttonHandler: redirectHandler })] }) }) }));
};
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map