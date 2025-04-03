import React, { useState } from 'react'
import Label from '../../components/ui/Label'
import Input from '../../components/ui/Input'
import { signUpPageIcons } from '../../assets/assets'
import Button from '../../components/ui/Button'
import { Link, useNavigate } from 'react-router'
import { loginUser } from '../../services/api/ApiServices'
import { toast } from 'sonner'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    
    const {setAuth}=useAuth()
    const navigate=useNavigate()

    //Old User Details
    const [oldUserDetails,setOldUserDetails]=useState({
            email:'',
            password:''
        }
    )
    
    //Errors in sign in form
    const [oldUserDetailErrors,setOldUserDetailErrors]=useState({})
    
    //State of password input type
    const [passwordInputType, setPasswordInputType] = useState('password') 
    const [isLoginFormSubmit,setIsLoginFormSubmit]=useState(false)
    const [isErrors,setIsErrors]=useState(false)
    const validate=(values)=>{
        const errorMessages={}
        const email_regex=/^[A-z][A-z0-9_.]{3,15}@[A-z0-9.-]+\.[A-z]{2,10}$/;
        const password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!_@#$%^&*])[A-Za-z\d!_@#$%^&*]{8,}$/;
        //Email validation
        if(!values.email){
            errorMessages.emailErrMsg="Email is required"
        }else{
            if(!email_regex.test(values.email)){
                errorMessages.emailErrMsg="Invalid Email. Give a valid format"
            }
        }
        //Password validation
        if(!values.password){
            errorMessages.passwordErrMsg="Password is required"
        }else{
            if(!password_regex.test(values.password)){
                errorMessages.passwordErrMsg="Invalid Password"
            }
        }
        return errorMessages
    }

    //Function to toggle password visibility
    const handlePasswordVisibility=(event)=>{
        setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password')        
    }
    
    //Function to handle onChange input event
    const handleOnChange=(event)=>{
        const {name,value}=event.target;
        setOldUserDetails({...oldUserDetails,[name]:value})
    }
    
    //Function to handle onSubmit form event    
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        setIsLoginFormSubmit(true)
        console.log(oldUserDetails);
        setOldUserDetailErrors(validate(oldUserDetails))
    }
    
    //Function to give API request to post sign in data
    const sendOlduserData=async ()=>{
        console.log('data ready to send',oldUserDetails);
        try {
            const response=await loginUser(oldUserDetails);
            console.log(response);
            if(response){
                const {token}=response?.data
                const {user}=response?.data.data 
                const {status}=response?.data
                if(status === 'success'){
                    setIsErrors(false)
                    setAuth({
                        user,accessToken:token
                    })
                    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Logged' }), 2000));
                    toast.promise(promise, {
                                    loading: 'Loading...',
                                    success: (data) => {
                                    return `${data.name} in successfully`;
                                    }, error: 'Something went wrong',
                                });
                    setOldUserDetails({
                        email:'',
                        password:''
                    })
                    navigate('/')
                }
            }           
        } catch (error) {
            setIsErrors(true)
            if(!error.response){
                toast.error('No server response')
            }else if(error.response?.status === 400){
                toast.error('Missing/Invalid username or password')
            }else if(error.response?.status === 401){
                toast.error('Unauthorized')
            }else{
                toast.error('Login failed')
            }
        }
    }
     /*Condition to evaluate if there is no error and also to check every values in olgUserDetails
     are not empty strings*/
     let isalldatasfilled=Object.values(oldUserDetails).every(item=>item!=='')
     if( (Object.values(oldUserDetailErrors).length===0 && Object.values(oldUserDetails).every(item=>item!=='')) && (isLoginFormSubmit && !isErrors)){
         sendOlduserData()
     }else{
         console.log('No of errors',Object.values(oldUserDetailErrors).length);
         console.log('is all datas filled',isalldatasfilled);
     }
   
    return (
            <section className='w-full flex flex-col gap-6 items-center py-10 bg-[#f7f7f7]'>
                <div>
                    <h1 className='signup-signin-heading text-4xl font-bold max-md:text-3xl'>Welcome!</h1>
                    <div className='flex items-center'>
                        <span className='text-[35px]'> &#128242;</span>
                        <p className='signup-signin-heading text-xl font-normal max-md:text-lg'>Sign in to access the services</p>
                    </div>
                </div>
                <form  className='bg-white w-[450px] flex flex-col gap-3 p-6 rounded-lg shadow-2xl max-sm:bg-transparent max-sm:shadow-none max-sm:w-full' onSubmit={handleOnSubmit}>
                    {/* Sign Up Heading  */}
                    <h2 className='text-2xl font-bold text-center signup-signin-heading'>
                        Sign In 
                    </h2>
                    <div className='flex flex-col gap-2 '>
                        {/* Email */}
                        <div className=' flex flex-col gap-2'>
                            <div className='label-input-container'>
                                <Label htmlFor={'email'} className={'label-component'}>
                                    <span>Email</span>
                                    <span className='text-red-500'>*</span>
                                </Label>
                                <Input type={'email'} name={'email'} id={'email'} placeholder={'Enter Email'} className={'input-component'} value={oldUserDetails.email} onChange={handleOnChange} autoFocus/>
                            </div>
                            <p className={`form-error-messages  ${oldUserDetailErrors.emailErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{oldUserDetailErrors?.emailErrMsg}</p>
                        </div>
                        {/* Password  */}
                        <div className='flex flex-col gap-2'>
                            <div className='label-input-container'>
                                <Label htmlFor={'password'} className={'label-component'}>
                                    <span>Password</span>
                                    <span className='text-red-500'>*</span>
                                </Label>
                                <div className='flex items-center justify-between input-component relative focus-within:shadow-lg'>
                                    <Input type={passwordInputType} name={'password'} id={'password'} placeholder={'Enter Password'} className={'w-[95%] focus-visible:outline-0'} value={oldUserDetails.password} onChange={handleOnChange} onPaste={e=>e.preventDefault()} onDrop={e=>e.preventDefault()}/>
                                                        
                                    <div className='flex items-center' onClick={handlePasswordVisibility}>
                                        {
                                            passwordInputType === 'password' ?
                                            <signUpPageIcons.viewIcon    className='text-gray-500'/> :
                                            <signUpPageIcons.notViewIcon className='text-gray-500'/>
                                        }
                                    </div>
                                </div>
                            </div>
                            <p className={`form-error-messages ${oldUserDetailErrors.passwordErrMsg ? `opacity-100` : `opacity-0 before:content-['hello']`}`}>{oldUserDetailErrors?.passwordErrMsg}</p>
                        </div>
                    </div>
                    {/* Sign in button and sign up link  */}
                    <div className='flex justify-center'>
                        <div className='flex flex-col items-center gap-2'>
                            <Button type={'submit'} className={'button-component'} 
                            // onClick={e=>e.target.setAttribute("disabled", "true")}
                            >
                                Sign in
                            </Button>
                            <Link className='capitalize text-blue-400'>forgot password</Link>
                        <p className='text-gray-500'>Don't have an account? <Link className='text-blue-400 underline' to={'/admin/users/create'}>sign up</Link></p>
                        </div>
                    </div>
                </form>
            </section>
  )
}

export default Login