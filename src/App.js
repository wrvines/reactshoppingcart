import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Product/Product';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Homepage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
