import React from 'react'
import SideBar from '../../components/SideBar'
import { Outlet } from 'react-router'

const Admin = () => {
  return (
    <section className='max-w-[1792px] w-full h-screen'>
      <SideBar  />
      <main>
        <Outlet />
      </main>
    </section>
  )
}

export default Admin