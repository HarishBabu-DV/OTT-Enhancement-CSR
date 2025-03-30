import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalComponent";

const API=axios.create({
    baseURL:'https://restfull-api-nodejs.onrender.com'
})

const getMovies=async ()=>{
   return await API.get('/api/v1/movies');
}

const createMovie = async (createMovieData,accessToken) => {
    return await API.post('/api/v1/movies',createMovieData, { 
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
};

const createUser=async (signUpUserDetails) => {
    return await API.post('/api/v1/auth/signup',signUpUserDetails);
}

const loginUser=async (loginUserDetails) => {
    return await API.post('/api/v1/auth/login',loginUserDetails);
}



export {getMovies,createUser,loginUser,createMovie}