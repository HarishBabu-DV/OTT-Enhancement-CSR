import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getUsers } from '../../services/api/ApiServices'
import SimpleCard from '../../components/ui/SimpleCard'

const UsersScreen = () => {
  const [usersList,setUsersList]=useState([])
  const loadUsers=async () => {
    try {
      const response=await getUsers();
      console.log(response);
      const {data}=res.data
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
    <section className='w-full py-10 '>
      {
        usersList.map((user,index)=>(
          <SimpleCard>
              
          </SimpleCard>
        ))
      }
    </section>
  )
}

export default UsersScreen