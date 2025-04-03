import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './Dashboard'
import UsersScreen from './UsersScreen'
import StatisticsScreen from './StatisticsScreen'
import MoviesScreen from './MoviesScreen'
import UpdatesScreen from './UpdatesScreen'
import ControlsScreen from './ControlsScreen'
import ProfileScreen from './ProfileScreen'
import SideBar from '../../components/ui/SideBar'
import TopBar from '../../components/ui/TopBar'
import GlobalComponent from '../../context/GlobalComponent'
import MoviesPage from './MoviesPage'
import CreateMovies from './CreateMovies'
import CreateUser from './CreateUser'
import SignUp from './SignUp'
import Login from './Login'

const AdminRoutes = () => {
  return (
    <>
        
      {/* Context  */}
      <GlobalComponent>
        {/* SideBar  */}
        <SideBar  />
        <div className='flex flex-col ml-[calc(200px+16px+16px)] mr-[16px] max-lg:mx-4 max-md:mx-0'>
          {/* TopBar  */}
          <TopBar />
          {/* Each Section  */}
          <main className='' >
           
          </main>
        </div>  
      </GlobalComponent>
    </>
  )
}

export default AdminRoutes