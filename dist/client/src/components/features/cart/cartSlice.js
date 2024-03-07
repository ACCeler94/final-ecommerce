"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeProductSize = exports.resetCart = exports.recalculateTotalPrice = exports.addProductComment = exports.changeProductQuantity = exports.removeFromCart = exports.addToCart = exports.cartSlice = exports.resetCartInStorage = exports.loadCart = exports.storeCart = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    shoppingCart: [],
    totalPrice: null,
};
exports.storeCart = (0, toolkit_1.createAsyncThunk)('cart/storeInStorage', async (_, { getState }) => {
    const { cart } = getState();
    localStorage.setItem('shoppingCart', JSON.stringify(cart.shoppingCart));
});
exports.loadCart = (0, toolkit_1.createAsyncThunk)('cart/loadFromStorage', async () => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    return { shoppingCart };
});
exports.resetCartInStorage = (0, toolkit_1.createAsyncThunk)('cart/removeFromStorage', async () => {
    localStorage.removeItem('shoppingCart');
});
exports.cartSlice = (0, toolkit_1.createSlice)({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const alreadyInCart = state.shoppingCart.find((elem) => elem.product.id === action.payload.product.id &&
                elem.size === action.payload.size);
            if (alreadyInCart) {
                alreadyInCart.quantity += action.payload.quantity;
            }
            else {
                state.shoppingCart.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.shoppingCart = state.shoppingCart.filter((elem) => elem.cartItemId !== action.payload.cartItemId);
        },
        changeProductQuantity: (state, action) => {
            const elemToChange = state.shoppingCart.find((elem) => elem.cartItemId === action.payload.cartItemId);
            if (elemToChange)
                elemToChange.quantity = action.payload.quantity;
        },
        addProductComment: (state, action) => {
            const elemToChange = state.shoppingCart.find((elem) => elem.cartItemId === action.payload.cartItemId);
            if (elemToChange)
                elemToChange.comment = action.payload.comment;
        },
        recalculateTotalPrice: (state) => {
            state.totalPrice = state.shoppingCart.reduce((total, item) => total + item.product.price * item.quantity, 0);
        },
        resetCart: (state) => {
            state.shoppingCart = [];
        },
        changeProductSize: (state, action) => {
            const elemToChange = state.shoppingCart.find((elem) => elem.cartItemId === action.payload.cartItemId);
            if (elemToChange)
                elemToChange.size = action.payload.newSize;
        },
    },
    extraReducers(builder) {
        builder.addCase(exports.storeCart.fulfilled, () => {
            console.log('Shopping cart saved.');
        });
        builder.addCase(exports.storeCart.rejected, (_state, action) => {
            console.error(action.error.message);
        });
        builder.addCase(exports.loadCart.fulfilled, (state, action) => {
            state.shoppingCart = action.payload.shoppingCart;
        });
        builder.addCase(exports.loadCart.rejected, (state, action) => {
            state.shoppingCart = [];
            console.log(action.error.message);
        });
    },
});
_a = exports.cartSlice.actions, exports.addToCart = _a.addToCart, exports.removeFromCart = _a.removeFromCart, exports.changeProductQuantity = _a.changeProductQuantity, exports.addProductComment = _a.addProductComment, exports.recalculateTotalPrice = _a.recalculateTotalPrice, exports.resetCart = _a.resetCart, exports.changeProductSize = _a.changeProductSize;
exports.default = exports.cartSlice.reducer;
//# sourceMappingURL=cartSlice.js.map