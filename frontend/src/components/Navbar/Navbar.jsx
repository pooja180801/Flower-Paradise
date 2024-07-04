import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home");


  return (
    <div className='navbar'>
      <img src={logo} alt="" className="logo" />
      <ul className='navbar-menu'>
        <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#view-collections' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
      </ul>
      <div className='navbar-right'>
      <FaSearch/>
          <div className="navbar-cart-icon">
            <FaShoppingCart/>
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>

      </div>
    </div>
  )
}

export default Navbar
