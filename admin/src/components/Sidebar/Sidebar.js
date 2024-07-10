import React from 'react'
import './Sidebar.css'
import { IoAdd } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <IoAdd/>
                <p>Add Items</p>
            </div>
            <div className="sidebar-options">
                <FaClipboardCheck/>
                <p>List Items</p>
            </div>
            <div className="sidebar-options">
                <FaClipboardCheck/>
                <p>Orders</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
