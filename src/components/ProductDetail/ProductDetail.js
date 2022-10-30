import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import './ProductDetail.css';

function ProductDetail() {
  console.log("need the param");
  const params = useParams();
  console.log(params.id);
  const [selectedProduct, setSelectedProduct] = React.useState();
  //call the api to get details
  React.useEffect(
    ()=>{
      axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then(res =>{
        console.log(res.data);
        //save this infor into the state
        setSelectedProduct(res.data);
      })
    }, []
  )

  return (
    <div className='productDetail'>
      <img src={selectedProduct?.image} alt={selectedProduct?.title} />
      <div className='productInfo'>
        <h3>{selectedProduct?.title}</h3>
        <p>{selectedProduct?.description}</p>
        <p className='productPrice'>${selectedProduct?.price}</p>

          <button className='addCart'>Add to Cart</button>

      </div>
    </div>
  )
}

export default ProductDetail