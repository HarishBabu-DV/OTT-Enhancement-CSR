import React, { useState } from 'react'
import Label from '../../components/ui/Label'
import Input from '../../components/ui/Input'
import { signUpPageIcons } from '../../assets/assets'
import Button from '../../components/ui/Button'
import { Link } from 'react-router'

const Login = () => {
    const [oldUserDetails,setOldUserDetails]=useState({
            email:'',
            password:''
        }
    )
    const [oldUserDetailErrors,setOldUserDetailErrors]=useState({})
    const [passwordInputType, setPasswordInputType] = useState('password') 
    // const validate=(values)=>{
    //     const errorMessages={}
    // }
    const handlePasswordVisibility=(event)=>{
        setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password')        
    }
    const handleOnChange=(event)=>{
        const {name,value}=event.target;
        setOldUserDetails({...oldUserDetails,[name]:value})
    }
    return (
        <section className='w-full flex flex-col gap-6 items-center sign-up-container py-10 bg-[#f7f7f7]'>
            <div>
                <h1 className='signup-signin-heading text-4xl font-bold max-md:text-3xl'>Welcome!</h1>
                <p className='signup-signin-heading text-xl font-normal max-md:text-lg'>Sign in to access the services</p>
            </div>
            <form  className='bg-white w-[450px] flex flex-col gap-8 py-8 px-6 rounded-lg shadow-2xl max-sm:bg-transparent max-sm:shadow-none max-sm:w-full'>
                {/* Sign Up Heading  */}
                <h2 className='text-2xl font-bold text-center signup-signin-heading'>
                    Sign In 
                </h2>
                <div className='flex flex-col gap-5 '>
                    {/* Name */}
                    <div className=' flex flex-col gap-1'>
                        <div className='label-input-container'>
                            <Label htmlFor={'email'} className={'label-component'}>
                                <span>Email</span>
                                <span className='text-red-500'>*</span>
                            </Label>
                            <Input type={'email'} name={'email'} id={'email'} placeholder={'Enter Email'} className={'input-component'} onChange={handleOnChange} autoFocus/>
                        </div>
                        {/* <p className={`signup-error-messages  ${newUserDetailErrors.nameErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.nameErrMsg}</p> */}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='label-input-container'>
                            <Label htmlFor={'password'} className={'label-component'}>
                                <span>Password</span>
                                <span className='text-red-500'>*</span>
                            </Label>
                            <div className='flex items-center justify-between input-component relative focus-within:shadow-lg'>
                                <Input type={passwordInputType} name={'password'} id={'password'} placeholder={'Enter Password'} className={'w-[95%] focus-visible:outline-0'} onChange={handleOnChange} onPaste={e=>e.preventDefault()} onDrop={e=>e.preventDefault()}/>
                                                    
                                <div className='flex items-center' onClick={handlePasswordVisibility}>
                                    {
                                        passwordInputType === 'password' ?
                                        <signUpPageIcons.viewIcon    className='text-gray-500'/> :
                                        <signUpPageIcons.notViewIcon className='text-gray-500'/>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <p className={`signup-error-messages ${newUserDetailErrors.confirmPasswordErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{newUserDetailErrors?.confirmPasswordErrMsg}</p> */}
                    </div>
                </div>
                {/* Sign in button and sign up link  */}
                <div className='flex justify-center'>
                    <div className='flex flex-col items-center gap-2'>
                        <Button type={'submit'} className={'button-component'} onClick={e=>e.target.setAttribute("disabled", "true")}>
                            Sign in
                        </Button>
                    <p className='text-gray-500'>Don't have an account? <Link className='text-blue-400 underline'>sign up</Link></p>
                    </div>
                </div>
            </form>
        </section>
  )
}

export default Login