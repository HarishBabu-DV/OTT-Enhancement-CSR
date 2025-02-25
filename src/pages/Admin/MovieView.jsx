import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router'

const MovieView = () => {
    const {id}=useParams()
    const [movie, setMovie] = useState({})
    const [IsLoading, setIsLoading] = useState(false)
    const getMovieData=async ()=> {
        setIsLoading(true)
        const res=await axios.get(`https://restfull-api-nodejs.onrender.com/api/v1/movies/${id}`)
        console.log(res);
        const {data}=res.data
        const {movie} =data
        if(movie){
            setMovie(movie)
        }
        setIsLoading(false)
    }
    useEffect(()=>{
        getMovieData()
    },[])
    if(IsLoading){
        return <div className='w-full h-dvh flex items-center justify-center'>
            <h3 className='pl-[15%] text-3xl font-light'>Loading...</h3>
          </div>
      }
    return (
      <div className='w-full pl-[15%] h-full'>
          <div className='flex flex-col'>
            <div className='w-[600px] h-[300px]'>
                <img src="https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg" alt="" className='w-full h-full object-cover'/>
            </div>
            <p className='text-xl font-light'>
                <span className='font-normal'>Movie Name :</span>  
                {movie.name}
            </p>
            <p className='text-xl font-light'>
                <span className='font-normal'>Created By :</span> 
                {movie.createdBy} 
            </p>
            <p className='text-xl font-light'>
                <span className='font-normal'> Description :</span> 
                {movie.description}
            </p>
            <p className='text-xl font-light'>
                <span className='font-normal'> Directors :</span> 
                
            </p>
          </div>
      </div>
    )
}

export default MovieView