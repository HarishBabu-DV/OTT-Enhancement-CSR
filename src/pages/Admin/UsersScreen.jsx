import React from 'react'
import { Link } from 'react-router'

const UsersScreen = () => {
  return (
    <div className='w-full mt-50  h-[30vh] '>
     <Link to={'/admin/users/create'} className=''>signup</Link>
     </div>
  )
}

export default UsersScreen