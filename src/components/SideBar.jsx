import { Link } from 'react-router'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalComponent'
import sideBarItems from '../assets/assets'

const SideBar = () => {
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
            <ul className='flex flex-col gap-8 pl-6'> 
              {
                sideBarItems.navItems.map((navItem)=>(
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