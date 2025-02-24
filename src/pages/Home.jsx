import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
       <h1 className='text-3xl text-semibold'> Home Page</h1>
       <Link to={"/admin"} className='bg-black text-white'>Admin</Link>
    </div>

  )
}

export default Home