import React,{useContext, useState,useEffect} from 'react'
import './components/profile/styles.css'
import Careers from './data/careers.json'
import { FirebaseContext } from './context/firebase';
import { useAuthListener } from './hooks';
import { TextField,Typography,Button,InputLabel,Paper,Select,MenuItem,FormControl} from '@mui/material';
import useStyles from './components/form/styles'
const Profile = ({profileData,setProfileData}) => {
    const { user } = useAuthListener();
    const{ firebase }=useContext(FirebaseContext)
    const isInvalid=profileData.Fullname===""
    const db=firebase.firestore();   
    const classes=useStyles()
    useEffect(()=>{
       db.collection("Users-data").doc(user.uid).get().then(doc=>setProfileData({
            Fullname:doc.data().Name,
            city:doc.data().City,
            country:doc.data().Country,
            emailAddress:doc.data().emailAddress,
            Bio:doc.data().Bio,
            Tag:doc.data().Tag,
            setProfile:doc.data().setProfile})
       )},[])
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
        {profileData?.setProfile &&
        <div className="container">
        <div className="profile-header">
            <div className="profile-img">
               <img src='assets/images/cheklist2.png' width="200" alt="Profile Image"/>
            </div>
            <div className="profile-nav-info">
            <h3 className="user-name">{profileData.Fullname}</h3>
            <div className="address">
                <p className="state">{profileData.city} ,</p>
                <span className="country">{profileData.country}</span>
            </div>

            </div>
            <div className="profile-option">
            <div className="notification">
                <i className="fa fa-bell"></i>
                <span className="alert-message">3</span>
            </div>
            </div>
        </div>

        <div className="main-bd">
            <div className="left-side">
            <div className="profile-side">
                <p className="mobile-no"><i className="fa fa-phone"></i> +23470xxxxx700</p>
                <p className="user-mail"><i className="fa fa-envelope"></i>{profileData.emailAddress}</p>
                <div className="user-bio">
                <h3>Bio</h3>
                <p className="bio">
                    {profileData.Bio}
                </p>
                </div>
                <div className="profile-btn">
                <button className="chatbtn" id="chatBtn"><i className="fa fa-comment"></i> Chat</button>
                <button className="createbtn" id="Create-post"><i className="fa fa-plus"></i> Create</button>
                </div>
                <div className="user-rating">
                <h3 className="rating">4.5</h3>
                <div className="rate">
                    <div className="star-outer">
                    <div className="star-inner">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    </div>
                    <span className="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
                </div>
                </div>
            </div>
            </div>
            <div className="right-side">
            </div>
        </div>
        </div>}
        </>
    )
}

export default Profile
