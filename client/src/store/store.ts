import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import accountReducer, {
  AccountState,
} from '../components/features/Account/AccountSlice';
import cartReducer, { CartState } from '../components/features/Cart/cartSlice';
import productListReducer, {
  ProductListState,
} from '../components/features/ProductList/productListSlice';
import registerReducer, {
  RegisterState,
} from '../components/features/Register/registerSlice';
import signInReducer, {
  SignInState,
} from '../components/features/SignIn/signInSlice';

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
