import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'><img src={logo} alt="" className="logo" /></Link>
        <FaUser className='profile'/>
        
      
    </div>
  )
}

export default Navbar
