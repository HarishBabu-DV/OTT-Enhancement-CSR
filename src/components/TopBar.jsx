import React from 'react'
import { topBarNavItems } from '../assets/assets'
import { Link, useLocation } from 'react-router'

const TopBar = () => {
    const currentLocation=useLocation();
    console.log(currentLocation);
    const {pathname}=currentLocation;
    const getBreadCrumb=(currentPathname)=>{
        if(currentPathname.startsWith('/admin') && currentPathname !=='/admin'){
            const modifiedPathName=currentPathname.replaceAll('/admin/',"")
            return modifiedPathName
        }else{
            const modifiedPathName='dashboard'
            return modifiedPathName
        }
    }
    return (
        <header className='ml-[400px]'>
             <div>
                {/* Breadcrumb  */}
                <p className='flex items-center gap-2'>
                    <span>{<topBarNavItems.homeIcon />}</span>
                    <span>/</span>
                    <span>
                    {
                        getBreadCrumb(pathname)
                    }
                    </span> 
                </p>

                {/* Search Bar, Settings icon , Bell icon*/}
                <div >
                    <p className='capitalize'>{ getBreadCrumb(pathname) }</p>
                    <div>
                        <input type="search" name="" id="" />
                        { 
                            <topBarNavItems.searchIcon />
                        }
                        <Link>{<topBarNavItems.settingsIcon />}</Link>
                        <Link>{<topBarNavItems.bellIcon />}</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopBar