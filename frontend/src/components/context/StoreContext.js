import { createContext } from "react";
import { bouquets_lists } from "../../data/flowerList";

export const  StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const contextValue={
        bouquets_lists
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider