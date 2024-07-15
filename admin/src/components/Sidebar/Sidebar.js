import React from 'react'
import './Sidebar.css'
import { IoAdd } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <IoAdd className='icon'/>
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <FaClipboardCheck className='icon'/>
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <FaClipboardCheck className='icon'/>
                <p>Orders</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
