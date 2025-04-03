import { createContext, useState } from "react";

export const SideBarContext=createContext({});

const SideBarStatus = ({children}) => {
    const [isSideBarOpened, setIsSideBarOpened] = useState(false);
    return (
        <SideBarContext.Provider value={{ isSideBarOpened,setIsSideBarOpened }}>
            {children}
        </SideBarContext.Provider>
    )
}

export default SideBarStatus
