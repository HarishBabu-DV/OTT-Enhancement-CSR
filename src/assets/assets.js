import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoSettingsOutline,IoClose } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaUser   } from "react-icons/fa6";
import { FaBell ,FaUserCircle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { MdLocalMovies } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { RiRemoteControlFill } from "react-icons/ri";
//TopBar Navitems
export const topBarItems={
    homeIcon:AiFillHome,
    searchIcon:BsSearch,
    settingsIcon:IoSettingsOutline,
    bellIcon:FaBell,
    menuIcon:CiMenuFries,
    
}
//SideBar Navitems
const sideBarItems={
    closeIcon:IoClose,
    navItems:[
        {
            id:1,
            navItemName:"dashboard",
            iconName:MdDashboard,
            pathName:""
        },
        {
            id:2,
            navItemName:"users",
            iconName:FaUser,
            pathName:"/users"
        },
        {
            id:3,
            navItemName:"statistics",
            iconName:FcStatistics,
            pathName:"/statistics"
        },
        {
            id:4,
            navItemName:"movies",
            iconName:MdLocalMovies,
            pathName:"/movies"
        },
        {
            id:5,
            navItemName:"updates",
            iconName:GrUpdate,
            pathName:"/updates"
        },
        {
            id:6,
            navItemName:"controls",
            iconName:RiRemoteControlFill,
            pathName:"/controls"
        },
        {
            id:7,
            navItemName:"profile",
            iconName:FaUserCircle ,
            pathName:"/profile"
        }
    ]
}
export default sideBarItems