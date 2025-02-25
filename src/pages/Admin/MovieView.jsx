import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router'

const MovieView = () => {
    const {id}=useParams()
    const [Movie, setMovie] = useState({})
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
      <div className='w-full pl-[50%] h-screen'>
          MovieView
      </div>
    )
}

export default MovieView