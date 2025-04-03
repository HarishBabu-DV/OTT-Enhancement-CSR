import axios from 'axios'
import React, { useContext, useEffect,useState } from 'react'
import Table from '../../components/ui/Table'
import { Link } from 'react-router'
import { getMovies } from '../../services/api/ApiServices'
import { GlobalContext } from '../../context/GlobalComponent'

const MoviesPage = () => {
  const { loggedUserData,accessToken }=useContext(GlobalContext);
  const [MoviesList, setMoviesList] = useState([])
  const [IsLoading, setIsLoading] = useState(false)
    // console.log(accessToken);
  
  
  // function to retrieve movies 
  const loadMovies=async ()=>{
    setIsLoading(true)
    const res=await getMovies()
    console.log(res);
    const {data}=res.data
    const {movies} =data
    if(movies){
      setMoviesList(movies)
    }
    setIsLoading(false)
  }
  useEffect(()=>{
    loadMovies()
  },[])

  // useEffect(()=>{
  //   console.log(loggedUserData);
  // },[loggedUserData])
  if(IsLoading){
    return <div className='w-full h-dvh flex items-center justify-center'>
        <h3 className=' text-3xl font-light'>Loading...</h3>
      </div>
  }

  return (
    <section  className='w-full'>
      <div className='flex justify-between w-full px-[10%]'>
        <h3 className='text-3xl font-semibold text-center py-2'>Movies</h3>
        
        <h3 className='text-3xl font-semibold text-center py-2'>
          {loggedUserData.name }
        </h3>
      </div>

      {/* Movies List */}
      <div className='w-full px-12'>
        {
          <Table moviesList={MoviesList}/>
        }
      </div>
      <Link to={'/admin/movies/create'} className='bg-black text-white px-4 py-1'>Create Movie</Link>
    </section >
  )
}

export default MoviesPage