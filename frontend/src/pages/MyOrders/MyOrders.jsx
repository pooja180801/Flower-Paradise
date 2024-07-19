import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../components/context/StoreContext';
import axios from 'axios';
import { GoPackage } from "react-icons/go";

const MyOrders = () => {
    const [data,setData]=useState([]);
    const {url,token}=useContext(StoreContext)

    const fetchOrders=async()=>{
        const response=await axios.post(url+'/api/order/userorders',{},{headers:{token}})
        setData(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders()
        }
    },[token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index} className='my-orders-order'>
                        <GoPackage className='icons' />
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name+" X "+item.quantity
                            }
                        })}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default MyOrders
