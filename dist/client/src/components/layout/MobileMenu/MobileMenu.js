"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hamburger_react_1 = require("hamburger-react");
const MobileMenu_module_css_1 = require("./MobileMenu.module.css");
const react_router_dom_1 = require("react-router-dom");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const CartCounter_1 = require("../../features/cart/components/CartCounter/CartCounter");
const react_redux_1 = require("react-redux");
const MobileMenu = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const userId = (0, react_redux_1.useSelector)((state) => state.signIn.userId);
    (0, react_1.useEffect)(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: MobileMenu_module_css_1.default.hamburgerButton, children: (0, jsx_runtime_1.jsx)(hamburger_react_1.default, { toggled: isOpen, toggle: setIsOpen }) }), isOpen && ((0, jsx_runtime_1.jsx)("div", { className: MobileMenu_module_css_1.default.overlay, onClick: () => setIsOpen(false) })), (0, jsx_runtime_1.jsx)("div", { className: `${MobileMenu_module_css_1.default.mobileMenu} ${isOpen ? ` ${MobileMenu_module_css_1.default.open}` : ''}`, children: (0, jsx_runtime_1.jsxs)("div", { className: MobileMenu_module_css_1.default.navLinksWrapper, onClick: () => setIsOpen(false), children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/cart", className: MobileMenu_module_css_1.default.iconWrapper, children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCartShopping }), (0, jsx_runtime_1.jsx)(CartCounter_1.default, {}), (0, jsx_runtime_1.jsx)("span", { className: MobileMenu_module_css_1.default.iconText, children: "Cart" })] }), userId ? ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/account/my-account", className: MobileMenu_module_css_1.default.iconWrapper, children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser }), (0, jsx_runtime_1.jsx)("span", { className: MobileMenu_module_css_1.default.iconText, children: "Account" })] })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/account/sign-in", className: MobileMenu_module_css_1.default.navLink, children: "Sign In" })), (0, jsx_runtime_1.jsx)("p", { onClick: (e) => e.stopPropagation(), children: "Categories:" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/category/female", className: ({ isActive }) => isActive ? MobileMenu_module_css_1.default.active + ' ' + MobileMenu_module_css_1.default.navLink : MobileMenu_module_css_1.default.navLink, children: "Female" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/category/male", className: ({ isActive }) => isActive ? MobileMenu_module_css_1.default.active + ' ' + MobileMenu_module_css_1.default.navLink : MobileMenu_module_css_1.default.navLink, children: "Male" })] }) })] }));
};
exports.default = MobileMenu;
//# sourceMappingURL=MobileMenu.js.map