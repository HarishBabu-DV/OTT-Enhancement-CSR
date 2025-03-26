import axios from "axios";

const API=axios.create({
    baseURL:'https://restfull-api-nodejs.onrender.com/'
})
const getMovies=async ()=>{
    const response=await API.get('api/v1/movies');
    return response
}

export default getMovies