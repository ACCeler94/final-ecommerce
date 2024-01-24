"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = require("./components/layout/Navbar/Navbar");
const Home_1 = require("./components/pages/Home/Home");
require("./App.css");
const Footer_1 = require("./components/layout/Footer/Footer");
const CategoryPage_1 = require("./components/pages/CategoryPage/CategoryPage");
const SingleProductPage_1 = require("./components/pages/SingleProductPage/SingleProductPage");
const CartPage_1 = require("./components/pages/CartPage/CartPage");
const CheckoutPage_1 = require("./components/pages/CheckoutPage/CheckoutPage");
const store_1 = require("./store/store");
const react_1 = require("react");
const cartSlice_1 = require("./components/features/Cart/cartSlice");
const react_toastify_1 = require("react-toastify");
const NotFound_1 = require("./components/pages/NotFound/NotFound");
function App() {
    const dispatch = (0, store_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, cartSlice_1.loadCart)());
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/cart", element: (0, jsx_runtime_1.jsx)(CartPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/cart/checkout", element: (0, jsx_runtime_1.jsx)(CheckoutPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/category/female", element: (0, jsx_runtime_1.jsx)(CategoryPage_1.default, { category: "Female" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/category/male", element: (0, jsx_runtime_1.jsx)(CategoryPage_1.default, { category: "Male" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/product/:productId", element: (0, jsx_runtime_1.jsx)(SingleProductPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map