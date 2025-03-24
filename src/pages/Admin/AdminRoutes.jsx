import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './Dashboard'
import UsersScreen from './UsersScreen'
import StatisticsScreen from './StatisticsScreen'
import MoviesScreen from './MoviesScreen'
import UpdatesScreen from './UpdatesScreen'
import ControlsScreen from './ControlsScreen'
import ProfileScreen from './ProfileScreen'
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'

const AdminRoutes = () => {
  return (
    <>
    <main className='max-w-[1920px] w-full mx-auto bg-[#f7f7f7]'>    
      {/* SideBar  */}
      <SideBar  />  
      <TopBar />
      {/* Each Section  */}
      <section className=' ml-[15%]'>
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/users' element={<UsersScreen />}/>
            <Route path='/statistics' element={<StatisticsScreen />}/>
            <Route path='/movies' element={<MoviesScreen />}/>
            <Route path='/updates' element={<UpdatesScreen />}/>
            <Route path='/controls' element={<ControlsScreen />}/>
            <Route path='/profile' element={<ProfileScreen />}/> 
        </Routes>
      </section>
    </main>      
    </>
  )
}

export default AdminRoutes