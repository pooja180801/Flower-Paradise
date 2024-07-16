import React, { useContext, useState } from 'react'
import './Login.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { StoreContext } from '../context/StoreContext';
import axios from 'axios'


const Login = ({setShowLogin}) => {

  const {url,setToken}=useContext(StoreContext)

    const [currentState,setCurrentState]=useState("Login")
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData(prev=>({...prev,[name]:value}))
    }

    const onLogin=async(e)=>{
      e.preventDefault();
      let newUrl=url;
      if(currentState==="Login"){
        newUrl+="/api/user/login"
      }else{
        newUrl+="/api/user/register"
      }

      const response=await axios.post(newUrl,data)

      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)
      }else{
        alert(response.data.message)
      }

    }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-container'>
        <div className="login-header">
            <h2>{currentState}</h2>
            <IoIosCloseCircleOutline onClick={()=>setShowLogin(false)} className='cross-icon'/>
        </div>
        <div className="login-input">
            {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Username' />}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' />
        </div>
        <button type='submit'>{currentState==="Sign Up"?"Register":"Login"}</button>
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
