import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import usersAPI from '../../../API/usersApi';
import { Statuses } from '../ProductList/productListSlice';

type State = {
  status: Statuses;
  error: null | SerializedError;
};

export type AccountState = State;

const initialState: State = {
  status: Statuses.Idle,
  error: null,
};

// thunks
export const fetchAccountData = createAsyncThunk(
  'account/fetchAccountData',
  async () => {
    const response = await usersAPI.fetchUserData();
    return response.data;
  },
);

const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.error = null;
      state.status = Statuses.Idle;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAccountData.pending, (state) => {
      state.error = null;
      state.status = Statuses.Pending;
    });
    builder.addCase(fetchAccountData.fulfilled, (state) => {
      state.status = Statuses.Success;
    });
    builder.addCase(fetchAccountData.rejected, (state, action) => {
      state.status = Statuses.Failed;
      state.error = action.error;
    });
  },
});

export const { resetState } = accountSlice.actions;
export default accountSlice.reducer;
