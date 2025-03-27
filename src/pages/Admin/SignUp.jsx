import React, { useState } from 'react'
import { signUpPageIcons } from '../../assets/assets'
const SignUp = () => {
    const [newUserDetails,setNewUserDetails]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        role:'user'
    })
    const [newUserDetailErrors,setNewUserDetailErrors]=useState({})
    const validate=(values)=>{
        const errorMessages={}
        const name_regex=/^[A-z][A-z_0-9]{3,15}$/;
        const email_regex=/^[A-z][A-z0-9_.]{3,15}@[A-z0-9.-]+\.[A-z]{2,10}$/;
        const password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!_@#$%^&*])[A-Za-z\d!_@#$%^&*]{8,}$/;
        //Name validation
        if(!values.name){
            errorMessages.nameErrMsg="Name is required"
        }else if(!name_regex.test(values.name)){
            errorMessages.nameErrMsg="Invalid Name.Hover the i button to give a valid format"
        }else{
            errorMessages.nameErrMsg=""
        }

        //Email validation
        if(!values.email){
            errorMessages.emailErrMsg="Email is required"
        }else if(!email_regex.test(values.email)){
            errorMessages.emailErrMsg="Invalid Email.Hover the i button to give a valid format"
        }else{
            errorMessages.emailErrMsg=""
        }

        //Password validation
        if(!values.password){
            errorMessages.passwordErrMsg="Password is required"
        }else if(!password_regex.test(values.password)){
            errorMessages.passwordErrMsg="Invalid Password.Hover the i button to give a valid format"
        }else{
            errorMessages.passwordErrMsg=""
        }

        //Confirm Password validation
        if(!values.confirmPassword){
            errorMessages.confirmPasswordErrMsg="Confirm Password is required"
        }else{
             if(values.confirmPassword && !values.password){
                errorMessages.confirmPasswordErrMsg="Fill the password first"
            }
            else if(values.confirmPassword && values.password){
                if(values.password!==values.confirmPassword){
                errorMessages.confirmPasswordErrMsg="Password doesn't match"
                }
                else if((values.password===values.confirmPassword) && (!password_regex.test(values.confirmPassword))){
                     errorMessages.confirmPasswordErrMsg="Password matches but it is Invalid Password"
                }
            }
            else{
            errorMessages.confirmPasswordErrMsg=""
            }
        }
        return errorMessages
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
        setNewUserDetailErrors(validate(newUserDetails))
    }
  return (
    <section className='w-full '>
        <div className=''>

        {/* Sign Up Heading  */}
        <h2 className='text-2xl font-medium text-gray-500 text-center'>Sign Up </h2>
        <form onSubmit={handleOnSubmit}>
            {/* Name */}
            <div>
                <div className='label-input-container'>
                    <label htmlFor="name" className='label-component'>
                        <span>Name </span> 
                        <span className='text-red-500'>*</span> 
                    </label>
                    <input type="text" name="name" id="name" className='input-component' placeholder='Enter Name' onChange={handleOnChange}/>
                </div>
                <p className='text-red-500'>{newUserDetailErrors?.nameErrMsg}</p>
            </div>
            {/* Email */}
            <div>
                <div className='label-input-container'>
                    <label htmlFor="email" className='label-component'>
                        <span>Email </span> 
                        <span className='text-red-500'>*</span>
                    </label>
                    <input type="email" name="email" id="email" className='input-component'
                    placeholder='Enter Email' onChange={handleOnChange}/>
                </div>
                <p className='text-red-500'>{newUserDetailErrors?.emailErrMsg}</p>
            </div>
            {/* Password */}
            <div>
                <div className='label-input-container '>
                    <label htmlFor="password" className='label-component'>
                        <span>Password </span>  
                        <span className='text-red-500'>*</span>
                    </label>
                    <div className='flex items-center w-[20%] input-component password-input-component relative'>
                        <input type="password" name="password" id="password" className='' placeholder='Enter Password'  onChange={handleOnChange}/>
                        {/* Info icon  */}
                        {<signUpPageIcons.infoIcon className='info-icon'/>}
                        {/* Password Criteria  */}
                        <div className='password-criteria-popup'>
                            <h4 className='text-[.9rem] font-medium'>Password Criteria</h4>
                            <ul className='list-disc'>
                                <li className='text-sm'>Password must contain atleast eight characters</li>
                                <li className='text-sm'>Password must contain atleast one lowercase letter</li>
                                <li className='text-sm'>Password must contain atleast one uppercase letter</li>
                                <li className='text-sm'>Password must contain atleast one number</li>
                                <li className='text-sm'>Password must contain atleast one special character</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='text-red-500'>{newUserDetailErrors?.passwordErrMsg}</p>
            </div>
            {/* Confirm Password */}
            <div>
                <div className='label-input-container'>
                    <label htmlFor="confirmPassword" className='label-component'>
                        <span>Confirm Password </span> 
                        <span className='text-red-500'>*</span>
                    </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className='input-component' placeholder='Enter Password again' onChange={handleOnChange}/>
                </div>
                <p className='text-red-500'>{newUserDetailErrors?.confirmPasswordErrMsg}</p>
            </div>
            <input type="submit" className='button-component' value={'Sign up'}/>
        </form>
        </div>
    </section>
  )
}

export default SignUp