import { createContext, useEffect, useState } from "react";
import { bouquets_lists } from "../../data/flowerList";

export const StoreContext = createContext(null)

const StoreContextProvider = ({children}) => {


    const [cartItems,setCartItems]=useState({});

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    const contextValue={
        bouquets_lists,cartItems,setCartItems,addToCart,removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider