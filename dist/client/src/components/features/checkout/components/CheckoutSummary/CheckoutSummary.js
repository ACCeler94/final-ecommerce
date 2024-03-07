"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CheckoutSummary_module_css_1 = require("./CheckoutSummary.module.css");
const CheckoutSummary = ({ cart, totalPrice }) => {
    return ((0, jsx_runtime_1.jsxs)("section", { className: CheckoutSummary_module_css_1.default.orderSummary, children: [(0, jsx_runtime_1.jsx)("h1", { className: CheckoutSummary_module_css_1.default.sectionTitle, children: "Your items:" }), (0, jsx_runtime_1.jsx)("ul", { className: CheckoutSummary_module_css_1.default.orderItemsList, children: cart.map((cartObj) => {
                    return ((0, jsx_runtime_1.jsxs)("li", { className: CheckoutSummary_module_css_1.default.itemSummary, children: [(0, jsx_runtime_1.jsx)("h3", { className: "cart-product-name", children: cartObj.product.name }), (0, jsx_runtime_1.jsxs)("p", { children: ["Size:", ' ', (0, jsx_runtime_1.jsx)("span", { className: CheckoutSummary_module_css_1.default.summaryValue, children: cartObj.size.toUpperCase() })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Quantity:", ' ', (0, jsx_runtime_1.jsx)("span", { className: CheckoutSummary_module_css_1.default.summaryValue, children: cartObj.quantity })] }), cartObj.comment ? ((0, jsx_runtime_1.jsxs)("p", { children: ["Additional comment:", ' ', (0, jsx_runtime_1.jsx)("span", { className: CheckoutSummary_module_css_1.default.comment, children: cartObj.comment })] })) : null, (0, jsx_runtime_1.jsxs)("p", { className: CheckoutSummary_module_css_1.default.subtotal, children: ["Subtotal price: $", cartObj.quantity * cartObj.product.price] })] }, cartObj.product.id));
                }) }), (0, jsx_runtime_1.jsx)("div", { className: CheckoutSummary_module_css_1.default.priceSummary, children: (0, jsx_runtime_1.jsxs)("h3", { children: ["Total price: $", totalPrice] }) })] }));
};
exports.default = CheckoutSummary;
//# sourceMappingURL=CheckoutSummary.js.map