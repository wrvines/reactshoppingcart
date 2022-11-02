import React from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import "./Cart.css";

function Cart(props) {
  return (
    <div>
        <h1>Cart</h1>
          {
            props.cartProducts.map(item => 
                
                  <div key={item.id} className='cartContainer'>
                    <img src={item.image} alt={item.title} className='cartImage'/>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <button onClick={()=>props.removeFromCart(item)}>Remove</button>
                  </div>
                           
              )
          }
    </div>
  )
}

export default Cart