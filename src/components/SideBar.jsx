import { Link, useLocation } from 'react-router'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalComponent'
import sideBarItems from '../assets/assets'

const SideBar = () => {
   // Hook to retrieve routes 
   const currentLocation=useLocation();
   const {pathname}=currentLocation;

   // Context to find or set sidebar 
    const {isSideBarOpened,setIsSideBarOpened}=useContext(GlobalContext)
    return (
      <aside className={` max-lg:-left-full  max-lg:ease-in ${isSideBarOpened ?  `max-lg:left-0 max-lg:ease-out` : null}`}>
          <section className='max-lg:flex max-lg:items-center max-lg:justify-between border-b-[1px] max-lg:px-4'>
            <h2 className=' flex justify-center py-4 text-lg font-medium'>Dashboard</h2>
            <div className='hidden max-lg:block'>
            {
              <sideBarItems.closeIcon className='text-2xl' onClick={()=>setIsSideBarOpened(false)}/>
            }
            </div>
              
          </section>
          <nav>
            <ul className='flex flex-col gap-1'> 
              { 
                sideBarItems.navItems.map((navItem)=>(
                  <Link to={`${navItem.pathName}`} className={`flex items-center gap-3 pl-6 py-2 ${pathname ===  navItem.pathName ? `bg-[#f7f7f7]  rounded-md shadow-[0_5px_10px_#bababa]`:null}`}key={navItem.id}>
                    <span className= {`text-lg sidebar-icon-container ${pathname ===  navItem.pathName ? `active-navitem`: null}` }>{<navItem.iconName/>}</span>
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