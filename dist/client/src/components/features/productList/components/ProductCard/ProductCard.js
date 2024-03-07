"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const config_1 = require("../../../../../API/config");
const ProductCard_module_css_1 = require("./ProductCard.module.css");
const react_1 = require("react");
const Button_1 = require("../../../../common/Button/Button");
const store_1 = require("../../../../../store/store");
const cartSlice_1 = require("../../../cart/cartSlice");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const QuantityField_1 = require("../../../../common/QuantityField/QuantityField");
const SizeMenu_1 = require("../../../../common/SizeMenu/SizeMenu");
const nanoid_1 = require("nanoid");
const ProductCard = (productData) => {
    const sizesArr = productData.sizes.split(', ');
    const [productQuantity, setProductQuantity] = (0, react_1.useState)(1);
    const [productSize, setProductSize] = (0, react_1.useState)(sizesArr[0]);
    const dispatch = (0, store_1.useAppDispatch)();
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    const showToast = () => react_toastify_1.toast.success('Item added to cart', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
    });
    const addToCartHandler = () => {
        dispatch((0, cartSlice_1.addToCart)({
            cartItemId: (0, nanoid_1.nanoid)(),
            quantity: productQuantity,
            product: productData,
            size: productSize,
        }));
        dispatch((0, cartSlice_1.recalculateTotalPrice)());
        dispatch((0, cartSlice_1.storeCart)());
        showToast();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: `${ProductCard_module_css_1.default.productCard} ${isFocused ? ProductCard_module_css_1.default.focused : ''}`, tabIndex: 0, onFocus: handleFocus, onBlur: handleBlur, children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: `/product/${productData.id}`, children: [(0, jsx_runtime_1.jsx)("div", { className: ProductCard_module_css_1.default.imageWrapper, children: (0, jsx_runtime_1.jsx)("img", { src: `${config_1.THUMBNAILS_URL}/${productData.photo}`, alt: "product-main-photo" }) }), (0, jsx_runtime_1.jsxs)("div", { className: ProductCard_module_css_1.default.productInfoWrapper, children: [(0, jsx_runtime_1.jsx)("h2", { className: "product-name", children: productData.name }), (0, jsx_runtime_1.jsx)("h3", { className: "product-brand", children: productData.brand }), (0, jsx_runtime_1.jsxs)("h4", { className: "product-price", children: ["$", productData.price] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: ProductCard_module_css_1.default.cartButtonsWrapper, children: [(0, jsx_runtime_1.jsxs)("div", { className: ProductCard_module_css_1.default.sizeAndQuantityWrapper, children: [(0, jsx_runtime_1.jsx)(SizeMenu_1.default, { sizes: sizesArr, changeHandler: (size) => setProductSize(size), productId: productData.id, selectedValue: productSize }), (0, jsx_runtime_1.jsx)(QuantityField_1.default, { productId: productData.id, changeQuantity: (value) => setProductQuantity(value), quantity: productQuantity })] }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Add to Cart", buttonHandler: addToCartHandler })] })] }));
};
exports.default = ProductCard;
//# sourceMappingURL=ProductCard.js.map