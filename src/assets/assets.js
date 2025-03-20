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
        navItemName:"users",
        iconName:FaUser
    },
    {
        id:2,
        navItemName:"statistics",
        iconName:FcStatistics
    },
    {
        id:3,
        navItemName:"movies",
        iconName:MdLocalMovies
    },
    {
        id:4,
        navItemName:"updates",
        iconName:GrUpdate
    },
    {
        id:5,
        navItemName:"controls",
        iconName:RiRemoteControlFill
    },
    {
        id:6,
        navItemName:"profile",
        iconName:FaUserCircle 
    }
]

export default dashboardNavItems