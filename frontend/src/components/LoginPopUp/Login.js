import React, { useState } from 'react'
import './Login.css'
import { IoIosCloseCircleOutline } from "react-icons/io";

const Login = ({setShowLogin}) => {

    const [currentState,setCurrentState]=useState("Login")

  return (
    <div className='login-popup'>
      <form className='login-container'>
        <div className="login-header">
            <h2>{currentState}</h2>
            <IoIosCloseCircleOutline onClick={()=>setShowLogin(false)} className='cross-icon'/>
        </div>
        <div className="login-input">
            {currentState==="Login"?<></>:<input type="text" placeholder='Username' />}
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
        </div>
        <button>{currentState==="Sign Up"?"Register":"Login"}</button>
        <div className="login-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"
        ?<p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Register Here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
    }
        
        
      </form>
    </div>
  )
}

export default Login
