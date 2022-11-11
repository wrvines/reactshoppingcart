import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./Cart.css";

function Cart(props) {
  //make a function to calculate total of cart
  const cartTotal = () => {
    let total = props.cartProducts.reduce(
      (sum, currentprod) => (sum += currentprod.quantity * currentprod.price),
      0
    );
    // console.log(total);
    return total;
  };
  return (
    <div>
      <h1>Cart</h1>
      {props.cartProducts.map((item) => (
        <div key={item.id} className="cartContainer">
          <img src={item.image} alt={item.title} className="cartImage" />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button onClick={() => props.removeFromCart(item)}>Remove</button>
          <div>
            <p onClick={() => props.updateCartQuantity(item, true)}>+</p>
            <p>Quantity: {item.quantity}</p>
            {item.quantity >= 2 && (
              <p onClick={() => props.updateCartQuantity(item, false)}>-</p>
            )}
          </div>
        </div>
      ))}
      {props.cartProducts.length > 0 && <h3>Total: ${cartTotal()}</h3>}
    </div>
  );
}

export default Cart;
