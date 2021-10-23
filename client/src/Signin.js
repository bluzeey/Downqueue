import React, { useState,useContext} from 'react';
import { useHistory,Link } from 'react-router-dom';
import Footer from './components/footer';
import { FirebaseContext } from './context/firebase';
import TopNav from './components/topNav';
import * as ROUTES from './constants/routes'
import { TextField,Typography,Button,Card,Paper} from '@mui/material';
import useStyles from './components/form/styles'

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = password === '' | emailAddress === '';
    const classes=useStyles()
    
    const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(()=>{
          setTimeout(function(){history.push(ROUTES.DASHBOARD)},3000)
        })
      .catch((error) => {
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
                <Typography variant="h3" className={classes.title}>Log In</Typography>
                {error && <Typography variant="body2" className={classes.error}>{error}</Typography>}
                <form className={classes.form} onSubmit={handleSignin} method="POST">
                    <TextField
                        className={classes.inputField}
                        label="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <TextField
                        className={classes.inputField}
                        type="password"
                        value={password}
                        autoComplete="off"
                        label="Password"
                        onChange={({ target }) => setPassword(target.value)} 
                    />
                    <Button className={classes.button} disabled={isInvalid} type="submit">
                        Sign In
                    </Button>
                    
                    <Typography gutterBottom variant="subtitle1" className={classes.text}>
                        New to Downqueue? <Link to="/signup" className={classes.link}> Sign up now.</Link>
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