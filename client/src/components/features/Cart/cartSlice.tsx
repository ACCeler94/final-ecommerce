import { createSlice } from '@reduxjs/toolkit';
import Product from '../../../types/Product';

interface CartState {
  cart: { quantity: number; product: Product }[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (elem) => elem.product.id !== action.payload.product.id,
      );
    },
    changeProductQuantity: (state, action) => {
      const elemToChange = state.cart.find(
        (elem) => elem.product.id === action.payload.product.id,
      );
      if (elemToChange) elemToChange.quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, changeProductQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
