import React, { useContext, useState } from 'react'
import { createUser, loginUser } from '../../services/api/ApiServices';
import { GlobalContext } from '../../context/GlobalComponent';

const CreateUser = () => {
  //context
  const {loggedUserData,setLoggedUserData,accessToken,setAccessToken}=useContext(GlobalContext)
  

  const [userData,setUserData]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    role:'user'
  })
  const [loginUserData,setLoginUserData]=useState({
    email:'',
    password:''
  })

  const handleOnChange=(event)=>{
    const {name,value}=event.target;
    setUserData({...userData,[name]:value})
  }
  const handleOnSubmit=async (event)=>{
    event.preventDefault();
    const res=await createUser(userData);
    console.log(res);

  }


  const loginHandleOnChange=(event)=>{
    const {name,value}=event.target;
    setLoginUserData({...loginUserData,[name]:value})
  }
  const loginHandleOnSubmit=async (event)=>{
    event.preventDefault();
    const res=await loginUser(loginUserData);
    console.log(res.data);
    const {token}=res?.data
    const {user}=res?.data.data    
    setAccessToken(token)
    setLoggedUserData(user)
    
  }
  return (
    <div className='w-full '>
       <h2 className='text-2xl font-normal'>Sign up form</h2>
       <form  onSubmit={handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter name' className='border-[2px] ' value={userData.name} onChange={handleOnChange}/>
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='Enter email' className='border-[2px] ' value={userData.email} onChange={handleOnChange}/>
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='Enter password' className='border-[2px] ' value={userData.password} onChange={handleOnChange}/>
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Type the password again' className='border-[2px] ' alue={userData.confirmPassword} onChange={handleOnChange}/>
          <br />
          <label htmlFor="role">choose your role</label>
          <select name="role" id="role" className='border-[2px]' value={userData.role} onChange={handleOnChange}>
            <option value="user" >User</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <input type="submit" value="create" className='bg-black text-white px-4 py-1'/>
       </form>

    <h3 className='mt-10'>Login Form</h3>
    <form onSubmit={loginHandleOnSubmit}>
      <input type="text" name='email' onChange={loginHandleOnChange} className='border-[2px]' placeholder='email'/><br />
      <input type="text" name='password' onChange={loginHandleOnChange} className='border-[2px]' placeholder='password'/><br />
      <input type="submit" value="login" className='bg-black text-white px-4 py-1'/>
    </form>

    </div>
  )
}

export default CreateUser