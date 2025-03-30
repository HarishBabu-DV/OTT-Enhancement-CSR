import React from 'react'
import Label from '../../components/ui/Label'
import { MoviesPageIcons } from '../../assets/assets'
import Input from '../../components/ui/Input'
import SearchBar from '../../components/ui/SearchBar'

const MoviesScreen = () => {
  return (
    <section className='w-full bg-[#f7f7f7] py-10'>
        {/* Top Section  */}
        <div className='w-full h-[300px] flex flex-col items-center gap-4'>
            <h1 className='signup-signin-heading text-4xl font-semibold'>Movies</h1>
            {/* Search Bar */}
            <SearchBar id={'togglesearchbox'} placeholder={'Search here'} className={`w-[450px]`}>
              <MoviesPageIcons.searchIcon/>
            </SearchBar>
        </div>  
    </section>
  )
}

export default MoviesScreen