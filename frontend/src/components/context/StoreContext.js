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

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        //usinf for loop bcoz cartitems in object so to iterate over it
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=bouquets_lists.find((product)=>product.id===item);
                totalAmount+=itemInfo.price*cartItems[item]
            }  
        }
        return totalAmount;
    }


    const contextValue={
        bouquets_lists,cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider