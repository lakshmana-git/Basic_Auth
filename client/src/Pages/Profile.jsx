import React from 'react'
import {  useSelector } from 'react-redux'
export const Profile = () => {
    const {createSlice} = useSelector((state)=>state.user)
    console.log(createSlice.username)
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <img src={createSlice.profilePicture} alt="photo" className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-4' />
            <input defaultValue={createSlice.username} type="text" id="username" placeholder='Username' className='bg-slate-100 rounded-lg p-3'/>
             <input defaultValue={createSlice.email}type="email" id="email" placeholder='Email' className='bg-slate-100 rounded-lg p-3'/>
             <input  type="Password" id="password" placeholder='Password' className='bg-slate-100 rounded-lg p-3'/>
           
              <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
              
        </form>
        <div className='flex justify-between mt-5'>
            <span className='text-red-700 cursor-pointer'>Delete Account</span>
            <span className='text-red-700 cursor-pointer'>Sign Out</span>
            
        </div>
    </div>
  )
}
