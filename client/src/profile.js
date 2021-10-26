import React,{useContext,useEffect} from 'react'
import Careers from './data/careers.json'
import { FirebaseContext } from './context/firebase';
import { useAuthListener } from './hooks';
import { TextField,Typography,Button,InputLabel,Paper,Select,MenuItem,FormControl} from '@mui/material';
import useStyles from './components/form/styles'
import { useHistory } from 'react-router';
import * as ROUTES from './constants/routes'

const Profile = ({profileData,setProfileData,userUid}) => {
    const { user } = useAuthListener();
    const{ firebase }=useContext(FirebaseContext)
    const history=useHistory()
    const isInvalid=profileData.Fullname===""
    const db=firebase.firestore();   
    const classes=useStyles()
    useEffect(()=>{
    const getProfileData=async(setProfileData)=>{
    const user=JSON.parse(window.localStorage.getItem('authUser'))
    await db.collection("Users-data").doc(user.uid).get().then(doc=>setProfileData({
             Fullname:doc.data().Name,
             city:doc.data().City,
             country:doc.data().Country,
             emailAddress:doc.data().emailAddress,
             Bio:doc.data().Bio,
             Tag:doc.data().Tag,
             setProfile:doc.data().setProfile}))
    if(profileData.setProfile){
            history.push(ROUTES.DASHBOARD)
        }
    } 
    getProfileData(setProfileData)  
       },[])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
        const userRef= await db.collection("Users-data").doc(user.uid).set({
            Bio:profileData.Bio,
            City:profileData.city,
            Country:profileData.country,
            Name: profileData.Fullname,
            Tag:profileData.Tag,
            emailAddress:profileData.emailAddress,
            setProfile:true
        })
        }catch(error){
          console.log(error)
        }
    }
    return (
        <>
        {!profileData.setProfile &&
        <Paper className={classes.container}>
        <form className={classes.form} autoComplete="off" onSubmit={handleSubmit} noValidate method="POST">
         <Typography variant="h3" className={classes.title}>Set up your profile</Typography>
          <TextField
                className={classes.inputField}
                label="Full Name"
                value={profileData.Fullname}
                onChange={(e) => setProfileData({...profileData,Fullname:e.target.value})}
                />
           <TextField
                className={classes.inputField}
                label="Email address"
                value={profileData.emailAddress}
                onChange={(e) => setProfileData({...profileData,emailAddress:e.target.value})}
                />
             <div style={{display:"flex",margin:'0',padding:'0'}}>
            <TextField
                className={classes.inputField}
                style={{width:'50%',marginRight:'1em'}}
                label="City"
                value={profileData.city}
                onChange={(e) => setProfileData({...profileData,city:e.target.value})}
                />
            <TextField
                className={classes.inputField}
                style={{width:'50%'}}
                label="Country"
                value={profileData.country}
                onChange={(e) => setProfileData({...profileData,country:e.target.value})}
                />    
            </div>
            <TextField
                className={classes.inputField}
                label="Tell us something about yourself"
                value={profileData.Bio}
                onChange={(e) => setProfileData({...profileData,Bio:e.target.value})}
                />
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="label">Profession</InputLabel>
            <Select
            style={{margin:'1px'}}
            labelId="label"
            onChange={(e) => {
                setProfileData({...profileData,Tag:e.target.value});
            }}>
            {Careers.map(option=><MenuItem key={option.id} value={option.profession}>{option.profession}</MenuItem>)}
            </Select>
            </FormControl>
            <Button className={classes.button} type="submit" disabled={isInvalid}>
                Set Up
            </Button>
            </form>
        </Paper>}
        </>
    )
}

export default Profile
