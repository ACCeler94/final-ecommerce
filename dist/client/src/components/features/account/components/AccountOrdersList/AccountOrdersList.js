"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AccountOrdersList_module_css_1 = require("./AccountOrdersList.module.css");
const react_router_dom_1 = require("react-router-dom");
const Button_1 = require("../../../../common/Button/Button");
const Account_1 = require("../Account/Account");
const AccountOrdersList = () => {
    const [ordersNumberToShow, setOrdersNumberToShow] = (0, react_1.useState)(3);
    const { orders } = (0, Account_1.useUserData)();
    (0, react_1.useEffect)(() => {
        if (orders.length < ordersNumberToShow)
            setOrdersNumberToShow(orders.length);
    }, [orders.length, ordersNumberToShow]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: orders.length === 0 ? ((0, jsx_runtime_1.jsx)("div", { className: AccountOrdersList_module_css_1.default.noOrdersText, children: "You have no orders to show." })) : ((0, jsx_runtime_1.jsxs)("div", { className: AccountOrdersList_module_css_1.default.ordersListWrapper, children: [(0, jsx_runtime_1.jsx)("ul", { className: AccountOrdersList_module_css_1.default.ordersList, children: orders.slice(0, ordersNumberToShow).map((order) => {
                        return ((0, jsx_runtime_1.jsx)("li", { className: AccountOrdersList_module_css_1.default.orderItem, children: (0, jsx_runtime_1.jsxs)("details", { className: AccountOrdersList_module_css_1.default.orderData, children: [(0, jsx_runtime_1.jsxs)("summary", { className: AccountOrdersList_module_css_1.default.orderSummary, children: [(0, jsx_runtime_1.jsx)("span", { children: "Order number:" }), (0, jsx_runtime_1.jsx)("h2", { className: AccountOrdersList_module_css_1.default.orderId, children: order.id })] }), (0, jsx_runtime_1.jsxs)("ul", { className: AccountOrdersList_module_css_1.default.orderDetails, children: [(0, jsx_runtime_1.jsx)("h3", { children: "Products:" }), order.products.map((productItem, index) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsxs)("div", { className: AccountOrdersList_module_css_1.default.productInfo, children: [(0, jsx_runtime_1.jsx)("span", { className: AccountOrdersList_module_css_1.default.productLink, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/product/${productItem.product.id}`, children: productItem.product.name }) }), "Size:", (0, jsx_runtime_1.jsx)("span", { className: AccountOrdersList_module_css_1.default.infoSemiBold, children: productItem.size.toUpperCase() })] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Quantity:", (0, jsx_runtime_1.jsx)("span", { className: AccountOrdersList_module_css_1.default.infoSemiBold, children: productItem.quantity })] })] }, index)))] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Order Total:", (0, jsx_runtime_1.jsxs)("span", { className: AccountOrdersList_module_css_1.default.infoSemiBold, children: ["$", order.orderTotal] })] })] }) }, order.id));
                    }) }), ordersNumberToShow < orders.length ? ((0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Show more", buttonHandler: () => setOrdersNumberToShow(ordersNumberToShow + 3) })) : null] })) }));
};
exports.default = AccountOrdersList;
//# sourceMappingURL=AccountOrdersList.js.map