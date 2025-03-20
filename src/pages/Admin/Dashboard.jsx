import React from 'react'
import SideBar from '../../components/SideBar'
import { Outlet,Routes, Route } from 'react-router'
import UsersScreen from './UsersScreen'

const Dashboard = () => {
  return (
    <>
      {/* SideBar  */}
      <SideBar  />      
      <main className='w-full max-w-[1920px] mx-auto bg-[#f7f7f7]'>
       
      </main>
    </>
  )
}

export default Dashboard