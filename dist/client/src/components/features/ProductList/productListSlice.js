"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentProduct = exports.resetCurrentProduct = exports.productListSlice = exports.fetchById = exports.fetchAllProducts = exports.Statuses = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const productsApi_1 = require("../../../API/productsApi");
var Statuses;
(function (Statuses) {
    Statuses["Idle"] = "idle";
    Statuses["Pending"] = "pending";
    Statuses["Success"] = "success";
    Statuses["Failed"] = "failed";
})(Statuses || (exports.Statuses = Statuses = {}));
const initialState = {
    productList: [],
    status: Statuses.Idle,
    error: null,
    currentProduct: null,
};
exports.fetchAllProducts = (0, toolkit_1.createAsyncThunk)('products/fetchAllProducts', async () => {
    const response = await productsApi_1.default.fetchAll();
    return response.data;
});
exports.fetchById = (0, toolkit_1.createAsyncThunk)('products/fetchById', async (id) => {
    const response = await productsApi_1.default.fetchById(id);
    return response.data;
});
exports.productListSlice = (0, toolkit_1.createSlice)({
    name: 'products',
    initialState: initialState,
    reducers: {
        resetCurrentProduct: (state) => {
            state.currentProduct = null;
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(exports.fetchAllProducts.pending, (state) => {
            state.status = Statuses.Pending;
            state.error = null;
        });
        builder.addCase(exports.fetchAllProducts.fulfilled, (state, action) => {
            state.status = Statuses.Success;
            state.productList = action.payload;
        });
        builder.addCase(exports.fetchAllProducts.rejected, (state, action) => {
            state.status = Statuses.Failed;
            state.error = action.error;
        });
        builder.addCase(exports.fetchById.pending, (state) => {
            state.status = Statuses.Pending;
            state.error = null;
        });
        builder.addCase(exports.fetchById.fulfilled, (state, action) => {
            state.status = Statuses.Success;
            state.currentProduct = action.payload;
        });
        builder.addCase(exports.fetchById.rejected, (state, action) => {
            state.status = Statuses.Failed;
            state.error = action.error;
        });
    },
});
_a = exports.productListSlice.actions, exports.resetCurrentProduct = _a.resetCurrentProduct, exports.setCurrentProduct = _a.setCurrentProduct;
exports.default = exports.productListSlice.reducer;
//# sourceMappingURL=productListSlice.js.map