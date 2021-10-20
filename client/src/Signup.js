import React, { useState,useContext} from 'react';
import { useHistory,Link } from 'react-router-dom';
import Footer from './components/footer';
import TopNav from './components/topNav';
import { FirebaseContext } from './context/firebase';
import * as ROUTES from './constants/routes'
import { TextField,Grid,Typography,Button,FormControl,Card,Paper} from '@mui/material';
import useStyles from './components/form/styles'

export default function Signup() {
    const classes=useStyles()
    const history=useHistory()
    const { firebase } = useContext(FirebaseContext);
    const [userId,setUserId]=useState('')
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = password === '' | emailAddress === '';
    
    const handleSignup = (event) => {
        event.preventDefault();
        
        return firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((cred)=>{
            console.log(cred)
            const db=firebase.firestore()
            // db.settings({timestampsinSnapshots:true});
            const createUserEventDoc=db.collection("User-events").doc(cred.user.uid).collection("events").add({
                start:'2021-10-20T08:00:00+05:30',
                end:'2021-10-20T10:00:00+05:30',
                title:'Your first Event',
                id:'0'
            })
            const userRef= db.collection("Users-data").doc(cred.user.uid).set({
                Bio:'',
                City:'',
                Country:'',
                Name: firstName,
                Tag:'',
                emailAddress:emailAddress,
                setProfile:false})
            history.push(ROUTES.DASHBOARD)
            })
            .catch((error) => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
  };
    
    return (
            <>
            <TopNav/>
            <div style={{
                padding:'2em',
                backgroundImage:`url(assets/images/background.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <Paper className={classes.container}>
                <Typography variant="h3" className={classes.title}>Sign Up</Typography>
                {error && <Typography variant="body2" className={classes.error}>{error}</Typography>}
                <form className={classes.form} onSubmit={handleSignup} method="POST">
                    <TextField
                            className={classes.inputField}
                            label="First Name"
                            variant="outlined"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                    <TextField
                        className={classes.inputField}
                        label="Email address"
                        variant="outlined"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <TextField
                        className={classes.inputField}
                        type="password"
                        variant="outlined"
                        value={password}
                        autoComplete="off"
                        label="Password"
                        onChange={({ target }) => setPassword(target.value)} 
                    />
                    <Button className={classes.button} disabled={isInvalid} type="submit">
                        Sign Up
                    </Button>
                    
                    <Typography gutterBottom variant="subtitle1" className={classes.text}>
                        Already a User?<Link to="/signin" className={classes.link}> Sign in.</Link>
                    </Typography>    
                    <Typography variant="subtitle2">
                        This page is protected by Google reCAPTCHA.
                    </Typography>
                </form>
            </Paper>
            </div>
            <Footer/>
            </>
    )
}
