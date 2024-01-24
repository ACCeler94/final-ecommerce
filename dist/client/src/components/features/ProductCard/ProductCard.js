"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const config_1 = require("../../../API/config");
const ProductCard_module_css_1 = require("./ProductCard.module.css");
const react_1 = require("react");
const Button_1 = require("../../common/Button/Button");
const store_1 = require("../../../store/store");
const cartSlice_1 = require("../Cart/cartSlice");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const ProductCard = (productData) => {
    const [productQuantity, setProductQuantity] = (0, react_1.useState)(1);
    const dispatch = (0, store_1.useAppDispatch)();
    const handleQuantityChange = (value) => {
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
        dispatch((0, cartSlice_1.addToCart)({ quantity: productQuantity, product: productData }));
        dispatch((0, cartSlice_1.recalculateTotalPrice)());
        dispatch((0, cartSlice_1.storeCart)());
        showToast();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: ProductCard_module_css_1.default.productCard, children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: `/product/${productData.id}`, children: [(0, jsx_runtime_1.jsx)("div", { className: ProductCard_module_css_1.default.imageWrapper, children: (0, jsx_runtime_1.jsx)("img", { src: `${config_1.IMAGES_URL}/${productData.photo}`, alt: "product-main-photo" }) }), (0, jsx_runtime_1.jsxs)("div", { className: ProductCard_module_css_1.default.productInfoWrapper, children: [(0, jsx_runtime_1.jsx)("h2", { className: "product-name", children: productData.name }), (0, jsx_runtime_1.jsx)("h3", { className: "product-brand", children: productData.brand }), (0, jsx_runtime_1.jsxs)("h4", { className: "product-price", children: ["$", productData.price] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: ProductCard_module_css_1.default.cartButtonsWrapper, children: [(0, jsx_runtime_1.jsx)("input", { type: "number", id: `quantity-${productData.id}`, name: "product-quantity", min: "1", max: "99", value: productQuantity, onChange: (e) => handleQuantityChange(e.target.value) }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Add to cart", buttonHandler: addToCartHandler })] })] }));
};
exports.default = ProductCard;
//# sourceMappingURL=ProductCard.js.map