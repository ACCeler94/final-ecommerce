"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Container_1 = require("../../common/Container/Container");
const Navbar_module_css_1 = require("./Navbar.module.css");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const CartCounter_1 = require("../../features/CartCounter/CartCounter");
const Navbar = () => {
    return ((0, jsx_runtime_1.jsx)("nav", { className: Navbar_module_css_1.default.navbar, children: (0, jsx_runtime_1.jsx)(Container_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: Navbar_module_css_1.default.navbarContentWrapper, children: [(0, jsx_runtime_1.jsx)("div", { className: Navbar_module_css_1.default.logo, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: "Sartorial Selections " }) }), (0, jsx_runtime_1.jsxs)("div", { className: Navbar_module_css_1.default.navLinksWrapper, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/category/female', className: Navbar_module_css_1.default.navLink, children: "Female" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/category/male', className: Navbar_module_css_1.default.navLink, children: "Male" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: '/cart', className: Navbar_module_css_1.default.cartIcon, children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCartShopping }), (0, jsx_runtime_1.jsx)(CartCounter_1.default, {})] })] })] }) }) }));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map