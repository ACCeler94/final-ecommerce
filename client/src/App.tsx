import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import './App.css';
import Footer from './components/layout/Footer/Footer';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
import SingleProductPage from './components/pages/SingleProductPage/SingleProductPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/female"
          element={<CategoryPage category="Female" />}
        />
        <Route
          path="/category/male"
          element={<CategoryPage category="Male" />}
        />
        <Route path="/product/:productId" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
