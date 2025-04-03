import { createContext, useState } from "react";

export const GlobalContext=createContext(null)

const GlobalComponent = ({children}) => {
    // State to check if the sidebar is opened 
    // const [isSideBarOpened, setIsSideBarOpened] = useState(false);
    const [accessToken,setAccessToken]=useState(null);
    const [loggedUserData,setLoggedUserData]=useState({});
    return (
        <GlobalContext.Provider value={{isSideBarOpened,setIsSideBarOpened,accessToken,setAccessToken,loggedUserData,setLoggedUserData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalComponent