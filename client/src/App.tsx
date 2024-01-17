import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import './App.css';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
