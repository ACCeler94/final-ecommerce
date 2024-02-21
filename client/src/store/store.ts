import { configureStore } from '@reduxjs/toolkit';
import productListReducer, {
  ProductListState,
} from '../components/features/productList/productListSlice';
import { useDispatch } from 'react-redux';
import cartReducer, { CartState } from '../components/features/cart/cartSlice';
import registerReducer, {
  RegisterState,
} from '../components/features/register/registerSlice';
import signInReducer, {
  SignInState,
} from '../components/features/signIn/SignInSlice';
import accountReducer, {
  AccountState,
} from '../components/features/account/AccountSlice';

export type RootState = {
  products: ProductListState;
  cart: CartState;
  register: RegisterState;
  signIn: SignInState;
  account: AccountState;
};

const store = configureStore({
  reducer: {
    products: productListReducer,
    cart: cartReducer,
    register: registerReducer,
    signIn: signInReducer,
    account: accountReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
