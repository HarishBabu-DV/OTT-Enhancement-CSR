import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getUsers } from '../../services/api/ApiServices'
import SimpleCard from '../../components/ui/SimpleCard'
import { moviesPageContents, userPageContents } from '../../assets/assets'
import SearchBar from '../../components/ui/SearchBar'
import Button from '../../components/ui/Button'

const UsersScreen = () => {
  const { usersPageIcons }=userPageContents
  const { iconContents }=moviesPageContents
  const [usersList,setUsersList]=useState([])
  const loadUsers=async () => {
    try {
      const response=await getUsers();
      console.log(response);
      const {data}=response.data
      const {users}=data
      if(users) setUsersList(users)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    loadUsers();
  },[])
  return (
    <section className='w-full py-10 bg-[#f7f7f7]'>
      {/* Top Section  */}
      <div className='w-full  flex flex-col items-center gap-4'>
            <h1 className='signup-signin-heading text-4xl font-semibold'>Users</h1>
            {/* Search Bar */}
            <SearchBar id={'togglesearchbox'} placeholder={'Search here'} className={`w-[450px]`}>
              <iconContents.searchIcon/>
            </SearchBar>
            <div className='flex items-center gap-4'>
              {
                userPageContents.usersCategory.map((category,index)=>(
                  <Button key={index}>{category}</Button>
                ))
              }
            </div>
      </div>
      {/* Middle Section */}
      <div className='flex justify-end items-center py-4'>
        <Link className='bg-[#383838] w-max px-5 py-1.5 flex items-center gap-2  text-white rounded-md'>
          Create{<iconContents.createIcon className='text-xl'/>}
        </Link>
      </div>
      <div className='grid grid-cols-4 grid-rows-auto justify-center gap-x-5'>
        {
          usersList.map((user,index)=>(
            <SimpleCard key={index} className={'bg-white backdrop-blur-[20px]  w-[190px] rounded-md flex flex-col items-center p-4 shadow-lg border-[.5px] border-gray-500'}>   
                <div>{<usersPageIcons.userIcon className='text-gray-500 text-7xl'/>} </div>
                <h2 className='text-xl font-medium text-gray-500'>{user.name}</h2>
                <h3 className='text-gray-500 capitalize'>{user.role}</h3>
            </SimpleCard>
          ))
        }
      </div>
    </section>
  )
}

export default UsersScreen