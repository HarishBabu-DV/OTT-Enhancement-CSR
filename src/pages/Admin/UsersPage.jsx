import React from 'react'
import { Link } from 'react-router'

const UsersPage = () => {
  return (
    <div className='w-full pl-[15%]'>
      <Link to={'/admin/users/create'}>Create</Link>
    </div>
  )
}

export default UsersPage