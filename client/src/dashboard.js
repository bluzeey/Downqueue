import React,{useContext,useState} from 'react'
import { NavLink} from 'react-router-dom'
import Calendar from './components/calendar/Calendar';
import * as ROUTES from './constants/routes';
import {Search,ArrowForward} from '@mui/icons-material';
import {Paper,TextField,InputAdornment} from '@mui/material'
import { renderSidebarEvent } from './components/calendar/Calendar';
import { FirebaseContext } from './context/firebase';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import useStyles from './components/dashboard/styles'
const Dashboard = () => {
    const classes=useStyles()
    const {firebase}=useContext(FirebaseContext)
    const [searchName,setSearchName]=useState('')
    const [searchEvents, setSearchEvents] = useState(null)
    const searchResults=async()=>{
        if(searchName){
           let UserId;
           const db=firebase.firestore() 
           const snapshot=await db.collection("Users-data").where('Name','==',searchName).get().then((querySnapshot)=>querySnapshot.forEach((doc)=>UserId=doc.id))
           const events= await db.collection("User-events").doc(UserId).collection("events").get()
           const collection = {}; 
           let eventsCollection=[]
           events.forEach(doc => {
               collection[doc.id] = doc.data();
                let event={
                id:doc.data().id,
                title:doc.data().title,
                start:doc.data().start,
                end:doc.data().end}
                eventsCollection.push(event)
           })
           setSearchEvents(eventsCollection)
        }else{
            console.log('No person found with that username')
        } 
    }
    return (
            <div className={classes.container}>
                <Paper className={classes.instructions}>
                <h2>Instructions</h2>
                <ul>
                <li>Select dates and you will be prompted to create a new event</li>
                <li>Drag, drop, and resize events</li>
                <li>Click an event to delete it</li>
                <li>Search events of your friends and sync up.</li>
                <li>Go to Messaging to meet new people.</li>
                </ul>
                {searchEvents &&
                <>
                <h2>Thier Events ({searchEvents.length})</h2>
                <ul>
                {searchEvents.map(renderSidebarEvent)}
                </ul>
                </>}
                </Paper>
                <Paper className={classes.calenders}>
                <Calendar/>
                {searchEvents&&
                    <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin]}
                    headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    }}
                    initialView='timeGridWeek'
                    editable={false}
                    selectable={false}
                    selectMirror={true}
                    dayMaxEvents={true} 
                    events={searchEvents}/>
                }
                </Paper>
            <Paper className={classes.searchBar}>
            <TextField
                id="input-with-icon-textfield"
                label="Search a Person"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <Search/>
                    </InputAdornment>
                ),
                }}
                variant="standard"
                value={searchName}
                onClick={searchResults}
                onChange={(e)=>{
                    setSearchName(e.target.value)}}
            />
            <NavLink className={classes.btn} to={ROUTES.MEET}>Messaging<ArrowForward className={classes.icon} fontSize="small"/></NavLink>
            </Paper>
            </div>
    )
    
}

export default Dashboard
