import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Client/Home'
import AdminRoutes from './pages/Admin/AdminRoutes'

const App = () => {
  return (
    <section className='max-w-[1920px] w-full mx-auto'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>
    </section>
  )
}

export default App