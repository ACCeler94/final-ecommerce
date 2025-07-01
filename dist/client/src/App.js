"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const js_cookie_1 = require("js-cookie");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
require("./App.css");
const AccountInfo_1 = require("./components/features/Account/components/AccountInfo/AccountInfo");
const AccountOrdersList_1 = require("./components/features/Account/components/AccountOrdersList/AccountOrdersList");
const cartSlice_1 = require("./components/features/Cart/cartSlice");
const signInSlice_1 = require("./components/features/SignIn/signInSlice");
const Footer_1 = require("./components/layout/Footer/Footer");
const Navbar_1 = require("./components/layout/Navbar/Navbar");
const AccountPage_1 = require("./components/pages/AccountPage/AccountPage");
const CartPage_1 = require("./components/pages/CartPage/CartPage");
const CategoryPage_1 = require("./components/pages/CategoryPage/CategoryPage");
const CheckoutPage_1 = require("./components/pages/CheckoutPage/CheckoutPage");
const Home_1 = require("./components/pages/Home/Home");
const NotFound_1 = require("./components/pages/NotFound/NotFound");
const RegisterPage_1 = require("./components/pages/RegisterPage/RegisterPage");
const SignInPage_1 = require("./components/pages/SignInPage/SignInPage");
const SingleProductPage_1 = require("./components/pages/SingleProductPage/SingleProductPage");
const store_1 = require("./store/store");
function App() {
    const dispatch = (0, store_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        if (js_cookie_1.default.get('isLogged'))
            dispatch((0, signInSlice_1.fetchLogJWT)());
    }, [dispatch]);
    (0, react_1.useEffect)(() => {
        dispatch((0, cartSlice_1.loadCart)());
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/cart", element: (0, jsx_runtime_1.jsx)(CartPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/cart/checkout", element: (0, jsx_runtime_1.jsx)(CheckoutPage_1.default, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/category", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "female", element: (0, jsx_runtime_1.jsx)(CategoryPage_1.default, { category: "Female" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "male", element: (0, jsx_runtime_1.jsx)(CategoryPage_1.default, { category: "Male" }) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/product/:productId", element: (0, jsx_runtime_1.jsx)(SingleProductPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/account/sign-in", element: (0, jsx_runtime_1.jsx)(SignInPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/account/register", element: (0, jsx_runtime_1.jsx)(RegisterPage_1.default, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/account/my-account", element: (0, jsx_runtime_1.jsx)(AccountPage_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "orders" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "orders", element: (0, jsx_runtime_1.jsx)(AccountOrdersList_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "account-info", element: (0, jsx_runtime_1.jsx)(AccountInfo_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map