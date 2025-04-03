import { createContext, useState } from "react";

export const SideBarContext=createContext();

const SideBarStatus = ({children}) => {
    const [isSideBarOpened, setIsSideBarOpened] = useState(false);
    return (
        <SideBarStatus.Provider value={{isSideBarOpened,setIsSideBarOpened}}>
            {children}
        </SideBarStatus.Provider>
    )
}

export default SideBarStatus
