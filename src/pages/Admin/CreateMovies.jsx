import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
const CreateMovies = () => {
  return (
    <div className='w-full pl-[15%] h-full'>
        <h2 className='text-2xl font-semibold'>Create New Movie</h2>
        <form action="">
            <div>
                <label htmlFor="moviName"> Name</label>
                <input type="text" name='moviName' id='moviName' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieDescription"> Description</label>
                <textarea name="movieDescription" id="movieDescription" cols="40" rows="5" className='border-1 border-gray-400 rounded-sm'></textarea>
            </div>
            <div>
                <label htmlFor="movieDuration">Duration</label>
                <input type="number" name="movieDuration" id="movieDuration" placeholder='Enter duration (in mins)' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieRatings">Ratings</label>
                <input type="number" name="movieRatings" id="movieRatings" placeholder='Enter ratings' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieTotalRatings">Total Ratings</label>
                <input type="number" name="movieTotalRatings" id="movieTotalRatings" placeholder='Enter total ratings' className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieReleaseDate">Release Date</label>
                <input type="date" name="movieReleaseDate" id="movieReleaseDate"  className='border-1 border-gray-400 rounded-sm' />
            </div>
            <div>
                <label htmlFor="movieDirectors">Directors</label>
                <select name="movireDirectors" id="movieDirectors" className='border-1 border-gray-400 w-[300px] overflow-y-scroll py-4' multiple onChange={(event)=>{
                    console.log(event.target.value);
                    
                }}>
                    <option value="1">Ajith</option>
                    <option value="2">Vijay</option>
                    <option value="3">Surya</option>
                    <option value="4">Vikram</option>
                    <option value="5">SK</option>
                </select>
                
            </div>
            <div>
                <input type="checkbox" name="harish" id="harish" value={"harish"} onChange={(e)=>{
                    console.log(e.target.checked);
                    
                }}/>
            </div>
            <div className="flex flex-col w-[400px] m-20" >
                <input type="checkbox" name="vijay" id="vijay" value={"vijay"} onChange={(e)=>{
                                console.log(e)
                            }} />
                 <input type="checkbox" name="ajith" id="ajith" value={"ajith"} onChange={(e)=>{
                    console.log(e)
                }}/>
                  <input type="checkbox" name="vikram" id="vikram" value={"vikram"} onChange={(e)=>{
                    console.log(e)
                }}/>
                <input type="checkbox" name="surya" id="surya" value={"surya"} onChange={(e)=>{
                    console.log(e)
                }}/>
                 <input type="checkbox" name="sk" id="sk" value={"sk"} onChange={(e)=>{
                    console.log(e)
                }}/>


              <div className='selected-directors-container flex items-center gap-x-4 flex-wrap border-1 border-gray-500 rounded-lg p-2'>
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
                <div className='flex items-center gap-4 bg-gray-100 rounded-xl px-2 surya'>
                    <span className='text-lg'>Surya</span>
                    <label htmlFor='surya' className='text-lg hover:cursor-pointer'><IoCloseCircleSharp className='text-red-600' /></label>
                </div>
                <div className='flex items-center gap-4 bg-gray-100 rounded-xl px-2 selected-sk'>
                    <span className='text-lg'>SK</span>
                    <label htmlFor='sk' className='text-lg hover:cursor-pointer'><IoCloseCircleSharp className='text-red-600' /></label>
                </div>
                
              </div>
                <div className="w-full bg-[#f8f8f8] py-4 label-container">
                    <ul>
                          
                           
                       <label htmlFor='vijay' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8] '> 
                            <span>Vijay</span>
                            <span className='hidden vijay-label'><FaCheck /></span>
                        </label>
                       <label htmlFor='ajith' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8] '>
                            <span>Ajith</span>
                        </label>
                       <label htmlFor='vikram' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8]'>
                            <span>Vikram</span>
                          
                        </label>
                       <label htmlFor='surya' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8]'>
                            <span>Surya</span>
                          
                        </label>
                       <label htmlFor='sk' className='list-none p-4 flex justify-between items-center hover:bg-[#e8e8e8]'>
                            <span>SK</span>
                           
                        </label>
                    </ul>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CreateMovies