import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
        <Link className='navlink' to='/products'>Homepage</Link>
        <Link className='navlink' to='/cart'>Cart</Link>
        {/* <Link className='navlink' to='/products/:id'>Product Detail</Link> */}
    </div>
  )
}

export default Navbar