import React from 'react'
import {  useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'

export const PrivateRoute = () => {
    const {createSlice} = useSelector((state=>state.user))
  return createSlice ? <Outlet/> : <Navigate to='/sign-in'/>
  
}
