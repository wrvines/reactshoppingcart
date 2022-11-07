import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css';

function Product(props) {
  return (
    <Link to={`/products/${props.id}`}> 
    <div className='products'>
        <h3 className='productsTitle'>{props.title}</h3>
        <p className='productsPrice'>${props.price}</p>
        <p className='productsCategory'>{props.category}</p>
        <img className = "product-img" src={props.image} alt={props.title}></img>
    </div>
    </Link>
  )
}

export default Product