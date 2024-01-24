import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Product from '../../../types/Product';

export interface CartState {
  shoppingCart: { quantity: number; product: Product; comment: string }[];
  totalPrice: number | null;
}

const initialState: CartState = {
  shoppingCart: [],
  totalPrice: null,
};

export const storeCart = createAsyncThunk(
  'cart/storeInStorage',
  async (_, { getState }) => {
    const { cart } = getState() as { cart: CartState };
    localStorage.setItem('shoppingCart', JSON.stringify(cart.shoppingCart));
  },
);

export const loadCart = createAsyncThunk('cart/loadFromStorage', async () => {
  const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
  return { shoppingCart };
});

export const resetCartInStorage = createAsyncThunk(
  'cart/removeFromStorage',
  async () => {
    localStorage.removeItem('shoppingCart');
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const alreadyInCart = state.shoppingCart.find(
        (elem) => elem.product.id === action.payload.product.id,
      ); // check if the product is already in the cart
      if (alreadyInCart) {
        alreadyInCart.quantity += action.payload.quantity; // increase by chosen quantity if the item is already in the cart
      } else {
        state.shoppingCart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.shoppingCart = state.shoppingCart.filter(
        (elem) => elem.product.id !== action.payload.product.id,
      );
    },
    changeProductQuantity: (state, action) => {
      const elemToChange = state.shoppingCart.find(
        (elem) => elem.product.id === action.payload.product.id,
      );
      if (elemToChange) elemToChange.quantity = action.payload.quantity;
    },
    addProductComment: (state, action) => {
      const elemToChange = state.shoppingCart.find(
        (elem) => elem.product.id === action.payload.product.id,
      );
      if (elemToChange) elemToChange.comment = action.payload.comment;
    },
    recalculateTotalPrice: (state) => {
      state.totalPrice = state.shoppingCart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      );
    },
    resetCart: (state) => {
      state.shoppingCart = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(storeCart.fulfilled, () => {
      console.log('Shopping cart saved.');
    });
    builder.addCase(storeCart.rejected, (_state, action) => {
      console.error(action.error.message);
    });
    builder.addCase(
      loadCart.fulfilled,
      (
        state,
        action: PayloadAction<{ shoppingCart: CartState['shoppingCart'] }>,
      ) => {
        state.shoppingCart = action.payload.shoppingCart;
      },
    );
    builder.addCase(loadCart.rejected, (state, action) => {
      state.shoppingCart = [];
      console.log(action.error.message);
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  changeProductQuantity,
  addProductComment,
  recalculateTotalPrice,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
