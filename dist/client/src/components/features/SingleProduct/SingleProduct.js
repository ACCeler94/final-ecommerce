"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const productListSlice_1 = require("../ProductList/productListSlice");
const store_1 = require("../../../store/store");
const react_redux_1 = require("react-redux");
const SingleProduct_module_css_1 = require("./SingleProduct.module.css");
const config_1 = require("../../../API/config");
const Button_1 = require("../../common/Button/Button");
const Error_1 = require("../../common/Error/Error");
const cartSlice_1 = require("../Cart/cartSlice");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const SingleProduct = () => {
    const { productId } = (0, react_router_dom_1.useParams)();
    const dispatch = (0, store_1.useAppDispatch)();
    const currentProduct = (0, react_redux_1.useSelector)((state) => state.products.currentProduct);
    const error = (0, react_redux_1.useSelector)((state) => state.products.error);
    const [productQuantity, setProductQuantity] = (0, react_1.useState)(1);
    (0, react_1.useEffect)(() => {
        if (productId) {
            dispatch((0, productListSlice_1.fetchById)(productId));
        }
        return () => {
            dispatch((0, productListSlice_1.resetCurrentProduct)());
        };
    }, [productId, dispatch]);
    const showToast = () => react_toastify_1.toast.success('Item added to cart.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
    });
    const handleQuantityInput = (value) => {
        if (value === '') {
            setProductQuantity(value);
        }
        else {
            const numValue = Number(value);
            if (numValue <= 0)
                setProductQuantity(1);
            else if (numValue > 99)
                setProductQuantity(99);
            else
                setProductQuantity(numValue);
        }
    };
    const addToCartHandler = () => {
        dispatch((0, cartSlice_1.addToCart)({ quantity: productQuantity, product: currentProduct }));
        dispatch((0, cartSlice_1.recalculateTotalPrice)());
        dispatch((0, cartSlice_1.storeCart)());
        showToast();
    };
    if (error) {
        return (0, jsx_runtime_1.jsx)(Error_1.default, { error: error });
    }
    if (currentProduct)
        return ((0, jsx_runtime_1.jsx)("div", { className: SingleProduct_module_css_1.default.singleProductWrapper, children: (0, jsx_runtime_1.jsxs)("div", { className: SingleProduct_module_css_1.default.productContent, children: [(0, jsx_runtime_1.jsx)("div", { className: SingleProduct_module_css_1.default.imageWrapper, children: (0, jsx_runtime_1.jsx)("img", { src: `${config_1.IMAGES_URL}/${currentProduct.photo}`, alt: "product-main-photo" }) }), (0, jsx_runtime_1.jsxs)("div", { className: SingleProduct_module_css_1.default.productInfoContainer, children: [(0, jsx_runtime_1.jsxs)("div", { className: SingleProduct_module_css_1.default.productInfo, children: [(0, jsx_runtime_1.jsxs)("div", { className: SingleProduct_module_css_1.default.productNameWrapper, children: [(0, jsx_runtime_1.jsx)("h2", { className: "product-name", children: currentProduct.name }), (0, jsx_runtime_1.jsx)("h3", { className: "product-brand", children: currentProduct.brand })] }), (0, jsx_runtime_1.jsx)("p", { children: currentProduct.description })] }), (0, jsx_runtime_1.jsxs)("div", { className: SingleProduct_module_css_1.default.cartButtonsWrapper, children: [(0, jsx_runtime_1.jsxs)("div", { className: SingleProduct_module_css_1.default.productPrice, children: ["Price: ", (0, jsx_runtime_1.jsxs)("h4", { children: ["$", currentProduct.price] })] }), (0, jsx_runtime_1.jsx)("input", { type: "number", id: `quantity-${currentProduct.id}}`, name: "product-quantity", min: "1", max: "99", value: productQuantity, onChange: (e) => handleQuantityInput(e.target.value) }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "ADD TO CART", buttonHandler: addToCartHandler })] })] })] }) }));
};
exports.default = SingleProduct;
//# sourceMappingURL=SingleProduct.js.map