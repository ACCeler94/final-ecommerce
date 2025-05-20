import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AccountInfo from './components/features/Account/components/AccountInfo/AccountInfo';
import AccountOrdersList from './components/features/Account/components/AccountOrdersList/AccountOrdersList';
import { loadCart } from './components/features/Cart/cartSlice';
import { fetchLogJWT } from './components/features/SignIn/signInSlice';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import AccountPage from './components/pages/AccountPage/AccountPage';
import CartPage from './components/pages/CartPage/CartPage';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
import CheckoutPage from './components/pages/CheckoutPage/CheckoutPage';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import SignInPage from './components/pages/SignInPage/SignInPage';
import SingleProductPage from './components/pages/SingleProductPage/SingleProductPage';
import { useAppDispatch } from './store/store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Cookies.get('isLogged')) dispatch(fetchLogJWT()); // check if isLogged cookie exists, fetch log in with jwt token if true
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<CheckoutPage />} />
        <Route path="/category">
          <Route path="female" element={<CategoryPage category="Female" />} />
          <Route path="male" element={<CategoryPage category="Male" />} />
        </Route>
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/account/sign-in" element={<SignInPage />} />
        <Route path="/account/register" element={<RegisterPage />} />
        <Route path="/account/my-account" element={<AccountPage />}>
          <Route index element={<Navigate to="orders" />} />
          <Route path="orders" element={<AccountOrdersList />} />
          <Route path="account-info" element={<AccountInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
