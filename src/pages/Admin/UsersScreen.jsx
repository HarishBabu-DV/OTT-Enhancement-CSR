import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getUsers } from '../../services/api/ApiServices'
import SimpleCard from '../../components/ui/SimpleCard'
import { moviesPageContents, userPageContents } from '../../assets/assets'
import SearchBar from '../../components/ui/SearchBar'
import Button from '../../components/ui/Button'
import { Skeleton } from '@/components/ui/Skeleton'

const UsersScreen = () => {
  const { usersPageIcons }=userPageContents
  const { iconContents }=moviesPageContents
  const [usersList,setUsersList]=useState([])
  const [usersCategory,setUsersCategory]=useState('all');
 //Loading 
  const [isLoading, setIsLoading] = useState()
  const loadUsers=async () => {
    try {
      setIsLoading(true)
      const response=await getUsers();
      console.log(response);
      const {data}=response.data
      const {users}=data
      if(users) setUsersList(users)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    loadUsers();
  },[])
  return (
    <>
    {
      isLoading ? (
        <div className="flex flex-col h-[90vh] justify-center items-center space-y-5 gap-4 lg:gap-10 px-5">
        <div className="flex flex-col items-center gap-5 ">
          <Skeleton className="h-5 w-[100px] md:w-[200px]" />
          <Skeleton className="h-5 w-[150px] md:w-[250px]" />
        </div>
        <Skeleton className="h-[200px] w-full md:w-[450px] lg:w-[650px] lg:h-[300px] rounded-xl" />
      </div>
      ) : (
        <section className='w-full py-10 bg-[#f7f7f7] px-4 '>
        {/* Top Section  */}
        <div className='w-full  flex flex-col items-center gap-4'>
              <h1 className='signup-signin-heading text-4xl font-semibold'>Users</h1>
              {/* Search Bar */}
              <SearchBar id={'togglesearchbox'} placeholder={'Search here'} className={`w-[450px] max-sm:w-full `}>
                <iconContents.searchIcon/>
              </SearchBar>
              <div className='flex items-center gap-4'>
                {
                  userPageContents.usersCategory.map((category,index)=>(
                    <Button key={index} className={'button-component capitalize font-medium'} onClick={()=>setUsersCategory(category)}>{category}</Button>
                  ))
                }
              </div>
        </div>
        {/* Middle Section */}
        <div className='flex justify-end items-center pt-10 pb-4'>
          <Link to={'/users/create'} className='bg-[#383838] w-max px-5 py-1.5 flex items-center gap-2  text-white rounded-md'>
            Create{<iconContents.createIcon className='text-xl'/>}
          </Link>
        </div>
        <div className='grid grid-cols-1 grid-rows-auto justify-center justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
          {
            usersList.filter(user=>user.role === usersCategory || usersCategory==='all').map((user,index)=>(
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
     
    </>
  )
}

export default UsersScreen