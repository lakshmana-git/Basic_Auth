import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { signInFailure,signInSuccess,signInStart } from '../redux/userSlice/userSlice'
import { useDispatch ,useSelector} from 'react-redux'
import { OAuth } from '../components/OAuth'
export const SignIn = () => {
  const [formData,setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const {loading,error} = useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  
  const handleSignUp=async(e)=>{
         e.preventDefault();
  
         try {
          dispatch(signInStart())
          const res = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          console.log(data);
          
          if (data.success === false) {
            dispatch(signInFailure(data))
 
            return;
          }
        dispatch(signInSuccess(data))
         navigate('/')
         
        } catch (error) {
         dispatch(signInFailure(error))
          

        }
         
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
         <h1 className='text-3xl text-center font-bold my-7'>Sign In</h1>

         <form onSubmit={handleSignUp} className='flex flex-col gap-4'>
         
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
              loading ? "Loading...":"Sign In"
             }</button>
             
             
             <OAuth/>
         </form>

         <div className='flex gap-3 my-5'>
              <p className='font-semibold'>Dont have an account?</p>
              <Link to="/sign-up"> <span className='text-blue-500 font-semibold'>"Sign Up"</span></Link>
             
         </div>
        <p className='text-red-700 mt-5'>{error ? error.message || 'Something went wrong!':"" }</p>
    </div>
  )
}
