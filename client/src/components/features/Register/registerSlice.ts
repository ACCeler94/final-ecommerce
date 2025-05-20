import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import authAPI from '../../../API/authApi';
import User from '../../../types/User';
import { Statuses } from '../ProductList/productListSlice';

type State = {
  status: Statuses;
  error: null | SerializedError;
};

export type RegisterState = State;

const initialState: State = {
  status: Statuses.Idle,
  error: null,
};

// thunks
export const register = createAsyncThunk(
  'register/createUser',
  async (userData: User) => {
    const response = await authAPI.registerUser(userData);
    return response.data;
  },
);

const registerSlice = createSlice({
  name: 'register',
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.error = null;
      state.status = Statuses.Idle;
    },
  },
  extraReducers(builder) {
    builder.addCase(register.pending, (state) => {
      state.status = Statuses.Pending;
      state.error = null; // reset error in case of previous failure
    });
    builder.addCase(register.fulfilled, (state) => {
      state.status = Statuses.Success;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = Statuses.Failed;
      state.error = action.error;
    });
  },
});

export default registerSlice.reducer;

export const { resetState } = registerSlice.actions;
