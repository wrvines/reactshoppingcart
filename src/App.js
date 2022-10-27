import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Product/Product';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detail' element={<ProductDetail />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
