"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BackButton_1 = require("../../common/BackButton/BackButton");
const Container_1 = require("../../common/Container/Container");
const Cart_1 = require("../../features/cart/components/Cart/Cart");
const CartPage = () => {
    return ((0, jsx_runtime_1.jsx)("main", { className: "cart", children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, {}), (0, jsx_runtime_1.jsx)(Cart_1.default, {})] }) }));
};
exports.default = CartPage;
//# sourceMappingURL=CartPage.js.map