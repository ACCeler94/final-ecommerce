"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BackButton_1 = require("../../common/BackButton/BackButton");
const Container_1 = require("../../common/Container/Container");
const Checkout_1 = require("../../features/checkout/components/Checkout/Checkout");
const CheckoutPage = () => {
    return ((0, jsx_runtime_1.jsx)("main", { className: "checkout-page", children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, {}), (0, jsx_runtime_1.jsx)(Checkout_1.default, {})] }) }));
};
exports.default = CheckoutPage;
//# sourceMappingURL=CheckoutPage.js.map