import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import "./App.css";
import Product from "./components/Product/Product";
import Homepage from "./components/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  //lifting up state
  //create state to store all products added to cart
  const [cartProducts, setCartProducts] = React.useState([]);
  //create function used by ProductDetail to add item to cart
  function addProductToCart(productToAdd) {
    // console.log(productToAdd);
    let newCart = [];
    //if productToAdd is NOT in cart add with a qty of 1
    //else increment qty of object already in the cart
    //look for this product in cartProducts using find
    const match = cartProducts.find((prod) => prod.id === productToAdd.id);
    // console.log("match", match);
    //if not there match will be undefined which is "falsy"
    if (!match) {
      // console.log("first buy");
      //add to cartProducts with a qty of 1
      //keep everthing in state
      newCart = [...cartProducts, { ...productToAdd, quantity: 1 }];
      console.log("new cart", newCart);
      //replace state with this new cart
      setCartProducts(newCart);
    } else {
      console.log("increase qty");
      updateCartQuantity(match, true);
    }
    //need to add this product to cartProducts
    //spread operator
    // setCartProducts([...cartProducts, productToAdd]);
  }

  //function to increase or decrease qty of a product
  function updateCartQuantity(productToChange, increase) {
    let newqty = productToChange.quantity;
    if (increase) {
      newqty++;
    } else {
      newqty--;
    }
    //create a new cart with this new quantity
    let newCart = cartProducts.map((prod) =>
      prod.id === productToChange.id
        ? { ...productToChange, quantity: newqty }
        : prod
    );
    //replace the state
    setCartProducts(newCart);
  }

  function removeFromCart(productToRemove) {
    // console.log(productToRemove);
    //need to remove this product from cartProducts
    //create new array with everything except this one
    const newCartProducts = cartProducts.filter(
      (item) => item.id !== productToRemove.id
    );
    // console.log(newCartProducts);
    setCartProducts(newCartProducts);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/products" element={<Homepage />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartProducts}
                removeFromCart={removeFromCart}
                updateCartQuantity={updateCartQuantity}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetail addProductToCart={addProductToCart} />}
          />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
