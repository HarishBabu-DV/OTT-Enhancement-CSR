import React, { useEffect, useRef, useState } from 'react'
import { signUpPageIcons } from '../../assets/assets'
import { Link } from 'react-router'
import { createUser } from '../../services/api/ApiServices'
import Label from '../../components/ui/Label'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { toast } from 'sonner'
import { useFormStatus } from 'react-dom'
import LoadingButton from '@/components/ui/LoadingButton'

const SignUp = () => {
    //New User Details
    const [newUserDetails,setNewUserDetails]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        role:'user'
    })
    //Errors in sign up form
    const [newUserDetailErrors,setNewUserDetailErrors]=useState({})
    //Password and Confirm Password Eye icon
    const passwordEye=useRef()
    const confirmPasswordEye=useRef()
    //State of password input type
    const [inputType, setInputType] = useState({
        password:'password',
        confirmPassword:'password'
    })

    //Function to toggle password visibility
    const handleVisibility=(event)=>{
        passwordEye.current.contains(event.target) 
        ? setInputType({
            ...inputType,
            password:inputType.password==='password' ? 'text' : 'password'
           })
        : setInputType({
            ...inputType,
            confirmPassword:inputType.confirmPassword==='password' ? 'text' : 'password'
        })  
    }  
    //Function to validate sign up form 
    const validate=(values)=>{
        const errorMessages={}
        const name_regex=/^[A-z][A-z_0-9]{3,15}$/;
        const email_regex=/^[A-z][A-z0-9_.]{3,15}@[A-z0-9.-]+\.[A-z]{2,10}$/;
        const password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!_@#$%^&*])[A-Za-z\d!_@#$%^&*]{8,}$/;
        //Name validation
        if(!values.name){
            errorMessages.nameErrMsg="Name is required"
        }else{
            if(!name_regex.test(values.name)){
                errorMessages.nameErrMsg="Name should contain atleast 3 characters and atmost 15 characters"
            }
        }
        //Email validation
        if(!values.email){
            errorMessages.emailErrMsg="Email is required"
        }else{
            if(!email_regex.test(values.email)){
                errorMessages.emailErrMsg="Invalid Email.Please give a valid format"
            }
        }
        //Password validation
        if(!values.password){
            errorMessages.passwordErrMsg="Password is required"
        }else{
            if(!password_regex.test(values.password)){
                errorMessages.passwordErrMsg="Invalid Password.Hover the i button to give a valid format"
            }
        }
        //Confirm Password validation
        if(!values.confirmPassword){
            errorMessages.confirmPasswordErrMsg="Confirm Password is required"
        }else{
             if(values.confirmPassword && !values.password){
                errorMessages.confirmPasswordErrMsg="Fill the password first"
            }
            else {
                if(values.confirmPassword && values.password){
                    if(values.password!==values.confirmPassword){
                        errorMessages.confirmPasswordErrMsg="Password doesn't match"
                    }
                    else{
                        if((values.password===values.confirmPassword) && (!password_regex.test(values.confirmPassword))){
                            errorMessages.confirmPasswordErrMsg="Password matches but it is Invalid Password"
                        }
                    } 
                        
                }
            }
        }
        return errorMessages
    }
    //Function to handle onChange input event
    const handleOnChange=(event)=>{
        const {name,value}=event.target
        setNewUserDetails({
            ...newUserDetails,
            [name]:value.trim()
        })
    }
    //Function to handle onSubmit form event    
    const handleOnSubmit=async ()=>{
        //Verifying if there is no errors
        const noErrors=Boolean(Object.values(newUserDetailErrors).length===0)
        if(noErrors){
            //API request to post sign up data
            try {
                const response=await createUser(newUserDetails);
                console.log(response);
                if(response){
                    const {status}=response?.data
                    if(status === 'success'){
                        toast.success('Account created successfully')
                        setNewUserDetails({
                            name:'',
                            email:'',
                            password:'',
                            confirmPassword:'',
                            role:'user'
                        })
                    }
                }
            } catch (error) {
                if(!error?.response){
                    toast.error('No server response')
                }else if(error.response?.status === 409){
                    toast.error('Username taken')
                }else{
                    toast.error('Registration failed');
                }
            }
        } else{
            toast.error('Fill all the required form fields and fill in valid format')
        }
    }
    useEffect(
        ()=>setNewUserDetailErrors(validate(newUserDetails))
    ,[newUserDetails]
    )
  return (
    <section className='w-full flex flex-col gap-6 items-center py-10 bg-[#f7f7f7]'>
        {/* Heading  */}
        <div>
            <h1 className='signup-signin-heading text-4xl font-bold max-md:text-3xl'>Welcome!</h1>
            <div className='flex items-center'>
                <span className='text-[35px]'> &#128241;</span>
                <p className='signup-signin-heading text-xl font-normal max-md:text-lg'>Sign up to become a member</p>
            </div>
        </div>
        {/* Sign Up Form  */}
        <form action={handleOnSubmit} className='bg-white w-[450px] flex flex-col gap-3 py-4 px-6 rounded-lg shadow-2xl max-sm:bg-transparent max-sm:shadow-none max-sm:w-full'>
            {/* Sign Up Heading  */}
            <h2 className='text-2xl font-bold text-center signup-signin-heading'>Sign Up </h2>
            <div className='  flex flex-col  gap-1 '>
                {/* Name */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="name" className='label-component'>
                            <span>Name </span> 
                            <span className='text-red-500'>*</span> 
                        </Label>
                        <Input type="text" name="name" id="name" className='input-component' placeholder='Enter Name' value={newUserDetails.name} onChange={handleOnChange} autoFocus/>
                    </div>
                    <p className={`form-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p>
                </div>
                
                {/* Email */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="email" className='label-component'>
                            <span>Email </span> 
                            <span className='text-red-500'>*</span>
                        </Label>
                        <Input type="email" name="email" id="email" className='input-component'
                        placeholder='Enter Email' value={newUserDetails.email} onChange={handleOnChange}/>
                    </div>
                    <p className={`form-error-messages ${newUserDetailErrors.emailErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.emailErrMsg}</p>
                </div>
                
                {/* Password */}
                <div className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="password" className='label-component'>
                            <span>Password </span>  
                            <span className='text-red-500'>*</span>
                        </Label>
                        <div className='flex items-center justify-between input-component relative focus-within:shadow-lg'>
                            <Input type={inputType.password} name="password" id="password" className='w-[95%] focus-visible:outline-0' onPaste={e=>e.preventDefault()} onDrop={e=>e.preventDefault()} placeholder='Enter Password' value={newUserDetails.password}  onChange={handleOnChange}/>
                            {/* Password Criteria  */}
                            <div className='info-icon-container' >
                                <div className='flex items-center' ref={passwordEye} onClick={handleVisibility}>
                                    {
                                        inputType.password === 'password' ?
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
                                        <li className='text-sm leading-6'>Password must contain atleast one lowercase and uppercase letter</li>
                                        <li className='text-sm leading-6'>Password must contain atleast one number and one special character</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={`form-error-messages ${newUserDetailErrors.passwordErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>
                        {newUserDetailErrors?.passwordErrMsg}
                    </p>
                </div>
                
                {/* Confirm Password */}
                <div  className=' flex flex-col gap-1'>
                    <div className='label-input-container'>
                        <Label htmlFor="confirmPassword" className='label-component'>
                            <span>Confirm Password </span> 
                            <span className='text-red-500'>*</span>
                        </Label>
                        <div className='flex items-center justify-between input-component relative focus-within:shadow-lg'>
                            <Input type={inputType.confirmPassword} name="confirmPassword" id="confirmPassword" className='w-[95%] focus-visible:outline-0'  placeholder='Enter Password again' value={newUserDetails.confirmPassword} onChange={handleOnChange} onPaste={e=>e.preventDefault()} onDrop={e=>e.preventDefault()}/>
                            <div className='flex items-center' ref={confirmPasswordEye} onClick={handleVisibility}>
                                    {
                                        inputType.confirmPassword === 'password' ?
                                        <signUpPageIcons.viewIcon    className='text-gray-500'/> :
                                        <signUpPageIcons.notViewIcon className='text-gray-500'/>
                                    }
                                </div>
                        </div>
                    </div>
                    <p className={`form-error-messages ${newUserDetailErrors.confirmPasswordErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.confirmPasswordErrMsg}</p>
                </div>
            </div>
            
            {/* Sign up button and sign in link  */}
            <div className='flex justify-center'>
                <div className='flex flex-col items-center gap-2'>
                    <SubmitButton />
                    <p className='text-gray-500'>Already have an account? <Link className='text-blue-400 underline' to={'/admin/users/login'}>sign in</Link></p>
                </div>
            </div>
        </form>
    </section>
  )
}
//SubmitButton
const SubmitButton=()=>{
    const formDetails=useFormStatus()
    const isLoading=formDetails.pending
    return (
        <Button type="submit" disabled={isLoading} className={'button-component'}>
       { isLoading ? <LoadingButton /> : "Sign up" }
    </Button> 
    )
}

export default SignUp