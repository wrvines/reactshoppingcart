import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
        <Link className='navlink' to='/'>Homepage</Link>
        <Link className='navlink' to='/cart'>Cart</Link>
        <Link className='navlink' to='/detail'>Product Detail</Link>
    </div>
  )
}

export default Navbar