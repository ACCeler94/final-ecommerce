import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import './App.css';
import Footer from './components/layout/Footer/Footer';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
import SingleProductPage from './components/pages/SingleProductPage/SingleProductPage';
import CartPage from './components/pages/CartPage/CartPage';
import CheckoutPage from './components/pages/CheckoutPage/CheckoutPage';
import { useAppDispatch } from './store/store';
import { useEffect } from 'react';
import { loadCart } from './components/features/Cart/cartSlice';
import { ToastContainer } from 'react-toastify';
import NotFound from './components/pages/NotFound/NotFound';
import SignInPage from './components/pages/SignInPage/SignInPage';

function App() {
  const dispatch = useAppDispatch();

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
        <Route
          path="/category/female"
          element={<CategoryPage category="Female" />}
        />
        <Route
          path="/category/male"
          element={<CategoryPage category="Male" />}
        />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/account/sign-in" element={<SignInPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
