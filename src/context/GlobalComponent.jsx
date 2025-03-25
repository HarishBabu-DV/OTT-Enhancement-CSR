import { createContext, useState } from "react";

export const GlobalContext=createContext(null)

const GlobalComponent = ({children}) => {
    // State to check if the sidebar is opened 
    const [isSideBarOpened, setIsSideBarOpened] = useState(false);
    return (
        <GlobalContext.Provider value={{isSideBarOpened,setIsSideBarOpened}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalComponent