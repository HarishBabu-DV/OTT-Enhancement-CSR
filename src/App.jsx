import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Client/Home'
import Admin from './pages/Admin/Admin'
import UsersSection from './sections/AdminPageSections/UsersSection'
import StatisticsSection from './sections/AdminPageSections/StatisticsSection'
import MoviesSection from './sections/AdminPageSections/MoviesSection'
import UpdatesSection from './sections/AdminPageSections/UpdatesSection'
import ProfileSection from './sections/AdminPageSections/ProfileSection'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/admin' element={<Admin />} >
          <Route path='users'     element={<UsersSection />} />
          <Route path='statistics'element={ <StatisticsSection/> } />
          <Route path='movies'    element={<MoviesSection />} >
            
          </Route>
          <Route path='updates'   element={<UpdatesSection />} />
          <Route path='profile'   element={<ProfileSection />} />

      </Route>
    </Routes>
  )
}

export default App