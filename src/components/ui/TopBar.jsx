import React, { useContext, useEffect, useState } from 'react'
import { topBarItems } from '../../assets/assets'
import { Link, useLocation } from 'react-router'
import { SideBarContext } from '../../context/SideBarStatus'

const TopBar = () => {
    // State to check if the document is scrolled 
    const [isScrolling,setIsScrolling]=useState(false)

    // Context to find or set sidebar 
    const {isSideBarOpened,setIsSideBarOpened}=useContext(SideBarContext)
    // Hook to retrieve routes 
    const currentLocation=useLocation();
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
        <header className={`${isScrolling ? `shadow-[0_3px_5px_#bababa] backdrop-blur-[7px] top-0 z-50` :`null `}  transition-[top] duration-200 sticky rounded-md  bg-[#383838]`}>
             <div className='flex flex-col gap-1 w-full px-4 py-3'>
                {/* Breadcrumb  */}
                <p className='flex items-center gap-2 text-white'>
                    <span>{<topBarItems.homeIcon />}</span>
                    <span>/</span>
                    <span >
                    {
                        getBreadCrumb(pathname)
                    }
                    </span> 
                </p>

                {/*Current Page, Search Bar, Settings icon , Bell icon*/}
                <div className='flex items-center  justify-end w-full px-8 max-sm:px-0'>
                    {/* Settings and Bell Icon  */}
                    <div className='flex items-center gap-4'>
                        <Link to={'/admin'}>
                            {<topBarItems.settingsIcon className='text-xl text-white'/>}
                        </Link>
                        <Link to={'/admin'}>
                            {<topBarItems.bellIcon className='text-xl text-white'/>}
                        </Link>
                        {
                            <topBarItems.menuIcon className='hidden text-white max-lg:block text-xl'onClick={()=>{
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