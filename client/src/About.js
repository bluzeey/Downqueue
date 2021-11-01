import TopNav from "./components/topNav"
import Footer from "./components/footer"
import { TextField,Typography,Button,Paper} from '@mui/material';
import useStyles from './components/form/styles'
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const classes=useStyles()
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = password === '' | emailAddress === '';
    const handleSignin = (event) => {
    event.preventDefault();}
    return (
        <>
            <TopNav/>
            <div style={{background:'lightgray'}}>
                <Paper>
                    <Typography variant="h3">About the Company</Typography>
                    <Typography variant="body1">
                    Downqueue is the new age social chatting application
                    which can be used to organize and connect to your friends.
                    </Typography>
                    <Typography variant="body1">
                     We believe in free and open communication which can be more productive. 
                    </Typography>
                </Paper>
                <Paper>
                    <Typography variant="h3">About the Founder</Typography>
                    <Typography variant="body1">
                    Hi , I am Sahil. I am creating a
                    </Typography>
                </Paper>
                <Paper className={classes.container}>
                <Typography variant="h3" className={classes.title}>Contact Me</Typography>
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

export default About
