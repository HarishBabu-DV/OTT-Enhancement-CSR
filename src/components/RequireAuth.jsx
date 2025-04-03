import { Outlet, Navigate } from 'react-router'
import useAuth from '../hooks/useAuth'

const RequireAuth = () => {
    const { auth }=useAuth()
   console.log(auth);
   
    return (
         auth?.user
         ? <Outlet /> 
         : <Navigate to={'/login'}/>
    )
}

export default RequireAuth