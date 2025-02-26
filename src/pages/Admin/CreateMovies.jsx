import React, { useState } from 'react'
import Select from 'react-select';
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
const CreateMovies = () => {
  
   const [moviesData,setMoviesData]=useState({
    movieName:"",
    movieDescription:"",
    movieDuration:"",
    movieRatings:"",
    movieTotalRatings:"",
    movieReleaseDate:"",
    movieReleaseYear:"",
    movieDirectors:[],
    movieGenre:[]
   })
   console.log(moviesData);
   
   const directorOptions=[
    {
        value:"vijay",label:"Vijay"
    },
    {
        value:"ajith",label:"Ajith"
    },
    {
        value:"vikram",label:"Vikram"
    },
    {
        value:"surya",label:"Surya"
    },
    {
        value:"sk",label:"SK"
    }
   ]

   const genreOptions=[
    {
        value:"action",label:"Action"
    },
    {
        value:"romance",label:"Romance"
    },
    {
        value:"comedy",label:"Comedy"
    },
    {
        value:"thriller",label:"Thriller"
    },
    {
        value:"mystery",label:"Mystery"
    }
   ]
  return (
    <div className='w-full pl-[15%] h-full'>
        <h2 className='text-2xl font-semibold'>Create New Movie</h2>
        <form action="">
            <div>
                <label htmlFor="movieName"> Name</label>
                <input value={moviesData.movieName} onChange={(e)=>{
                    setMoviesData({
                        ...moviesData,
                        movieName:e.target.value
                    })
                }} type="text" name='movieName' id='movieName' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieDescription"> Description</label>
                <textarea value={moviesData.movieDescription} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieDescription:e.target.value
                    })
                }} name="movieDescription" id="movieDescription" cols="40" rows="5" className='border-1 border-gray-400 rounded-sm'></textarea>
            </div>
            <div>
                <label htmlFor="movieDuration">Duration</label>
                <input value={moviesData.movieDuration} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieDuration:e.target.value
                    })
                }} type="number" name="movieDuration" id="movieDuration" placeholder='Enter duration (in mins)' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieRatings">Ratings</label>
                <input value={moviesData.movieRatings} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieRatings:e.target.value
                    })
                }} type="number" name="movieRatings" id="movieRatings" placeholder='Enter ratings' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieTotalRatings">Total Ratings</label>
                <input value={moviesData.movieTotalRatings} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieTotalRatings:e.target.value
                    })
                }} type="number" name="movieTotalRatings" id="movieTotalRatings" placeholder='Enter total ratings' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieReleaseDate">Release Date</label>
                <input value={moviesData.movieReleaseDate} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieReleaseDate:e.target.value
                    })
                }} type="datetime-local" name="movieReleaseDate" id="movieReleaseDate"  className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieReleaseYear">Release Year</label>
                <input value={moviesData.movieReleaseYear} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieReleaseYear:e.target.value
                    })
                }} type="number" name="movieReleaseYear" id="movieReleaseYear"  className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div className='flex'>
                <label htmlFor="">Directors</label>
                <Select options={directorOptions}  onChange={(selectedOption)=>{
                                                     console.log(selectedOption);
                                                     setMoviesData({
                                                         ...moviesData,
                                                         movieDirectors:[selectedOption.value]
                                                     })
                                                    }} isMulti className='w-1/2'/>
            </div>
            <div className='flex'>
                <label htmlFor="">Genre</label>
                <Select options={genreOptions} onChange={(selectedOption)=>{
                                                     console.log(selectedOption);
                                                     setMoviesData({
                                                         ...moviesData,
                                                         genreOptions:[selectedOption.value]
                                                     })
                                                    }} isMulti className='w-1/2'/>
            </div>

            {/* Multi select 
            <div className="flex flex-col w-[400px]  m-20" >
                <input type="checkbox" name="vijay" id="vijay" value={"vijay"} onChange={(e)=>{
                    console.log(e);
                    
                                if(e.target.checked){
                                    actors.push(e.target.value)
                                }
                               else{
                                    let indexNumber=actors.indexOf(e.target.value)
                                    delete actors[indexNumber]
                               }
                            }} />
                 <input type="checkbox" name="ajith" id="ajith" value={"ajith"} onChange={(e)=>{
                                if(e.target.checked){
                                    setDirectors([...directors,
                                        e.target.value])
                                    
                                }
                            }} />
                  <input type="checkbox" name="vikram" id="vikram" value={"vikram"} onChange={(e)=>{
                                if(e.target.checked){
                                    setDirectors([...directors,
                                        e.target.value])
                                }
                              
                            }} />
                <input type="checkbox" name="surya" id="surya" value={"surya"} onChange={(e)=>{
                                if(e.target.checked){
                                    setDirectors(
                                        [...directors,
                                        e.target.value])
                                    
                                }
                            }} />
                 <input type="checkbox" name="sk" id="sk" value={"sk"} onChange={(e)=>{
                                if(e.target.checked){
                                    setDirectors(
                                        [...directors,
                                        e.target.value])
                                    
                                }
                            }} />


              <div className='selected-directors-container flex items-center gap-x-4 flex-wrap border-1 border-gray-500 rounded-sm p-2 min-h-[30px]' onClick={handleSelectOnClick}>
                
                <div className='flex items-center gap-4 bg-gray-100 rounded-xl px-2 selected-vijay'>
                    <span className='text-lg'>Vijay</span>
                    <label htmlFor='vijay' className='text-lg hover:cursor-pointer'><IoCloseCircleSharp className='text-red-600' /></label>
                </div>
                <div className='flex items-center gap-4 bg-gray-100 rounded-xl px-2 selected-ajith'>
                    <span className='text-lg'>Ajith</span>
                    <label htmlFor='ajith' className='text-lg hover:cursor-pointer'><IoCloseCircleSharp className='text-red-600' /></label>
                </div>
                <div className='flex items-center gap-4 bg-gray-100 rounded-xl px-2 selected-vikram'>
                    <span className='text-lg'>Vikram</span>
                    <label htmlFor='vikram' className='text-lg hover:cursor-pointer'><IoCloseCircleSharp className='text-red-600' /></label>
                </div>
                <div className='flex items-center gap-4 bg-gray-100 rounded-xl px-2 selected-surya'>
                    <span className='text-lg'>Surya</span>
                    <label htmlFor='surya' className='text-lg hover:cursor-pointer'><IoCloseCircleSharp className='text-red-600' /></label>
                </div>
                <div className='flex items-center gap-4 bg-gray-100 rounded-xl px-2 selected-sk'>
                    <span className='text-lg'>SK</span>
                    <label htmlFor='sk' className='text-lg hover:cursor-pointer'><IoCloseCircleSharp className='text-red-600' /></label>
                </div>
                
              </div>

              {/* Select options  */}
                {/* <div className={`w-full bg-[#f8f8f8] py-4 label-container`} >
                    <ul>                           
                       <label htmlFor='vijay' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8] '> 
                            <span>Vijay</span>
                            <span className='hidden vijay-label'><FaCheck /></span>
                        </label>
                       <label htmlFor='ajith' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8] '>
                            <span>Ajith</span>
                            <span className='hidden ajith-label'><FaCheck /></span>
                        </label>
                       <label htmlFor='vikram' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8]'>
                            <span>Vikram</span>
                            <span className='hidden vikram-label'><FaCheck /></span>
                          
                        </label>
                       <label htmlFor='surya' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8]'>
                            <span>Surya</span>
                            <span className='hidden surya-label'><FaCheck /></span>
                        </label>
                       <label htmlFor='sk' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8]'>
                            <span>SK</span>
                            <span className='hidden sk-label'><FaCheck /></span>
                        </label>
                    </ul>
                </div> 

            </div> */}
        </form>
    </div>
  )
}

export default CreateMovies