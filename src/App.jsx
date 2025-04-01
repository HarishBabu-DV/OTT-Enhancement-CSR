import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Client/Home'
import AdminRoutes from './pages/Admin/AdminRoutes'
import GlobalComponent from './context/GlobalComponent'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <>
        <Toaster position='top-center' richColors />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/admin/*' element={<AdminRoutes />} />
        </Routes>
    </>
  )
}

export default App