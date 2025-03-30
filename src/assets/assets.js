import { AiFillHome,AiOutlineInfoCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoSettingsOutline,IoClose,IoAddCircle  } from "react-icons/io5";
import { MdDashboard,MdLocalMovies } from "react-icons/md";
import { FaUser,FaCheck } from "react-icons/fa6";
import { FaBell ,FaUserCircle,FaEye,FaEyeSlash } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { RiRemoteControlFill } from "react-icons/ri";
//TopBar Navitems
export const topBarItems={
    homeIcon:AiFillHome,
    settingsIcon:IoSettingsOutline,
    bellIcon:FaBell,
    menuIcon:CiMenuFries,
    
}
//SideBar Navitems
export const sideBarItems={
    closeIcon:IoClose,
    navItems:[
        {
            id:1,
            navItemName:"dashboard",
            iconName:MdDashboard,
            pathName:"/admin"
        },
        {
            id:2,
            navItemName:"users",
            iconName:FaUser,
            pathName:"/admin/users"
        },
        {
            id:3,
            navItemName:"statistics",
            iconName:FcStatistics,
            pathName:"/admin/statistics"
        },
        {
            id:4,
            navItemName:"movies",
            iconName:MdLocalMovies,
            pathName:"/admin/movies"
        },
        {
            id:5,
            navItemName:"updates",
            iconName:GrUpdate,
            pathName:"/admin/updates"
        },
        {
            id:6,
            navItemName:"controls",
            iconName:RiRemoteControlFill,
            pathName:"/admin/controls"
        },
        {
            id:7,
            navItemName:"profile",
            iconName:FaUserCircle ,
            pathName:"/admin/profile"
        }
    ]
}
//SignUp Page Icons
export const signUpPageIcons={
    infoIcon:AiOutlineInfoCircle,
    viewIcon:FaEye,
    notViewIcon:FaEyeSlash,
    successIcon:FaCheck    
}
//Movies Page Icons
export const moviesPageContents={
    iconContents:{
        searchIcon:BsSearch,
        createIcon:IoAddCircle 
    },
    tableHeadings:[
        'S-No',
        'movie name',
        'ratings',
        'duration',
        'created by',
        'actions'
    ]
}