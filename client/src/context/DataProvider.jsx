import { createContext,useState } from "react";

export const DataContext = createContext(null);
export default function DataProvider({children}){
    const[details,setDetails] = useState('');

    return(
        <DataContext.Provider value={{
            details,setDetails
        }} >
            {children}
        </DataContext.Provider>
    )
}