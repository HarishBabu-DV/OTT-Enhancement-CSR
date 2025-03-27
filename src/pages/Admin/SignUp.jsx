import React, { useState } from 'react'

const SignUp = () => {
    const [newUserDetails,setNewUserDetails]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        role:'user'
    })
    const [errors,setErrors]=useState({
        nameErrMsg:'',
        emailErrMsg:'',
        passwordErrMsg:'',
        confirmPasswordErrMsg:''
    })
    const validate=(values)=>{
        const name_regex=/^[A-z][A-z_0-9]{3,15}$/;
        const email_regex=/^[A-z][A-z0-9_.]{3,15}@[A-z0-9.-]+\.[A-z]{2,10}$/;
       
        //Name validation
        const nameValidation=(givenName)=>{
            if(!givenName){
                setErrors({...errors,nameErrMsg:"Name is required"})
            }else if(!name_regex.test(givenName)){
                setErrors({...errors,nameErrMsg:"Invalid format.Hover the i button to give a valid format"})
            }else{
                setErrors({...errors,nameErrMsg:""})
            }
        }
        //Email validation
        const emailValidation=(givenEmail)=>{     
            if(!givenEmail){
                setErrors({...errors,emailErrMsg:"Email is required"})
            }else if(!email_regex.test(givenEmail)){
                setErrors({...errors,emailErrMsg:"Invalid format.Hover the i button to give a valid format"})
            }else{
                setErrors({...errors,emailErrMsg:""})
            }
        }
        nameValidation(values.name)
        emailValidation(values.email)
    }
    const handleOnChange=(event)=>{
        const {name,value}=event.target
        setNewUserDetails({
            ...newUserDetails,
            [name]:value
        })
    }
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        console.log(newUserDetails);
        validate(newUserDetails)
    }
  return (
    <section className='w-full'>
        {/* Sign Up Heading  */}
        <h2>Sign Up </h2>
        <form onSubmit={handleOnSubmit}>
            {/* Name */}
            <div>
                <div>
                    <label htmlFor="name" className='label-component'>Name</label>
                    <input type="text" name="name" id="name" className='input-component' placeholder='Enter Name' onChange={handleOnChange}/>
                </div>
                <p className='text-red-500'>{errors.nameErrMsg}</p>
            </div>
            {/* Email */}
            <div>
                <label htmlFor="email" className='label-component'>Email</label>
                <input type="email" name="email" id="email" className='input-component'
                placeholder='Enter Email'/>
                <p className='text-red-500'>{errors.emailErrMsg}</p>
            </div>
            {/* Password */}
            <div>
                <label htmlFor="password" className='label-component'>Password</label>
                <input type="password" name="password" id="password" className='input-component' placeholder='Enter Password'/>
            </div>
            {/* Confirm Password */}
            <div>
                <label htmlFor="confirmPassword" className='label-component'>Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" className='input-component' placeholder='Enter Password again'/>
            </div>
            <input type="submit" className='button-component' value={'Sign up'}/>
        </form>
    </section>
  )
}

export default SignUp