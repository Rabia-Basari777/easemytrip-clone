import { createContext, useState } from "react";


export const FlightDetailContext = createContext({ isDropDown: "", setIsDropDown: () => { } });

export const FlightDetailContextProvider = ({children}) => {
    const [isDropDown, setIsDropDown] = useState("");

    return (
        <FlightDetailContext.Provider value={{isDropDown, setIsDropDown}}>
            {children}
        </FlightDetailContext.Provider>
    )
}