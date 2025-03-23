import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Client/Home'
import UsersPage from './pages/Admin/UsersScreen'
import StatisticsPage from './pages/Admin/StatisticsScreen'
import MoviesPage from './pages/Admin/MoviesPage'
import UpdatesPage from './pages/Admin/UpdatesScreen'
import ProfilePage from './pages/Admin/ProfileScreen'
import MoviePage from './pages/Admin/MoviePage'
import CreateMovies from './pages/Admin/CreateMovies'
import CreateUser from './pages/Admin/CreateUser'
import Dashboard from './pages/Admin/Dashboard'
import UsersScreen from './pages/Admin/UsersScreen'
import AdminRoutes from './pages/Admin/AdminRoutes'

const App = () => {
  return (
    <section className='max-w-[1920px] w-full mx-auto'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<AdminRoutes />} />
      </Routes>
    </section>
  )
}

export default App