import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Card from '../../components/Card'
import Table from '../../components/Table'
import { Link } from 'react-router'

const MoviesPage = () => {
  
  const [MoviesList, setMoviesList] = useState([])
  const [IsLoading, setIsLoading] = useState(false)
  // function to retrieve movies 
  const getMovies=async()=>{
    setIsLoading(true)
    const res=await axios.get('https://restfull-api-nodejs.onrender.com/api/v1/movies')
    console.log(res);
    const {data}=res.data
    const {movies} =data
    if(movies){
      setMoviesList(movies)
    }
    setIsLoading(false)
  }
  useEffect(()=>{
    getMovies()
  },[])
  if(IsLoading){
    return <div className='w-full h-dvh flex items-center justify-center'>
        <h3 className='pl-[15%] text-3xl font-light'>Loading...</h3>
      </div>
  }

  return (
    <section  className='w-full pl-[15%] pr-0'>
      <h1 className='text-3xl font-semibold text-center py-2'>Movies</h1>
      <div>
        <input type="search" name="search" id="search" className='border-1 border-gray-300 py-1 px-4 rounded-lg' placeholder='search here' />
        <Link className='bg-[#2b2b2b] text-white px-5 py-1.5 rounded-lg' to={'/admin/movies/create'}>Create</Link>
      </div>
      {/* Movies */}
      <div className='w-full px-12'>
        {
          // MoviesList.map((movie,index)=>(
          //   <Card movie={movie} key={index} />
          // ))
          <Table moviesList={MoviesList}/>
        }
      </div>
    </section >
  )
}

export default MoviesPage