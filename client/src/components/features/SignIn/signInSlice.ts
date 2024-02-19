import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../ProductList/productListSlice';
import authAPI from '../../../API/authApi';
import LoginData from '../../../types/LoginData';
import { AxiosError } from 'axios';

type State = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  userId: string;
  status: Statuses;
};

const initialState: State = {
  error: null,
  userId: '',
  status: Statuses.Idle,
};

export type SignInState = State;

// thunks
export const fetchLogIn = createAsyncThunk(
  'signIn/fetchLogIn',
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const response = await authAPI.loginUser(loginData);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        const axiosError = err as AxiosError;
        if (axiosError && axiosError.response) {
          return rejectWithValue(axiosError.response.data);
        }
      }
    }
  },
);

export const fetchLogJWT = createAsyncThunk(
  'signIn/fetchLogJWT',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.loginWithJWT();
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        const axiosError = err as AxiosError;
        if (axiosError && axiosError.response) {
          return rejectWithValue(axiosError.response.data);
        }
      }
    }
  },
);

const signInSlice = createSlice({
  name: 'signIn',
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.error = null;
      state.userId = '';
      state.status = Statuses.Idle;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchLogIn.pending, (state) => {
      state.error = null;
      state.status = Statuses.Pending;
    });
    builder.addCase(fetchLogIn.fulfilled, (state, action) => {
      state.status = Statuses.Success;
      state.userId = action.payload.userId;
    });
    builder.addCase(fetchLogIn.rejected, (state, action) => {
      state.status = Statuses.Failed;
      state.error = action.payload;
    });
    builder.addCase(fetchLogJWT.pending, (state) => {
      state.error = null;
      state.status = Statuses.Pending;
    });
    builder.addCase(fetchLogJWT.fulfilled, (state, action) => {
      // handle only success to not cause errors when trying to log in, no loading state as it is trying to log in in the background
      state.status = Statuses.Success;
      state.userId = action.payload.userId;
    });
    builder.addCase(fetchLogJWT.rejected, (state, action) => {
      state.status = Statuses.Failed;
      state.error = action.payload;
    });
  },
});

export default signInSlice.reducer;

export const { resetState } = signInSlice.actions;
