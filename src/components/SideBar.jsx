import React from 'react'
import { Link } from 'react-router'
import dashboardNavItems from '../assets/assets'

const SideBar = () => {
  return (
      <aside className=''>
          <div className='bg-[#fdfdfd] w-[15%] min-h-[90%] fixed top-[5%] left-[15px] z-40 shadow-[0_0_5px_#bababa] flex flex-col gap-6 rounded-lg'>
            <h2 className='border-b-[1px] flex justify-center py-4 text-lg font-medium'>Dashboard</h2>
            <nav>
              <ul className='flex flex-col gap-8 pl-6'>
                {
                  dashboardNavItems.map((navItem)=>(
                    <Link to={'/admin/users'} className='flex items-center gap-3'>
                      <span className='bg-[#f7f7f7] px-2 py-1 rounded-md shadow-[0_0_3px_#939393]'>{<navItem.iconName className='text-lg' />}</span>
                      <span className='text-gray-500'>{navItem.navItemName}</span>
                    </Link>
                  ))
                }
              </ul>
            </nav>
          </div>
      </aside>
  )
}

export default SideBar