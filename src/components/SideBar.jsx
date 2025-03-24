import { Link } from 'react-router'
import adminNavItems from '../assets/assets'
import sideBarNavItems from '../assets/assets'

const SideBar = () => {
  return (
          <aside className='bg-[#fdfdfd] w-[15%] fixed  min-h-[90vh] shadow-[0_0_5px_#bababa] flex flex-col gap-6 rounded-lg'>
            <h2 className='border-b-[1px] flex justify-center py-4 text-lg font-medium'>Dashboard</h2>
            <nav>
              <ul className='flex flex-col gap-8 pl-6'> 
                {
                  sideBarNavItems.map((navItem)=>(
                    <Link to={`/admin${navItem.pathName}`} className='flex items-center gap-3' key={navItem.id}>
                      <span className='bg-[#f7f7f7] px-2 py-1 rounded-md shadow-[0_0_3px_#939393]'>{<navItem.iconName className='text-lg' />}</span>
                      <span className='text-gray-500'>{navItem.navItemName}</span>
                    </Link>
                  ))
                }
              </ul>
            </nav>
          </aside>
  )
}

export default SideBar