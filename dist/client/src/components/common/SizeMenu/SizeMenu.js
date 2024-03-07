"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SizeMenu_module_css_1 = require("./SizeMenu.module.css");
const SizeMenu = ({ changeHandler, sizes, productId, selectedValue, }) => {
    return ((0, jsx_runtime_1.jsx)("select", { id: `size-select-${productId}`, className: SizeMenu_module_css_1.default.sizeSelect, onChange: (e) => changeHandler(e.target.value), value: selectedValue, tabIndex: 0, children: sizes.map((size) => {
            return ((0, jsx_runtime_1.jsx)("option", { value: size, children: size.toUpperCase() }, size));
        }) }));
};
exports.default = SizeMenu;
//# sourceMappingURL=SizeMenu.js.map