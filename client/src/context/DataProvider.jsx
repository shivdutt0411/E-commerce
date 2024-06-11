import { createContext,useState } from "react";

export const DataContext = createContext(null);
export default function DataProvider({children}){
    const[details,setDetails] = useState({});
    const[cartItems, setCartItems] = useState([]);


    return(
        <DataContext.Provider value={{
            details,setDetails,cartItems,setCartItems
        }} >
            {children}
        </DataContext.Provider>
    )
}
