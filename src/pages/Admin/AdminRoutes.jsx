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
import GlobalComponent from '../../context/GlobalComponent'
import MoviesPage from './MoviesPage'
import CreateMovies from './CreateMovies'
import CreateUser from './CreateUser'
import SignUp from './SignUp'
import Login from './Login'

const AdminRoutes = () => {
  return (
    <>
    <div className='max-w-[1920px] w-full mx-auto '>    
      {/* Context  */}
      <GlobalComponent>
        {/* SideBar  */}
        <SideBar  />
        <div className='flex flex-col ml-[calc(200px+16px+16px)] mr-[16px] max-lg:mx-4 max-md:mx-0'>
          {/* TopBar  */}
          <TopBar />
          {/* Each Section  */}
          <main className='' >
            <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/users' element={<UsersScreen />}/>
                <Route path='/users/create' element={<SignUp />}/>
                <Route path='/users/login' element={<Login />} />
                <Route path='/statistics' element={<StatisticsScreen />}/>
                <Route path='/movies' element={<MoviesScreen />}/>
                <Route path='/movies/create' element={<CreateMovies />}/>
                <Route path='/updates' element={<UpdatesScreen />}/>
                <Route path='/controls' element={<ControlsScreen />}/>
                <Route path='/profile' element={<ProfileScreen />}/> 
            </Routes>
          </main>
        </div>  
      </GlobalComponent>
    </div>      
    </>
  )
}

export default AdminRoutes