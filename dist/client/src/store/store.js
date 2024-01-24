"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const productListSlice_1 = require("../components/features/ProductList/productListSlice");
const react_redux_1 = require("react-redux");
const cartSlice_1 = require("../components/features/Cart/cartSlice");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        products: productListSlice_1.default,
        cart: cartSlice_1.default,
    },
});
const useAppDispatch = () => (0, react_redux_1.useDispatch)();
exports.useAppDispatch = useAppDispatch;
exports.default = store;
//# sourceMappingURL=store.js.map