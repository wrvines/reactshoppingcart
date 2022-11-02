import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'
import './App.css';
import Product from './components/Product/Product';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';




function App() {

  //lifting up state
  //create state to store all products added to cart
    const [cartProducts, setCartProducts] = React.useState([]);
  //create function used by ProductDetail to add item to cart
  function addProductToCart(productToAdd) {
    console.log(productToAdd);
    //need to add this product to cartProducts
    //spread operator
    setCartProducts([...cartProducts, productToAdd])
  }
  
  function removeFromCart(productToRemove) {
    console.log(productToRemove);
    //need to remove this product from cartProducts
    //create new array with everything except this one
    const newCartProducts = cartProducts.filter(item => item.id !== productToRemove.id)
    console.log(newCartProducts);
    setCartProducts(newCartProducts);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route exact path='/products' element={<Homepage />} />
          <Route path='/cart' element={<Cart cartProducts={cartProducts} removeFromCart={removeFromCart} />} />
          <Route path='/products/:id' element={<ProductDetail addProductToCart={addProductToCart} />} />
          <Route path='*' element={<Navigate to="/products" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
