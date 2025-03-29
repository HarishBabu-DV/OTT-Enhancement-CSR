import React, { useRef, useState } from 'react'
import { signUpPageIcons } from '../../assets/assets'
import { Link } from 'react-router'
const SignUp = () => {
    const [newUserDetails,setNewUserDetails]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        role:'user'
    })
    const [newUserDetailErrors,setNewUserDetailErrors]=useState({})
    const [passwordInputType, setPasswordInputType] = useState('password')
    const [confirmPasswordInputType, setConfirmPasswordInputType] = useState('password')
    const handlePasswordVisibility=(event)=>{
       setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password')        
    }
    const handleConfirmPasswordVisibility=(event)=>{
        setConfirmPasswordInputType(confirmPasswordInputType === 'password' ? 'text' : 'password')        
     }
    const validate=(values)=>{
        
        const errorMessages={}
        const name_regex=/^[A-z][A-z_0-9]{3,15}$/;
        const email_regex=/^[A-z][A-z0-9_.]{3,15}@[A-z0-9.-]+\.[A-z]{2,10}$/;
        const password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!_@#$%^&*])[A-Za-z\d!_@#$%^&*]{8,}$/;
        //Name validation
        if(!values.name){
            errorMessages.nameErrMsg="Name is required"
        }else if(!name_regex.test(values.name)){
            errorMessages.nameErrMsg=""
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
            [name]:value.trim()
        })
    }
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        console.log(newUserDetails);
        setNewUserDetailErrors(validate(newUserDetails))
        
    }
  return (
    <section className='w-full flex flex-col gap-6 items-center sign-up-container py-10'>
        <div>
            <h1 className='text-white text-center text-4xl font-bold'>Welcome!</h1>
            <p className='text-white  text-center text-xl font-normal'>Sign up to access the services</p>
        </div>
        <form onSubmit={handleOnSubmit} className='bg-white w-[500px] flex flex-col gap-5 py-6 px-6 rounded-lg'>
            {/* Sign Up Heading  */}
            <h2 className='text-2xl font-semibold text-gray-500 text-center'>Sign Up </h2>
            <div className='  flex flex-col  gap-1 '>
                {/* Name */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <label htmlFor="name" className='label-component'>
                            <span>Name </span> 
                            <span className='text-red-500'>*</span> 
                        </label>
                        <input type="text" name="name" id="name" className='input-component' placeholder='Enter Name' onChange={handleOnChange}/>
                    </div>
                    <p className={`signup-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p>
                </div>
                {/* Email */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <label htmlFor="email" className='label-component'>
                            <span>Email </span> 
                            <span className='text-red-500'>*</span>
                        </label>
                        <input type="email" name="email" id="email" className='input-component'
                        placeholder='Enter Email' onChange={handleOnChange}/>
                    </div>
                    <p className={`signup-error-messages ${newUserDetailErrors.emailErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.emailErrMsg}</p>
                </div>
                {/* Password */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <label htmlFor="password" className='label-component'>
                            <span>Password </span>  
                            <span className='text-red-500'>*</span>
                        </label>
                        <div className='flex items-center justify-between input-component relative focus-within:shadow-lg'>
                            <input type={passwordInputType} name="password" id="password" className='w-[95%] focus-visible:outline-0'  placeholder='Enter Password'  onChange={handleOnChange}/>
                            {/* Password Criteria  */}
                            <div className='info-icon-container' >
                                <div className='flex items-center' onClick={handlePasswordVisibility}>
                                    {
                                        passwordInputType === 'password' ?
                                        <signUpPageIcons.viewIcon    className='text-gray-500'/> :
                                        <signUpPageIcons.notViewIcon className='text-gray-500'/>
                                    }
                                </div>
                                {/* Info icon  */}
                                {<signUpPageIcons.infoIcon className='info-icon'/>}
                                <div className='password-criteria-popup'>
                                    <h4 className='text-[.9rem] font-medium leading-6'>Password Criteria</h4>
                                    <ul className='list-disc'>
                                        <li className='text-sm leading-6'>Password must contain atleast eight characters</li>
                                        <li className='text-sm leading-6'>Password must contain atleast one lowercase letter</li>
                                        <li className='text-sm leading-6'>Password must contain atleast one uppercase letter</li>
                                        <li className='text-sm leading-6'>Password must contain atleast one number</li>
                                        <li className='text-sm leading-6'>Password must contain atleast one special character</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={`signup-error-messages ${newUserDetailErrors.passwordErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>
                        {newUserDetailErrors?.passwordErrMsg}
                    </p>
                </div>
                {/* Confirm Password */}
                <div  className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <label htmlFor="confirmPassword" className='label-component'>
                            <span>Confirm Password </span> 
                            <span className='text-red-500'>*</span>
                        </label>
                        <div className='flex items-center justify-between input-component relative focus-within:shadow-lg'>
                            <input type={confirmPasswordInputType} name="confirmPassword" id="confirmPassword" className='w-[95%] focus-visible:outline-0'  placeholder='Enter Password again' onChange={handleOnChange}/>
                            <div className='flex items-center' onClick={handleConfirmPasswordVisibility}>
                                    {
                                        confirmPasswordInputType === 'password' ?
                                        <signUpPageIcons.viewIcon    className='text-gray-500'/> :
                                        <signUpPageIcons.notViewIcon className='text-gray-500'/>
                                    }
                                </div>
                        </div>
                    </div>
                    <p className={`signup-error-messages ${newUserDetailErrors.confirmPasswordErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.confirmPasswordErrMsg}</p>
                </div>
            </div>
            {/* Sign up button and sign in link  */}
            <div className='flex justify-center'>
                <div className='flex flex-col items-center gap-2'>
                    <button type="submit" className='button-component'  onClick={(e)=>{
                    //    e.target.setAttribute("disabled", "true");   
                    }}>Sign up</button> 
                    <p className='text-gray-500'>Already have an account? <Link className='text-blue-400 underline'>sign in</Link></p>
                </div>
            </div>
        </form>
    </section>
  )
}

export default SignUp