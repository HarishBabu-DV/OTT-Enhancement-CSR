import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router'
import TopBar from './TopBar'
import SideBarStatus from '../../context/SideBarStatus'

const DashboardLayout = () => {
  return (
    <>
        <SideBarStatus>
            {/* SideBar  */}
            <SideBar />   
            <div className='flex flex-col ml-[calc(200px+16px+16px)] mr-[16px] max-lg:mx-4 max-md:mx-0'>
                {/* TopBar  */}
                <TopBar />
                <main>
                    <Outlet />
                </main>
            </div>
        </SideBarStatus>
    </>
  )
}

export default DashboardLayout