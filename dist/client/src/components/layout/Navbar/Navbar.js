"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Container_1 = require("../../common/Container/Container");
const Navbar_module_css_1 = require("./Navbar.module.css");
const DesktopMenu_1 = require("../DesktopMenu/DesktopMenu");
const MobileMenu_1 = require("../MobileMenu/MobileMenu");
const useWindowWidth_1 = require("../../../utils/useWindowWidth");
const Navbar = () => {
    const windowWidth = (0, useWindowWidth_1.default)();
    return ((0, jsx_runtime_1.jsx)("nav", { className: Navbar_module_css_1.default.navbar, children: (0, jsx_runtime_1.jsx)(Container_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: Navbar_module_css_1.default.navbarContentWrapper, children: [(0, jsx_runtime_1.jsx)("div", { className: Navbar_module_css_1.default.logo, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: "Sartorial Selections " }) }), (0, jsx_runtime_1.jsx)("div", { children: windowWidth <= 800 ? (0, jsx_runtime_1.jsx)(MobileMenu_1.default, {}) : (0, jsx_runtime_1.jsx)(DesktopMenu_1.default, {}) })] }) }) }));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map