"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const store_1 = require("../../../store/store");
const CartItem_1 = require("../CartItem/CartItem");
const Cart_module_css_1 = require("./Cart.module.css");
const Button_1 = require("../../common/Button/Button");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const cartSlice_1 = require("./cartSlice");
const Cart = () => {
    const cart = (0, react_redux_1.useSelector)((state) => state.cart.shoppingCart);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const totalPrice = (0, react_redux_1.useSelector)((state) => state.cart.totalPrice);
    const dispatch = (0, store_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, cartSlice_1.recalculateTotalPrice)());
    }, [dispatch]);
    if (cart.length === 0) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: Cart_module_css_1.default.emptyCartWrapper, children: [(0, jsx_runtime_1.jsx)("h3", { children: "The Cart is empty." }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Go back", buttonHandler: () => navigate(-1) })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: Cart_module_css_1.default.cartProductList, children: [(0, jsx_runtime_1.jsx)("ul", { children: cart.map((cartObj) => {
                    return ((0, jsx_runtime_1.jsx)("li", { className: Cart_module_css_1.default.cartItemWrapper, children: (0, jsx_runtime_1.jsx)(CartItem_1.default, { ...cartObj }) }, cartObj.product.id));
                }) }), (0, jsx_runtime_1.jsxs)("section", { className: Cart_module_css_1.default.cartSummary, children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Total price: $", totalPrice] }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Checkout", buttonHandler: () => navigate('checkout') })] })] }));
};
exports.default = Cart;
//# sourceMappingURL=Cart.js.map