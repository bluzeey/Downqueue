import React,{useContext, useState} from 'react'
import { NavLink, Route } from 'react-router-dom'
import Calendar from './components/calendar/Calendar';
import {TextField,InputAdornment} from '@mui/material/';
import * as ROUTES from './constants/routes';
import SearchIcon from '@mui/icons-material/Search';
import { FirebaseContext } from './context/firebase';
const Dashboard = () => {
    const {firebase}=useContext(FirebaseContext)
    const [searchName,setSearchName]=useState('')
    const [user,setUser]=useState('')
    const [editCalendar,setEditCalendar]=useState(true)
    const [searchEvents,setSearchEvents]=useState({})
    const searchResults=async()=>{
        if(searchName){
           let UserId;
           const db=firebase.firestore()
           const snapshot=await db.collection("Users-data").where('Name','==',searchName).get().then((querySnapshot)=>querySnapshot.forEach((doc)=>UserId=doc.id))
           const events= await db.collection("User-events").doc(UserId).collection("events").get()
           const collection = {}; 
           events.forEach(doc => {
               collection[doc.id] = doc.data();
                let event={
                id:doc.data().id,
                title:doc.data().title,
                start:doc.data().start,
               end:doc.data().end}
           })
           setSearchEvents(collection)
        }else{
            console.log('No person found with that username')
        }
    }
    return (
            <div style={{display:'flex'}}>
            <Calendar editCalendar={editCalendar} events={searchEvents}/>
            <div style={{display:'flex',flexDirection:'column',alignSelf:'center'}}>
            <TextField
                id="input-with-icon-textfield"
                label="Search a Person"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                ),
                }}
                variant="standard"
                value={searchName}
                onClick={searchResults}
                onChange={(e)=>{
                    setSearchName(e.target.value)}}
            />
            <NavLink to={ROUTES.PROFILE}>Set up your profile </NavLink>
            <NavLink to={ROUTES.MEET}>Have no changes, go to Messaging!</NavLink>
            </div>
            </div>
    )
}

export default Dashboard
