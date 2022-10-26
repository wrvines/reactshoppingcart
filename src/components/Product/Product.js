import React from 'react'
import './Product.css';

function Product(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        <p>{props.category}</p>
        <img className = "product-img" src={props.image} alt={props.title}></img>
    </div>
  )
}

export default Product