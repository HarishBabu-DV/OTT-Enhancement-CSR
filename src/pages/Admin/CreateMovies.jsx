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
    movieGenres:[],
    movieCoverImage:""
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
   const handleSubmit=async (event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("Movies Data",moviesData)
    console.log(formData);
    
    try {
        const res=await axios.post('https://restfull-api-nodejs.onrender.com/api/v1/movies')
    } catch (error) {
        console.log(error);
    } 
   }

  return (
    <div className='w-full pl-[15%] flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold text-center'>Create New Movie</h2>
        <form action="" className='ml-32 flex flex-col gap-y-6 w-3/4 p-10 ' onSubmit={handleSubmit}>
            <div className='w-full flex'>
              <label className='block w-[25%] text-lg font-medium text-[#454545] ' htmlFor="movieName"> Name</label>
             
                <input value={moviesData.movieName} onChange={(e)=>{
                    setMoviesData({
                        ...moviesData,
                        movieName:e.target.value
                    })
                }} type="text" name='movieName' id='movieName' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div className='flex w-full'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="movieDescription"> Description</label>
                <textarea value={moviesData.movieDescription} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieDescription:e.target.value
                    })
                }} name="movieDescription" id="movieDescription" cols="40" rows="5" className='border-1 border-gray-400 rounded-sm'></textarea>
            </div>
            <div className='flex w-full'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="movieDuration">Duration</label>
                <input value={moviesData.movieDuration} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieDuration:parseInt(e.target.value)
                    })
                }} type="number" name="movieDuration" id="movieDuration" placeholder='Enter duration (in mins)' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div className='flex w-full'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="movieRatings">Ratings</label>
                <input value={moviesData.movieRatings} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieRatings:Number(e.target.value)
                    })
                }} type="number" name="movieRatings" id="movieRatings" placeholder='Enter ratings' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div className='flex w-full'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="movieTotalRatings">Total Ratings</label>
                <input value={moviesData.movieTotalRatings} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieTotalRatings:parseInt(e.target.value)
                    })
                }} type="number" name="movieTotalRatings" id="movieTotalRatings" placeholder='Enter total ratings' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div className='flex w-full'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="movieReleaseDate">Release Date</label>
                <input value={moviesData.movieReleaseDate} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieReleaseDate:e.target.value
                    })
                }} type="datetime-local" name="movieReleaseDate" id="movieReleaseDate"  className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div className='flex w-full'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="movieReleaseYear">Release Year</label>
                <input value={moviesData.movieReleaseYear} onChange={(e)=>{
                     setMoviesData({
                        ...moviesData,
                        movieReleaseYear:parseInt(e.target.value)
                    })
                }} type="number" name="movieReleaseYear" id="movieReleaseYear"  className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div className='w-full flex'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="">Directors</label>
                <Select options={directorOptions}  onChange={(selectedOption)=>{
                                                     setMoviesData({
                                                         ...moviesData,
                                                         movieDirectors:selectedOption
                                                     })
                                                     console.log(moviesData);
                                                     
                                                    }} isMulti className='w-1/2'/>
            </div>
            <div className='w-full flex'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="">Genre</label>
                <Select options={genreOptions} onChange={(selectedOption)=>{
                                                     setMoviesData({
                                                         ...moviesData,
                                                         movieGenres:selectedOption
                                                     })
                                                     console.log(moviesData);
                                                    }} isMulti className='w-1/2'/>
            </div>
            <div className='w-full flex'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="">Cover Image</label>
                <input type="file" name="" id="" className='bg-[#f2f2f2] p-2 rounded-md border-1 border-gray-600' onChange={(e)=>{
                    if(e.target.files){
                        setMoviesData({
                            ...moviesData,
                            movieCoverImage:e.target.files[0].name});
                    }
                    else{
                        console.log('file is not there');
                        
                    }
                    
                }} />
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
            <div className=''>
                <input type="submit" value="Create" className='bg-[#454545] w-1/4 hover:cursor-pointer text-white px-4 py-2 rounded-md'/>
            </div>
        </form>
    </div>
  )
}

export default CreateMovies