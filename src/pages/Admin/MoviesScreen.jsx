import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { moviesPageContents } from '../../assets/assets'
import { getMovies } from '../../services/api/ApiServices'
import SearchBar from '../../components/ui/SearchBar'
import { Table,TableHeader,TableHeaderCell,TableBody,TableRow,TableDataCell } from '../../components/TableComponent'
import { Skeleton } from '../../components/ui/skeleton'

const MoviesScreen = () => {
    // MoviesList 
    const [moviesList, setMoviesList] = useState([])
    //Loading 
    const [isLoading, setIsLoading] = useState(false)
    //Icon Contents and Table Headings 
    const { iconContents,tableHeadings }=moviesPageContents
    //Function to load Movies
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
    //Calling loadMovies() on pageload
    useEffect(()=>{
      loadMovies()
    },[])
    console.log(moviesList);
  
    return (
      <>
      {
        // Skeleton 
        isLoading ? (
          <div className="flex flex-col h-[90vh] justify-center items-center space-y-5 gap-4 lg:gap-10 px-5">
            <div className="flex flex-col items-center gap-5 ">
              <Skeleton className="h-5 w-[100px] md:w-[200px]" />
              <Skeleton className="h-5 w-[150px] md:w-[250px]" />
            </div>
            <Skeleton className="h-[200px] w-full md:w-[450px] lg:w-[650px] lg:h-[300px] rounded-xl" />
          </div>
        ) : (
          //Actual Page
      <section className='w-full bg-[#f7f7f7] py-10 px-6'>
        {/* Top Section  */}
        <div className='w-full  flex flex-col items-center gap-4'>
            <h1 className='signup-signin-heading text-4xl font-semibold'>Movies</h1>
            {/* Search Bar */}
            <SearchBar id={'togglesearchbox'} placeholder={'Search here'} className={`w-[450px] max-sm:w-full`}>
              <iconContents.searchIcon/>
            </SearchBar>
        </div>
        {/* Middle Section */}
        <div className='flex justify-end items-center py-4'>
          <Link className='bg-[#383838] w-max px-5 py-1.5 flex items-center gap-2  text-white rounded-md'>
            Create{<iconContents.createIcon className='text-xl'/>}
          </Link>
        </div>
        {/* Movies List  */}
        <div className='max-sm:overflow-x-auto'>
          <Table className={' bg-white border-collapse shadow-[0_0_12px_#bababa] w-full'}>
            {/* Table Headings  */}
            <TableHeader >
              <TableRow>
                {
                  tableHeadings.map((heading,index)=>(
                    <TableHeaderCell key={index} className={'p-3 text-gray-500 capitalize '}>
                      {heading}
                    </TableHeaderCell>
                  ))
                }
              </TableRow>
            </TableHeader>
            {/* Table Body  */}
            <TableBody>
              {
                moviesList.map((movie,index)=>(
                  <TableRow key={index} className={'border-y-[1px] border-gray-400'}>
                    <TableDataCell className={'p-3 text-center text-gray-500'}>
                      {index+1}
                    </TableDataCell>
                    <TableDataCell className={'p-3 text-center text-gray-500'}>    
                      {movie.name}
                    </TableDataCell>
                    <TableDataCell className={'p-3 text-center text-gray-500'}>
                      {movie.ratings}
                    </TableDataCell>
                    <TableDataCell className={'p-3 text-center text-gray-500'}>
                      {movie.duration}
                    </TableDataCell>
                    <TableDataCell className={'p-3 text-center text-gray-500'}> 
                      {movie.createdBy}
                    </TableDataCell>
                    <TableDataCell className={'p-3 text-center text-gray-500 flex items-center justify-center gap-4'}> 
                      <span>
                        <iconContents.retrieveIcon className='text-xl text-green-500 hover:cursor-pointer' title='View'/>
                      </span>
                      <span>
                        <iconContents.editIcon   className=' text-xl hover:cursor-pointer' title='Edit'/>
                      </span>
                      <span>
                        <iconContents.deleteIcon className='text-red-400 text-2xl hover:cursor-pointer' title='Delete'/>
                      </span>
                    </TableDataCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
    </section>
        )
      }
      </>
  )
}

export default MoviesScreen