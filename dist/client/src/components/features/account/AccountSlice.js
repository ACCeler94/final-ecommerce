"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetState = exports.fetchAccountData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const productListSlice_1 = require("../productList/productListSlice");
const usersApi_1 = require("../../../API/usersApi");
const initialState = {
    status: productListSlice_1.Statuses.Idle,
    error: null,
};
exports.fetchAccountData = (0, toolkit_1.createAsyncThunk)('account/fetchAccountData', async () => {
    const response = await usersApi_1.default.fetchUserData();
    return response.data;
});
const accountSlice = (0, toolkit_1.createSlice)({
    name: 'account',
    initialState: initialState,
    reducers: {
        resetState: (state) => {
            state.error = null;
            state.status = productListSlice_1.Statuses.Idle;
        },
    },
    extraReducers(builder) {
        builder.addCase(exports.fetchAccountData.pending, (state) => {
            state.error = null;
            state.status = productListSlice_1.Statuses.Pending;
        });
        builder.addCase(exports.fetchAccountData.fulfilled, (state) => {
            state.status = productListSlice_1.Statuses.Success;
        });
        builder.addCase(exports.fetchAccountData.rejected, (state, action) => {
            state.status = productListSlice_1.Statuses.Failed;
            state.error = action.error;
        });
    },
});
exports.resetState = accountSlice.actions.resetState;
exports.default = accountSlice.reducer;
//# sourceMappingURL=AccountSlice.js.map