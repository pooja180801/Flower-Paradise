import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";



const Navbar = ({setShowLogin}) => {

    const navigate=useNavigate();

    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)

    const logout=()=>{
      localStorage.removeItem("token");
      setToken("")
      navigate("/")
    }

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
          {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
          :<div className='navbar-profile'>
            <FaUser className='profile'/>
            <ul className='nav-profile-dropdown'>
              <li><FaShoppingBag className='icons'/><p>Orders</p></li>
              <hr />
              <li onClick={logout}><IoIosLogOut className='icons'/><p>Logout</p></li>
            </ul>
            </div>}
          

      </div>
    </div>
  )
}

export default Navbar
