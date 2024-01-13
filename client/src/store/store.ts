import { configureStore } from '@reduxjs/toolkit';
import productListReducer, {
  ProductListState,
} from '../components/features/ProductList/productListSlice';
import { useDispatch } from 'react-redux';

export type RootState = {
  products: ProductListState;
};

const store = configureStore({
  reducer: {
    products: productListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
