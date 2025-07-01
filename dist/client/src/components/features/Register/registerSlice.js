"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetState = exports.register = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const authApi_1 = require("../../../API/authApi");
const productListSlice_1 = require("../ProductList/productListSlice");
const initialState = {
    status: productListSlice_1.Statuses.Idle,
    error: null,
};
exports.register = (0, toolkit_1.createAsyncThunk)('register/createUser', async (userData) => {
    const response = await authApi_1.default.registerUser(userData);
    return response.data;
});
const registerSlice = (0, toolkit_1.createSlice)({
    name: 'register',
    initialState: initialState,
    reducers: {
        resetState: (state) => {
            state.error = null;
            state.status = productListSlice_1.Statuses.Idle;
        },
    },
    extraReducers(builder) {
        builder.addCase(exports.register.pending, (state) => {
            state.status = productListSlice_1.Statuses.Pending;
            state.error = null;
        });
        builder.addCase(exports.register.fulfilled, (state) => {
            state.status = productListSlice_1.Statuses.Success;
        });
        builder.addCase(exports.register.rejected, (state, action) => {
            state.status = productListSlice_1.Statuses.Failed;
            state.error = action.error;
        });
    },
});
exports.default = registerSlice.reducer;
exports.resetState = registerSlice.actions.resetState;
//# sourceMappingURL=registerSlice.js.map