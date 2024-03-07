"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = require("../../../../common/Button/Button");
const store_1 = require("../../../../../store/store");
const cartSlice_1 = require("../../cartSlice");
const config_1 = require("../../../../../API/config");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const CartItem_module_css_1 = require("./CartItem.module.css");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const QuantityField_1 = require("../../../../common/QuantityField/QuantityField");
const SizeMenu_1 = require("../../../../common/SizeMenu/SizeMenu");
const CartItem = ({ product, quantity, size, cartItemId, cart, }) => {
    const [itemQuantity, setItemQuantity] = (0, react_1.useState)(quantity);
    const [itemComment, setItemComment] = (0, react_1.useState)('');
    const [itemTotalPrice, setItemTotalPrice] = (0, react_1.useState)(quantity * product.price);
    const [productSize, setProductSize] = (0, react_1.useState)(size);
    const [sizesArr, setSizesArr] = (0, react_1.useState)(product.sizes.split(', '));
    const dispatch = (0, store_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        const sameProduct = cart.find((item) => item.product.id === product.id && item.cartItemId !== cartItemId);
        if (sameProduct) {
            setSizesArr((prevSizesArr) => prevSizesArr.filter((size) => size !== sameProduct.size));
        }
    }, [cart, product.id, cartItemId]);
    const showToast = () => react_toastify_1.toast.success('Comment saved.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
    });
    const removeItemHandler = () => {
        dispatch((0, cartSlice_1.removeFromCart)({ cartItemId }));
        dispatch((0, cartSlice_1.recalculateTotalPrice)());
        dispatch((0, cartSlice_1.storeCart)());
    };
    (0, react_1.useEffect)(() => {
        setItemTotalPrice(quantity * product.price);
    }, [quantity, product]);
    (0, react_1.useEffect)(() => {
        if (itemQuantity &&
            typeof itemQuantity === 'number' &&
            itemQuantity !== quantity) {
            dispatch((0, cartSlice_1.changeProductQuantity)({ quantity: itemQuantity, cartItemId }));
            dispatch((0, cartSlice_1.storeCart)());
        }
    }, [dispatch, itemQuantity, cartItemId, quantity]);
    (0, react_1.useEffect)(() => {
        if (productSize !== size) {
            dispatch((0, cartSlice_1.changeProductSize)({ cartItemId, newSize: productSize }));
            dispatch((0, cartSlice_1.storeCart)());
        }
    }, [dispatch, productSize, cartItemId, size]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: CartItem_module_css_1.default.cartProduct, children: [(0, jsx_runtime_1.jsx)("div", { className: CartItem_module_css_1.default.cartProductImageWrapper, children: (0, jsx_runtime_1.jsx)("img", { src: `${config_1.IMAGES_URL}/${product.photo}` }) }), (0, jsx_runtime_1.jsxs)("div", { className: CartItem_module_css_1.default.cartProductFormWrapper, children: [(0, jsx_runtime_1.jsx)("h3", { className: "cart-product-info", children: product.name }), (0, jsx_runtime_1.jsxs)("form", { className: CartItem_module_css_1.default.cartProductForm, onSubmit: (e) => e.preventDefault(), children: [(0, jsx_runtime_1.jsxs)("div", { className: CartItem_module_css_1.default.cartProductFormQuantity, children: [(0, jsx_runtime_1.jsx)(SizeMenu_1.default, { productId: product.id, sizes: sizesArr, changeHandler: (size) => setProductSize(size), selectedValue: productSize }), (0, jsx_runtime_1.jsx)("div", { className: CartItem_module_css_1.default.quantityFieldContainer, children: (0, jsx_runtime_1.jsx)(QuantityField_1.default, { productId: product.id, quantity: itemQuantity, changeQuantity: (value) => setItemQuantity(value) }) }), (0, jsx_runtime_1.jsx)("span", { className: CartItem_module_css_1.default.itemPrice, children: `Price: $${itemTotalPrice}` })] }), (0, jsx_runtime_1.jsx)("div", { className: CartItem_module_css_1.default.cartProductFormComment, children: (0, jsx_runtime_1.jsx)("textarea", { id: `comment-item-${product.id}`, placeholder: "Add comment to the item...", name: "cart item comment", value: itemComment, onChange: (e) => setItemComment(e.target.value), rows: 3, cols: 25, maxLength: 150 }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Save", buttonHandler: () => {
                                    if (itemComment.length > 150) {
                                        alert('Comment is too long! Use max 150 characters.');
                                    }
                                    else if (itemComment.length > 0 && itemComment.length <= 150) {
                                        dispatch((0, cartSlice_1.addProductComment)({ cartItemId, comment: itemComment }));
                                        dispatch((0, cartSlice_1.storeCart)());
                                        showToast();
                                    }
                                } })] })] }), (0, jsx_runtime_1.jsx)("button", { className: CartItem_module_css_1.default.removeButton, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTrash, onClick: removeItemHandler, style: { cursor: 'pointer' } }) })] }));
};
exports.default = CartItem;
//# sourceMappingURL=CartItem.js.map