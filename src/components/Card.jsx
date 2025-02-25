import React from 'react'
import { Link } from 'react-router'

const Card = ({movie}) => {
  return (
    <div className='flex flex-col w-full bg-[#f2f2f2] rounded-xl'>
        <div className='w-full h-[170px] rounded-xl'>
            <img src="https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg" alt="image" className='w-full h-full rounded-t-xl' />
        </div>
        <div className='flex flex-col gap-4 py-4'>
            <h2 className='text-2xl pl-2'>{movie.name}</h2>
            <p className='text-[0.9rem] font-light pl-2'>{movie.description}</p>
            <div className='flex justify-center'>
                <Link className='bg-black text-white px-6 py-2 rounded-lg' to={`/admin/movies/${movie._id}`}>View</Link>
            </div>
        </div>
    </div>
  )
}

export default Card