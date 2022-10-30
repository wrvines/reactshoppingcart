import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Product from './components/Product/Product';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route exact path='/products' element={<Homepage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='*' element={<Navigate to="/products" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
