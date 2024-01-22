import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import productsAPI from '../../../API/productsApi';
import Product from '../../../types/Product';

export enum Statuses {
  Idle = 'idle',
  Pending = 'pending',
  Success = 'success',
  Failed = 'failed',
}

type State = {
  productList: Product[];
  status: Statuses;
  error: null | SerializedError;
  currentProduct: null | Product;
};

export type ProductListState = State;

const initialState: State = {
  productList: [],
  status: Statuses.Idle,
  error: null,
  currentProduct: null,
};

// thunks
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await productsAPI.fetchAll();
    return response.data;
  },
);

export const fetchById = createAsyncThunk(
  'products/fetchById',
  async (id: string) => {
    const response = await productsAPI.fetchById(id);
    return response.data;
  },
);

export const productListSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    resetCurrentProduct: (state) => {
      state.currentProduct = null;
    },
    setCurrentProduct: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
  },
  extraReducers(builder) {
    // fetchAllProducts
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.status = Statuses.Pending;
      state.error = null; // Reset error status in case of previous failure
    });
    builder.addCase(
      fetchAllProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.status = Statuses.Success;
        state.productList = action.payload;
      },
    );
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.status = Statuses.Failed;
      state.error = action.error;
    });

    // fetchById
    builder.addCase(fetchById.pending, (state) => {
      state.status = Statuses.Pending;
      state.error = null; // Reset error status in case of previous failure
    });
    builder.addCase(
      fetchById.fulfilled,
      (state, action: PayloadAction<Product>) => {
        state.status = Statuses.Success;
        state.currentProduct = action.payload;
      },
    );
    builder.addCase(fetchById.rejected, (state, action) => {
      state.status = Statuses.Failed;
      state.error = action.error;
    });
  },
});

export const { resetCurrentProduct, setCurrentProduct } =
  productListSlice.actions;
export default productListSlice.reducer;
