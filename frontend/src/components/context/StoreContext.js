import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = ({children}) => {


    const [cartItems,setCartItems]=useState({});
    const url="http://localhost:4000"
    const [token,setToken]=useState(localStorage.getItem("token") || null)
    const [bouquets_lists,setBouquetList]=useState([]);

    console.log("1234",cartItems)


    const addToCart=async(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/addToCart",{itemId},{headers:{token}})
        }
    }

    const removeFromCart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/removeFromCart",{itemId},{headers:{token}})
        }
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        //usinf for loop bcoz cartitems in object so to iterate over it
        for(const item in cartItems){
            if(cartItems[item]>0){
                console.log(bouquets_lists)
                console.log("Current item ID:", item);
                let itemInfo=bouquets_lists.find((product)=>product._id===item);
                console.log("iteminfo",itemInfo)
                totalAmount+=itemInfo.price*cartItems[item]
            }  
        }
        return totalAmount;
    }

    const fetchBouquetList=async()=>{
        const response=await axios.get(url+"/api/bouquet/view")
        setBouquetList(response.data.data)
        console.log(response)
    }

    const loadCartData=async(token)=>{
        const response=await axios.post(url+'/api/cart/getCart',{},{headers:{token}})
        setCartItems(response.data.cartData)
    }

    useEffect(()=>{
        async function loadData(){
            await fetchBouquetList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem())
            }
        }
        loadData();
    },[])

    const contextValue={
        bouquets_lists,cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount,url,token,setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider