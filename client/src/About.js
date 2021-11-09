import TopNav from "./components/topNav"
import Footer from "./components/footer"
import { TextField,Typography,Button,Paper} from '@mui/material';
import useStyles from './components/about/styles'
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const classes=useStyles()
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const isInvalid = message === '' | emailAddress === '';
    const handleSignin = (event) => {
    event.preventDefault();}
    return (
        <>
            <TopNav/>
            <div style={{
                padding:'2em',
                backgroundImage:`url(assets/images/about.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center'
            }}>
                <Paper className={classes.main}>
                    <Typography variant="h3">About Us</Typography>
                    <Typography variant="body1">
                    Downqueue is the new age social chatting application
                    which can be used to organize and connect to your friends.
                    </Typography>
                    <Typography variant="body1">
                     We believe in free and open communication which can be more productive.
                     To mix and mash all the elements with your calendar, so that you can get to the point.
                    </Typography>
                    <Typography variant="h3">About the Founder</Typography>
                    <Typography variant="body1">
                    Hi , I am Sahil. I created this application to improve communication and scheduling without the ever-increasing advertisements on our social media applications.
                    </Typography>
                </Paper>
                <Paper className={classes.secondary}>
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
                        type="text"
                        value={message}
                        autoComplete="off"
                        label="Message"
                        onChange={({ target }) => setMessage(target.value)} 
                    />
                    <Button className={classes.button} disabled={isInvalid} type="submit">
                        Send Message
                    </Button>
                    
                    <Typography gutterBottom variant="subtitle1" className={classes.text}>
                        New to Downqueue? <Link to="/signup" className={classes.link}> Sign up now.</Link>
                    </Typography>    
                </form>
            </Paper>
            </div>
            <Footer/>
        </>
    )
}

export default About
