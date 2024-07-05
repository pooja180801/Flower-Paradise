import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#view-collections' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>collections</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
      </ul>
      <div className='navbar-right'>
      <FaSearch/>
          <div className="navbar-cart-icon">
            <Link to='/cart'><FaShoppingCart/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>

      </div>
    </div>
  )
}

export default Navbar
