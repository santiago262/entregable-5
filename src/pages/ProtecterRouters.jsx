import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtecterRouters() {
    const trainer=useSelector(states=>states.trainer)

 if(trainer.length){
    return <Outlet/>
 }else{
    return <Navigate to="/"/>
 }
   
}
