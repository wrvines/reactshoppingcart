import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [navSearchInput, setNavSearchInput] = React.useState("");

  const handleSearchSubmission = (event) => {
    event.preventDefault(); // stops refresh of page because of the form
    console.log("search");
    console.log(navSearchInput);
    //this needs to be sent to App by "lifting state"
    props.handleProductSearch(navSearchInput);
  };

  function handleNavbarInput(searchInput) {
    if (searchInput !== "") {
      //call the function to pass to the app
      setNavSearchInput(searchInput);
    } else {
      console.log("empty textbox");
      setNavSearchInput(searchInput);
      //call the app function
      props.handleProductSearch("");
    }
  }

  return (
    <div className="navbar">
      <Link className="navlink" to="/products">
        Homepage
      </Link>
      <Link className="navlink" to="/cart">
        Cart
      </Link>
      {/* <Link className='navlink' to='/products/:id'>Product Detail</Link> */}
      <form onSubmit={handleSearchSubmission}>
        <input
          type="text"
          placeholder="search for products"
          value={navSearchInput}
          onChange={(event) => handleNavbarInput(event.target.value)}
          // onChange={(event) => setNavSearchInput(event.target.value)}
        />
        <button>Submit Search</button>
      </form>
    </div>
  );
}

export default Navbar;
