import React, { useEffect, useState } from 'react'
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
    const [isScrolling,setIsScrolling]=useState(false)
    
    useEffect(()=>{
        const handleOnScroll=()=>{
            if(window.scrollY >= 15.1){
                setIsScrolling(true)
                console.log(window.scrollY);
            }
            else{
                setIsScrolling(false)
            }
            console.log(isScrolling);
            
        }
        document.addEventListener('scroll',handleOnScroll)
        return ()=>document.removeEventListener('scroll',handleOnScroll)
    },[])
    return (
        <header className='ml-[calc(210px+10px)] sticky top-0'>
             <div className='flex flex-col gap-2 w-full px-4 py-2'>
                {/* Breadcrumb  */}
                <p className='flex items-center gap-2'>
                    <span>{<topBarNavItems.homeIcon />}</span>
                    <span>/</span>
                    <span >
                    {
                        getBreadCrumb(pathname)
                    }
                    </span> 
                </p>

                {/* Search Bar, Settings icon , Bell icon*/}
                <div className='flex items-center justify-between w-full px-8'>
                    <p className='capitalize w-[10%] font-medium'>{ getBreadCrumb(pathname) }</p>
                    <label htmlFor='toggleSearchBox' className='flex items-center gap-4 w-[350px]'>
                        <div className='flex items-center border-[2px] border-gray-400 rounded-sm py-1 bg-white w-full'>
                            <div  className='px-3'>
                                { 
                                    <topBarNavItems.searchIcon/>
                                }
                            </div>
                            <input type="search" name="" id="toggleSearchBox" placeholder='Search here' className='outline-0'/>
                        </div>
                    </label>
                    <div className='flex items-center gap-4'>
                        <Link to={'/admin'}>
                            {<topBarNavItems.settingsIcon className='text-xl'/>}
                        </Link>
                        <Link to={'/admin'}>
                            {<topBarNavItems.bellIcon className='text-xl'/>}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopBar