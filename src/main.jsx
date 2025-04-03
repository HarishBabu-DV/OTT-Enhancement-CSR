import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <AuthProvider>
        <Toaster position='top-center' richColors />
        <Routes>
          <Route path='/*' element={ <App /> }/>
        </Routes>
      </AuthProvider>
  </BrowserRouter>  
)
