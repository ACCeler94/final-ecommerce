"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const AccountSlice_1 = require("../components/features/Account/AccountSlice");
const cartSlice_1 = require("../components/features/Cart/cartSlice");
const productListSlice_1 = require("../components/features/ProductList/productListSlice");
const registerSlice_1 = require("../components/features/Register/registerSlice");
const signInSlice_1 = require("../components/features/SignIn/signInSlice");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        products: productListSlice_1.default,
        cart: cartSlice_1.default,
        register: registerSlice_1.default,
        signIn: signInSlice_1.default,
        account: AccountSlice_1.default,
    },
});
const useAppDispatch = () => (0, react_redux_1.useDispatch)();
exports.useAppDispatch = useAppDispatch;
exports.default = store;
//# sourceMappingURL=store.js.map