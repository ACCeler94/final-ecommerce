import { configureStore } from '@reduxjs/toolkit';
import productListReducer, {
  ProductListState,
} from '../components/features/ProductList/productListSlice';
import { useDispatch } from 'react-redux';
import cartReducer, { CartState } from '../components/features/Cart/cartSlice';
import registerReducer, {
  RegisterState,
} from '../components/features/Register/registerSlice';

export type RootState = {
  products: ProductListState;
  cart: CartState;
  register: RegisterState;
};

const store = configureStore({
  reducer: {
    products: productListReducer,
    cart: cartReducer,
    register: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
