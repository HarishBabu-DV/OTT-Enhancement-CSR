import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='w-full h-dvh flex flex-col items-center justify-center gap-y-6'>
       <h1 className='text-3xl text-semibold'> Home Page</h1>
       <Link to={"/admin"} className='bg-black text-white px-4 py-2 text-lg rounded-lg'>Admin</Link>
    </div>

  )
}

export default Home