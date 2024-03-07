"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetState = exports.fetchLogJWT = exports.fetchLogIn = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const productListSlice_1 = require("../productList/productListSlice");
const authApi_1 = require("../../../API/authApi");
const initialState = {
    error: null,
    userId: '',
    status: productListSlice_1.Statuses.Idle,
};
exports.fetchLogIn = (0, toolkit_1.createAsyncThunk)('signIn/fetchLogIn', async (loginData, { rejectWithValue }) => {
    try {
        const response = await authApi_1.default.loginUser(loginData);
        return response.data;
    }
    catch (err) {
        if (err instanceof Error) {
            const axiosError = err;
            if (axiosError && axiosError.response) {
                return rejectWithValue(axiosError.response.data);
            }
        }
    }
});
exports.fetchLogJWT = (0, toolkit_1.createAsyncThunk)('signIn/fetchLogJWT', async (_, { rejectWithValue }) => {
    try {
        const response = await authApi_1.default.loginWithJWT();
        return response.data;
    }
    catch (err) {
        if (err instanceof Error) {
            const axiosError = err;
            if (axiosError && axiosError.response) {
                return rejectWithValue(axiosError.response.data);
            }
        }
    }
});
const signInSlice = (0, toolkit_1.createSlice)({
    name: 'signIn',
    initialState: initialState,
    reducers: {
        resetState: (state) => {
            state.error = null;
            state.userId = '';
            state.status = productListSlice_1.Statuses.Idle;
        },
    },
    extraReducers(builder) {
        builder.addCase(exports.fetchLogIn.pending, (state) => {
            state.error = null;
            state.status = productListSlice_1.Statuses.Pending;
        });
        builder.addCase(exports.fetchLogIn.fulfilled, (state, action) => {
            state.status = productListSlice_1.Statuses.Success;
            state.userId = action.payload.userId;
        });
        builder.addCase(exports.fetchLogIn.rejected, (state, action) => {
            state.status = productListSlice_1.Statuses.Failed;
            state.error = action.payload;
        });
        builder.addCase(exports.fetchLogJWT.fulfilled, (state, action) => {
            state.status = productListSlice_1.Statuses.Success;
            state.userId = action.payload.userId;
        });
    },
});
exports.default = signInSlice.reducer;
exports.resetState = signInSlice.actions.resetState;
//# sourceMappingURL=signInSlice.js.map