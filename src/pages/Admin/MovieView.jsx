import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router'

const MovieView = () => {

    const para=useParams()
    console.log(para);
    
    const [Movie, setMovie] = useState({})
    const [IsLoading, setIsLoading] = useState(false)
    const getMovieData=async ()=> {
        setIsLoading(true)
        const res=await axios.get(`https://restfull-api-nodejs.onrender.com/api/v1/movies/${id}`)
        console.log(res);
        
    }
    
    useEffect(()=>{
        getMovieData()
    },[])
    return (
      <div className='w-full pl-[50%]'>
          MovieView
      </div>
    )
}

export default MovieView