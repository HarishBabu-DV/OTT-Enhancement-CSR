import React from 'react'
import { Route, Routes } from 'react-router'
import { Toaster } from 'sonner'
import RequireAuth from './components/RequireAuth'
import Login from './pages/Admin/Login'
import Dashboard from './pages/Admin/Dashboard'
import UsersScreen from './pages/Admin/UsersScreen'
import StatisticsScreen from './pages/Admin/StatisticsScreen'
import MoviesScreen from './pages/Admin/MoviesScreen'
import UpdatesScreen from './pages/Admin/UpdatesScreen'
import ControlsScreen from './pages/Admin/ControlsScreen'
import ProfileScreen from './pages/Admin/ProfileScreen'
import CreateMovies from './pages/Admin/CreateMovies'
import SignUp from './pages/Admin/SignUp'
import Layout from './components/ui/Layout'
import DashboardLayout from './components/ui/DashboardLayout'
import NotFound from './pages/Admin/NotFound'
const App = () => {
  return (
    <>
            <Routes>
              <Route path='/' element={<Layout />} >
                {/* Public Routes  */}
                <Route path='/login' element={<Login />}/>
                
                {/* Private Routes  */}
                <Route element={<RequireAuth />}>
                  <Route path='/' element={<DashboardLayout />}>
                    <Route path='/dashboard' element={<Dashboard />}/>
                    <Route path='/users' element={<UsersScreen />}/>
                    <Route path='/users/create' element={<SignUp />}/>
                    <Route path='/statistics' element={<StatisticsScreen />}/>
                    <Route path='/movies' element={<MoviesScreen />}/>
                    <Route path='/movies/create' element={<CreateMovies />}/>
                    <Route path='/updates' element={<UpdatesScreen />}/>
                    <Route path='/controls' element={<ControlsScreen />}/>
                    <Route path='/profile' element={<ProfileScreen />}/> 
                  </Route>
                </Route>

                <Route path='*' element={<NotFound />}/>
              </Route>
              </Routes>
    </>
  )
}

export default App