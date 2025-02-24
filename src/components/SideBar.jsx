import React from 'react'
import { Link } from 'react-router'

const SideBar = () => {
  return (
      <aside className='bg-[#f2f2f2] w-[15%] h-screen fixed left-0 z-10'>
          <div className='flex flex-col pl-4 gap-y-8'>
            <div>
              <h3 className='text-2xl font-medium'>Dashboard</h3>
            </div>
            <nav className='flex flex-col gap-y-6'>
                <Link to={"/admin/users"} className='font-lighter text-gray-500 text-lg'>Users</Link>
                <Link to={"/admin/statistics"} className='font-lighter text-gray-500 text-lg'>Statistics</Link>
                <Link to={"/admin/movies"} className='font-lighter text-gray-500 text-lg'>Movies</Link>
                <Link to={"/admin/updates"} className='font-lighter text-gray-500 text-lg'>Updates</Link>
                <Link to={"/admin/profile"} className='font-lighter text-gray-500 text-lg'>Profile</Link>
            </nav>
          </div>
      </aside>
  )
}

export default SideBar