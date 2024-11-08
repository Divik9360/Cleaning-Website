import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import Info from '../Information/Info'


const Navbar = () => {
  return (
    
    <div>
    <Info/>
    <div className='navbar' id='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>amiso</p>
        </div>
        <ul className='nav-menu'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PAGES</li>
            <li>GALLERY</li>
            <li>BLOG</li>
            <li>CONTACT</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
