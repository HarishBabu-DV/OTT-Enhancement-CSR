import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div className='max-w-[1920px] w-full mx-auto '>
        <Outlet />
    </div>
  )
}

export default Layout