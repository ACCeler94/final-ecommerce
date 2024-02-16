import { configureStore } from '@reduxjs/toolkit';
import productListReducer, {
  ProductListState,
} from '../components/features/ProductList/productListSlice';
import { useDispatch } from 'react-redux';
import cartReducer, { CartState } from '../components/features/Cart/cartSlice';
import registerReducer, {
  RegisterState,
} from '../components/features/Register/registerSlice';
import signInReducer, {
  SignInState,
} from '../components/features/SignIn/SignInSlice';

export type RootState = {
  products: ProductListState;
  cart: CartState;
  register: RegisterState;
  signIn: SignInState;
};

const store = configureStore({
  reducer: {
    products: productListReducer,
    cart: cartReducer,
    register: registerReducer,
    signIn: signInReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
