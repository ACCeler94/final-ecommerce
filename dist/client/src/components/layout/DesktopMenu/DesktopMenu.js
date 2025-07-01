"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const Button_1 = require("../../common/Button/Button");
const CartCounter_1 = require("../../features/Cart/components/CartCounter/CartCounter");
const DesktopMenu_module_css_1 = require("./DesktopMenu.module.css");
const DesktopMenu = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const userId = (0, react_redux_1.useSelector)((state) => state.signIn.userId);
    return ((0, jsx_runtime_1.jsxs)("div", { className: DesktopMenu_module_css_1.default.navLinksWrapper, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/category/female", className: ({ isActive }) => isActive ? DesktopMenu_module_css_1.default.active + ' ' + DesktopMenu_module_css_1.default.navLink : DesktopMenu_module_css_1.default.navLink, children: "Female" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/category/male", className: ({ isActive }) => isActive ? DesktopMenu_module_css_1.default.active + ' ' + DesktopMenu_module_css_1.default.navLink : DesktopMenu_module_css_1.default.navLink, children: "Male" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/cart", className: DesktopMenu_module_css_1.default.icon, children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCartShopping }), (0, jsx_runtime_1.jsx)(CartCounter_1.default, {})] }), userId ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/account/my-account", className: DesktopMenu_module_css_1.default.icon, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser }) })) : ((0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Sign In", buttonHandler: () => navigate('/account/sign-in') }))] }));
};
exports.default = DesktopMenu;
//# sourceMappingURL=DesktopMenu.js.map