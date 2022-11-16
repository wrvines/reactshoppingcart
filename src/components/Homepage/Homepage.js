import React from "react";
import axios from "axios";
import Product from "../Product/Product";
import "./Homepage.css";

function Homepage(props) {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      //console.log(response.data);
      setProducts(response.data);
    });
    // console.log("fetch");
  };

  React.useEffect(() => {
    // console.log("page loaded");
    fetchProducts();
  }, []);

  return (
    <div>
      {/* <button onClick = {fetchProducts}>Fetch Products</button> */}
      <div className="prod-container">
        {products
          .filter((item) =>
            props.productSearchValue === ""
              ? item
              : item.title
                  .toLowerCase()
                  .includes(props.productSearchValue.toLowerCase())
              ? item
              : null
          )
          .map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Homepage;
