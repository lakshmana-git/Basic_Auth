import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
 
export const SignUp = () => {
  const [formData,setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  
  const handleSignUp=async(e)=>{
         e.preventDefault();
  
         try {
          setError(false)
          setIsLoading(true)
          const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          console.log(data);
          
          if (data.success === false) {
            setIsLoading(false)
            setError(true)
            return;
          }
          setIsLoading(false)
          navigate('/sign-in')
        } catch (error) {
          console.log(error)
          

        }
         
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
         <h1 className='text-3xl text-center font-bold my-7'>Sign Up</h1>

         <form onSubmit={handleSignUp} className='flex flex-col gap-4'>
         <input
          type='text'
          required
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='email'
          required
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          required
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
         
             <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{
              isLoading ? "Loading...":"SignUp"
             }</button>
         </form>

         <div className='flex gap-3 my-5'>
              <p className='font-semibold'>Have an account?</p>
              <Link to="/sign-in"> <span className='text-blue-500 font-semibold'>"Sign In"</span></Link>
             
         </div>
        {
          error ?  (<p>Something went wrong</p>) : ''
        }
    </div>
  )
}
