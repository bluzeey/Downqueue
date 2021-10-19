import React, { useState,useContext} from 'react';
import { useHistory } from 'react-router';
import  Form  from './components/form';
import Footer from './components/footer';
import TopNav from './components/topNav';
import { FirebaseContext } from './context/firebase';
import * as ROUTES from './constants/routes'
import { TextField,Grid,Typography,Button} from '@mui/material';
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
                start:'',
                end:'',
                title:'',
                id:''
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
            <Form>
                <Typography variant="h3" className={classes.title}>Sign Up</Typography>
                {error && <Typography variant="body2" className={classes.error}>{error}</Typography>}
                <Form.Base onSubmit={handleSignup} method="POST">
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
                    <Button disabled={isInvalid} type="submit">
                        Sign Up
                    </Button>
                    
                    <Form.Text>
                        Already a User?<Form.Link to="/signin"> Sign in.</Form.Link>
                    </Form.Text>    
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
            </div>
            <Footer/>
            </>
    )
}
