import { MdDashboard } from "react-icons/md";
import { FaUser   } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { MdLocalMovies } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { RiRemoteControlFill } from "react-icons/ri";

//Dashboard navitems
const dashboardNavItems=[
    {
        id:1,
        navItemName:"dashboard",
        iconName:MdDashboard,
        pathName:"/"
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
        pathName:"/controls"
    }
]

export default dashboardNavItems