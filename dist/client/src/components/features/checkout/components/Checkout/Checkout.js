"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const ordersApi_1 = require("../../../../../API/ordersApi");
const store_1 = require("../../../../../store/store");
const Error_1 = require("../../../../common/Error/Error");
const AccountSlice_1 = require("../../../Account/AccountSlice");
const cartSlice_1 = require("../../../Cart/cartSlice");
const productListSlice_1 = require("../../../ProductList/productListSlice");
const CheckoutForm_1 = require("../CheckoutForm/CheckoutForm");
const CheckoutSummary_1 = require("../CheckoutSummary/CheckoutSummary");
const Checkout = () => {
    const cart = (0, react_redux_1.useSelector)((state) => state.cart.shoppingCart);
    const totalPrice = (0, react_redux_1.useSelector)((state) => state.cart.totalPrice);
    const userId = (0, react_redux_1.useSelector)((state) => state.signIn.userId);
    const accountStatus = (0, react_redux_1.useSelector)((state) => state.account.status);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, store_1.useAppDispatch)();
    const [userData, setUserData] = (0, react_1.useState)();
    const [name, setName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [shippingStreet, setShippingStreet] = (0, react_1.useState)('');
    const [shippingCity, setShippingCity] = (0, react_1.useState)('');
    const [shippingZip, setShippingZip] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)();
    const [isPending, setIsPending] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!userId && accountStatus === productListSlice_1.Statuses.Failed) {
            navigate('/account/sign-in');
        }
    }, [navigate, userId, accountStatus]);
    (0, react_1.useEffect)(() => {
        const controller = new AbortController();
        dispatch((0, AccountSlice_1.fetchAccountData)())
            .unwrap()
            .then((data) => setUserData(data));
        return () => controller.abort();
    }, [dispatch]);
    (0, react_1.useEffect)(() => {
        if (userData) {
            setName(userData.name);
            setEmail(userData.email);
            setShippingStreet(userData.street);
            setShippingCity(userData.street);
            setShippingZip(userData.zip);
        }
    }, [userData]);
    (0, react_1.useEffect)(() => {
        dispatch((0, cartSlice_1.recalculateTotalPrice)());
    }, [dispatch, cart]);
    (0, react_1.useEffect)(() => {
        return () => {
            setIsPending(false);
        };
    }, []);
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
        if (isPending) {
            return;
        }
        if (!name || !email || !shippingStreet || !shippingCity || !shippingZip) {
            alert('Please fill all required fields!');
        }
        else {
            if (totalPrice && cart.length !== 0) {
                setIsPending(true);
                const orderObj = {
                    userData: { name, email, shippingCity, shippingStreet, shippingZip },
                    products: cart,
                    orderTotal: totalPrice,
                };
                ordersApi_1.default
                    .placeOrder(orderObj)
                    .then(() => {
                    showToast();
                    redirectOnSuccess();
                })
                    .catch((err) => {
                    setError(err);
                });
            }
        }
    };
    const CheckoutFormProps = {
        name,
        setName,
        email,
        setEmail,
        shippingStreet,
        setShippingStreet,
        shippingCity,
        setShippingCity,
        shippingZip,
        setShippingZip,
        orderSubmitHandler,
    };
    const CheckoutSummaryProps = {
        cart,
        totalPrice,
    };
    if (error) {
        return (0, jsx_runtime_1.jsx)(Error_1.default, { error: error });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "checkout-wrapper", children: [(0, jsx_runtime_1.jsx)(CheckoutSummary_1.default, { ...CheckoutSummaryProps }), (0, jsx_runtime_1.jsx)(CheckoutForm_1.default, { ...CheckoutFormProps })] }));
};
exports.default = Checkout;
//# sourceMappingURL=Checkout.js.map