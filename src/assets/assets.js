import { AiFillHome,AiOutlineInfoCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoSettingsOutline,IoClose  } from "react-icons/io5";
import { MdDashboard,MdLocalMovies,MdAdd ,MdDelete  } from "react-icons/md";
import { FaUser,FaCheck,FaRegFolderOpen  } from "react-icons/fa6";
import { FaBell ,FaUserCircle,FaEye,FaEyeSlash,FaEdit   } from "react-icons/fa";
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
            pathName:"/dashboard"
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
        createIcon:MdAdd,
        retrieveIcon:FaRegFolderOpen,
        editIcon:FaEdit ,
        deleteIcon:MdDelete
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
//Users Page Icons
export const userPageContents={
    usersPageIcons:{
        userIcon:FaUserCircle
    },
    usersCategory:[
        'all',
        'user',
        'admin'
    ]
}

export const createMoviesPageContents={
    directorOptions:[ 
        {
            value:"vijay",label:"Vijay"
        },
        {
            value:"ajith",label:"Ajith"
        },
        {
            value:"vikram",label:"Vikram"
        },
        {
            value:"surya",label:"Surya"
        },
        {
            value:"sk",label:"SK"
        }
    ],
    genreOptions:[
        {
            value:"action",label:"Action"
        },
        {
            value:"romance",label:"Romance"
        },
        {
            value:"comedy",label:"Comedy"
        },
        {
            value:"thriller",label:"Thriller"
        },
        {
            value:"mystery",label:"Mystery"
        }
    ]
}