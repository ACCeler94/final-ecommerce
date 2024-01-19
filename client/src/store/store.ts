import { configureStore } from '@reduxjs/toolkit';
import productListReducer, {
  ProductListState,
} from '../components/features/ProductList/productListSlice';
import { useDispatch } from 'react-redux';
import cartReducer, { CartState } from '../components/features/Cart/cartSlice';

export type RootState = {
  products: ProductListState;
  cart: CartState;
};

const store = configureStore({
  reducer: {
    products: productListReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
