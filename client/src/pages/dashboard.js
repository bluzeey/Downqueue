import React,{useState} from 'react'
import { NavLink, Route } from 'react-router-dom'
import Calendar from '../components/calendar/Calendar';
import * as ROUTES from '../constants/routes'
import useAuthListener from '../hooks/useAuthListener'
const Dashboard = () => {
    return (
            <div style={{display:'flex'}}>
            <Calendar/>
            <div style={{display:'flex',flexDirection:'column',alignSelf:'flex-end'}}>
            <NavLink to={ROUTES.PROFILE}>Set up your profile </NavLink>
            <NavLink to={ROUTES.MEET}>Have no changes, go to Messaging!</NavLink>
            </div>
            </div>
    )
}

export default Dashboard
