"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const BackButton_module_css_1 = require("./BackButton.module.css");
const react_router_dom_1 = require("react-router-dom");
const BackButton = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("div", { className: BackButton_module_css_1.default.backButton, onClick: () => navigate(-1), children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronLeft }) }));
};
exports.default = BackButton;
//# sourceMappingURL=BackButton.js.map