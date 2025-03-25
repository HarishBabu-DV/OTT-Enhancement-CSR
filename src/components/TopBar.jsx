import React, { useContext, useEffect, useState } from 'react'
import { topBarItems } from '../assets/assets'
import { Link, useLocation } from 'react-router'
import { GlobalContext } from '../context/GlobalComponent'

const TopBar = () => {
    // State to check if the document is scrolled 
    const [isScrolling,setIsScrolling]=useState(false)

    // Context to find or set sidebar 
    const {isSideBarOpened,setIsSideBarOpened}=useContext(GlobalContext)
    // Hook to retrieve routes 
    const currentLocation=useLocation();
    console.log(currentLocation);
    const {pathname}=currentLocation;
    
    // Function to retrieve Breadcrumb 
    const getBreadCrumb=(currentPathname)=>{
        if(currentPathname.startsWith('/admin') && currentPathname !=='/admin'){
            const modifiedPathName=currentPathname.replaceAll('/admin/',"")
            return modifiedPathName
        }else{
            const modifiedPathName='dashboard'
            return modifiedPathName
        }
    }

    useEffect(()=>{
        // Function to handle scroll event 
        const handleOnScroll=()=>{
            if(window.scrollY > 15){
                setIsScrolling(true)
            }
            else{
                setIsScrolling(false)
            }
        }
        document.addEventListener('scroll',handleOnScroll)
        return ()=>document.removeEventListener('scroll',handleOnScroll)
    },[])
    return (
        <header className={`${isScrolling ? `bg-[#ffffffce] shadow-[0_0_5px_#9e9e9e] backdrop-blur-[7px] top-[5px] z-50` :`top-[15px]`}  transition-[top] duration-200 sticky rounded-md `}>
             <div className='flex flex-col w-full px-4 py-2'>
                {/* Breadcrumb  */}
                <p className='flex items-center gap-2'>
                    <span>{<topBarItems.homeIcon />}</span>
                    <span>/</span>
                    <span >
                    {
                        getBreadCrumb(pathname)
                    }
                    </span> 
                </p>

                {/*Current Page, Search Bar, Settings icon , Bell icon*/}
                <div className='flex items-center  justify-between w-full px-8 max-sm:px-4'>
                    {/* Current Page */}
                    <p className='capitalize w-[10%] max-sm:w-full font-medium'>{ getBreadCrumb(pathname) }</p>

                     {/* Search Bar */}
                    <label htmlFor='toggleSearchBox' className='flex items-center gap-4 w-[350px] max-sm:hidden'>
                        <div className='flex items-center border-[2px] border-gray-400 rounded-sm py-1 bg-white w-full'>
                            <div  className='px-3'>
                                { 
                                    <topBarItems.searchIcon/>
                                }
                            </div>
                            <input type="search" name="" id="toggleSearchBox" placeholder='Search here' className='outline-0'/>
                        </div>
                    </label>

                    {/* Settings and Bell Icon  */}
                    <div className='flex items-center gap-4'>
                        <Link to={'/admin'}>
                            {<topBarItems.settingsIcon className='text-xl'/>}
                        </Link>
                        <Link to={'/admin'}>
                            {<topBarItems.bellIcon className='text-xl'/>}
                        </Link>
                        {
                            <topBarItems.menuIcon className='hidden max-lg:block text-xl'onClick={()=>{
                            setIsSideBarOpened(!isSideBarOpened)
                            }} />
                        }
    
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopBar