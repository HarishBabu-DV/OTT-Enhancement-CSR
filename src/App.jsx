import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Client/Home'
import UsersPage from './pages/Admin/UsersScreen'
import StatisticsPage from './pages/Admin/StatisticsPage'
import MoviesPage from './pages/Admin/MoviesPage'
import UpdatesPage from './pages/Admin/UpdatesPage'
import ProfilePage from './pages/Admin/ProfilePage'
import MoviePage from './pages/Admin/MoviePage'
import CreateMovies from './pages/Admin/CreateMovies'
import CreateUser from './pages/Admin/CreateUser'
import Dashboard from './pages/Admin/Dashboard'

const App = () => {
  return (
    <section className='max-w-[1920px] w-full mx-auto'>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<Dashboard />} >
            {/* <Route path='users'     element={<UsersPage /> } /> */}
            <Route path='users/create' element={<CreateUser />} />
            <Route path='statistics'element={ <StatisticsPage/> } />
            <Route path='movies'    element={<MoviesPage />} />
            <Route path='movies/create'    element={<CreateMovies />} />
            <Route path='movies/:id' element={<MoviePage />}/>
            <Route path='updates'   element={<UpdatesPage />} />
            <Route path='profile'   element={<ProfilePage />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App