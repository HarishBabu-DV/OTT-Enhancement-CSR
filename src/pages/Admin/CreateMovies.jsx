import React, { useContext, useState } from 'react'
import Select from 'react-select';
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import axios from 'axios';
import { createMovie } from '../../services/api/ApiServices';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import { createMoviesPageContents } from '@/assets/assets';
const CreateMovies = () => {

    const { directorOptions,genreOptions}=createMoviesPageContents
    //  const {accessToken}=useContext(GlobalContext)
    // console.log(accessToken);
   const [moviesData,setMoviesData]=useState({
    name:"",
    description:"",
    duration:"",
    ratings:"",
    totalRating:"",
    releaseDate:"",
    releaseYear:"",
    directors:["vijay","ajith"],
    genres:["romance","comedy"],
    coverImage:""
   })
   console.log(moviesData);

    //Function to handle onChange input event
    const handleOnChange=(event)=>{
        const {name,value}=event.target
        setMoviesData({
            ...moviesData,
            [name]:value.trim()
        })
    }
  

   const handleSubmit=async (event)=>{
    event.preventDefault();
    // const formData=new FormData();
    // formData.append("Movies Data",moviesData)
    // console.log(formData);
  

    try {
        const res=await createMovie(moviesData,accessToken)
        console.log(res);  
    } 
    catch (error) {
        console.log(error);
    } 

   }

  return (
    <section className='w-full  flex flex-col items-center py-10 gap-y-4 bg-[#f7f7f7]'>
        {/* Heading  */}
        <div>
            <h1 className='signup-signin-heading text-4xl font-bold max-md:text-3xl'>Welcome!</h1>
            <h3 className='flex items-center'>
                <span className='text-[35px]'> &#127916;</span>
                <span className='signup-signin-heading text-xl font-normal max-md:text-lg'>Add new movies to enjoy new experience</span>
            </h3>
        </div>
        
        <form  className='bg-white flex flex-col gap-3 w-[700px] py-4 px-6 rounded-lg shadow-2xl max-sm:bg-transparent max-sm:shadow-none max-sm:w-full' onSubmit={handleSubmit}>
           
            <div className='  flex flex-col  gap-1 '>   
                {/*Create Movies Heading */}
                <h2 className='text-2xl font-bold text-center signup-signin-heading'>Create Movies</h2>
                {/*Movie Name */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="name" className='label-component'>
                            <span>Name </span> 
                            <span className='text-red-500'>*</span> 
                        </Label>
                        <Input type="text" name="name" id="name" className='input-component' placeholder='Enter Movie Name' value={moviesData.name} onChange={handleOnChange} autoFocus/>
                    </div>
                    {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                </div>
                {/*Movie Description */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="description" className='label-component'>
                            <span>Description</span> 
                            <span className='text-red-500'>*</span> 
                        </Label>
                        <textarea type="text" rows={'5'} name="description" id="description" className='input-component resize-none' placeholder='Enter Movie Description' value={moviesData.description} onChange={handleOnChange} />
                    </div>
                    {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                </div>
                {/*Movie Duration */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="duration" className='label-component'>
                            <span>Duration</span> 
                            <span className='text-red-500'>*</span> 
                        </Label>
                        <Input type="number" name="duration" id="duration" className='input-component' placeholder='Enter Movie Duration (in mins)' value={moviesData.duration} onChange={(e)=>{
                            setMoviesData({
                                ...moviesData,
                                duration:parseInt(e.target.value)
                            })
                        }} />
                    </div>
                    {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                </div>
                {/*Movie Ratings and Total Ratings*/}
                <div className='flex items-center gap-3 '>                     
                    {/*Movie Ratings */}
                    <div className='w-full flex flex-col gap-1'>
                        <div className='label-input-container'>
                            <Label htmlFor="ratings" className='label-component'>
                                <span>Ratings</span> 
                                <span className='text-red-500'>*</span> 
                            </Label>
                            <Input type="number" name="ratings" id="ratings" className='input-component' placeholder='Enter Movie Ratings' value={moviesData.ratings} onChange={(e)=>{
                            setMoviesData({
                                ...moviesData,
                                ratings:Number(e.target.value)
                            })
                        }} />
                        </div>
                        {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                    </div>
                    {/*Movie Total Ratings */}
                    <div className='w-full flex flex-col gap-1'>
                        <div className='label-input-container'>
                            <Label htmlFor="totalRating" className='label-component'>
                                <span>Total Ratings</span> 
                                <span className='text-red-500'>*</span> 
                            </Label>
                            <Input type="number" name="totalRating" id="totalRating" className='input-component' placeholder='Enter Movie Total Ratings' value={moviesData.totalRating} onChange={(e)=>{
                            setMoviesData({
                                ...moviesData,
                                totalRating:parseInt(e.target.value)
                            })
                        }} />
                        </div>
                        {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                    </div>
                </div>
                {/*Movie Release Date and Release Year*/}
                <div className='flex items-center gap-3 '>
                    {/*Movie Release Date */}
                    <div className='w-full flex flex-col gap-1'>
                        <div className='label-input-container'>
                            <Label htmlFor="releaseDate" className='label-component'>
                                <span>Release Date</span> 
                                <span className='text-red-500'>*</span> 
                            </Label>
                            <Input type="date" name="releaseDate" id="releaseDate" className='input-component' placeholder='Enter Movie Release Date' value={moviesData.releaseDate} onChange={handleOnChange} />
                        </div>
                        {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                    </div>
                    {/*Movie Release Year */}
                    <div className='w-full flex flex-col gap-1'>
                        <div className='label-input-container'>
                            <Label htmlFor="releaseYear" className='label-component'>
                                <span>Release Year</span> 
                                <span className='text-red-500'>*</span> 
                            </Label>
                            <Input type="number" name="releaseYear" id="releaseYear" className='input-component' placeholder='Enter Movie Release Year' value={moviesData.releaseYear} onChange={(e)=>{
                            setMoviesData({
                                ...moviesData,
                                releaseYear:parseInt(e.target.value)
                            })
                        }} />
                        </div>
                        {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                    </div>
                </div>
                {/*Movie Directors */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="directors" className='label-component'>
                            <span>Directors</span> 
                            <span className='text-red-500'>*</span> 
                        </Label>
                        <Select options={directorOptions} isMulti
                                onChange={(selectedOption)=>{   
                                                let values=selectedOption.map((option)=>option.value)
                                                setMoviesData({
                                                     ...moviesData,
                                                     directors:values
                                                })
                                            }
                                        } />
                    </div>
                    {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                </div>
                {/*Movie Genre */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="genres" className='label-component'>
                            <span>Genre</span> 
                            <span className='text-red-500'>*</span> 
                        </Label>
                        <Select options={genreOptions} isMulti
                                onChange={(selectedOption)=>{
                                            let values=selectedOption.map((option)=>option.value)
                                            setMoviesData({
                                                ...moviesData,
                                                genres:values
                                            })
                                           }
                                        }  />
                    </div>
                    {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                </div>
                 {/*Movie Cover Image */}
                 <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="coverImage" className='label-component'>
                            <span>Cover Image</span> 
                            <span className='text-red-500'>*</span> 
                        </Label>
                       
                    </div>
                    {/* <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                </div>
            </div>


            <div className=' flex flex-col  gap-1 '>
           
            
            
           
            
           
          
            <div className='w-full flex'>
                <label className='block w-[25%] text-lg font-medium text-[#454545]' htmlFor="">Cover Image</label>
                <input type="file" name="" id="" className='bg-[#f2f2f2] p-2 rounded-md border-1 border-gray-600' onChange={(e)=>{
                    if(e.target.files){
                        setMoviesData({
                            ...moviesData,
                            coverImage:e.target.files[0].name});
                    }
                    else{
                        console.log('file is not there');
                    }
                    
                }} />
            </div>
            <div className=''>
                <input type="submit" value="Create" className='bg-[#454545] w-1/4 hover:cursor-pointer text-white px-4 py-2 rounded-md'/>
            </div>
            </div>
        </form>
    </section>
  )
}

export default CreateMovies