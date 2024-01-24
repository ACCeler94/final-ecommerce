"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const Checkout_module_css_1 = require("./Checkout.module.css");
const store_1 = require("../../../store/store");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const Button_1 = require("../../common/Button/Button");
const ordersApi_1 = require("../../../API/ordersApi");
const cartSlice_1 = require("../Cart/cartSlice");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const Error_1 = require("../../common/Error/Error");
const Checkout = () => {
    const cart = (0, react_redux_1.useSelector)((state) => state.cart.shoppingCart);
    const totalPrice = (0, react_redux_1.useSelector)((state) => state.cart.totalPrice);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, store_1.useAppDispatch)();
    const [name, setName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [address, setAddress] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        if (cart.length === 0) {
            navigate('/');
        }
    }, [navigate, cart]);
    (0, react_1.useEffect)(() => {
        dispatch((0, cartSlice_1.recalculateTotalPrice)());
    }, [dispatch]);
    const showToast = () => react_toastify_1.toast.success('Order successfully placed. You will be redirected.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
    });
    const redirectOnSuccess = () => {
        setTimeout(() => {
            navigate('/');
            dispatch((0, cartSlice_1.resetCart)());
            dispatch((0, cartSlice_1.resetCartInStorage)());
        }, 2000);
    };
    const orderSubmitHandler = (e) => {
        e.preventDefault();
        if (!name || !email || !address) {
            alert('Please fill all required fields!');
        }
        else {
            if (totalPrice) {
                const orderObj = {
                    userData: { name, email, address },
                    products: cart,
                    orderTotal: totalPrice,
                };
                ordersApi_1.default
                    .placeOrder(orderObj)
                    .then((res) => {
                    console.log(res);
                    showToast();
                    redirectOnSuccess();
                })
                    .catch((err) => {
                    return (0, jsx_runtime_1.jsx)(Error_1.default, { error: err });
                });
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "checkout-wrapper", children: [(0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}), (0, jsx_runtime_1.jsxs)("section", { className: Checkout_module_css_1.default.orderSummary, children: [(0, jsx_runtime_1.jsx)("ul", { children: cart.map((cartObj) => {
                            return ((0, jsx_runtime_1.jsxs)("li", { className: Checkout_module_css_1.default.itemSummary, children: [(0, jsx_runtime_1.jsx)("h3", { className: "cart-product-name", children: cartObj.product.name }), (0, jsx_runtime_1.jsxs)("span", { children: ["Quantity: ", cartObj.quantity] }), (0, jsx_runtime_1.jsxs)("span", { className: Checkout_module_css_1.default.subtotal, children: ["Subtotal price: $", cartObj.quantity * cartObj.product.price] }), cartObj.comment ? ((0, jsx_runtime_1.jsxs)("p", { children: ["Additional comment:", (0, jsx_runtime_1.jsx)("span", { className: Checkout_module_css_1.default.comment, children: cartObj.comment })] })) : null] }, cartObj.product.id));
                        }) }), (0, jsx_runtime_1.jsx)("div", { className: Checkout_module_css_1.default.priceSummary, children: (0, jsx_runtime_1.jsxs)("h3", { children: ["Total price: $", totalPrice] }) })] }), (0, jsx_runtime_1.jsx)("section", { className: Checkout_module_css_1.default.checkoutFormWrapper, children: (0, jsx_runtime_1.jsxs)("form", { className: Checkout_module_css_1.default.userDataForm, onSubmit: orderSubmitHandler, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", children: "First and last name*" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", id: "name", required: true, value: name, onChange: (e) => setName(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email address*" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "address", children: "Shipping address*" }), (0, jsx_runtime_1.jsx)("textarea", { name: "address", id: "address", rows: 5, required: true, value: address, onChange: (e) => setAddress(e.target.value) }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Place Order", buttonHandler: () => { } })] }) })] }));
};
exports.default = Checkout;
//# sourceMappingURL=Checkout.js.map