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
            <div className={classes.background}>
                <Paper className={classes.main}>
                    <Typography className={classes.fontHeading} variant="h3">About Us</Typography>
                    <Typography className={classes.font} variant="body1">
                    Downqueue is the new age social chatting application
                    which can be used to organize and connect to your friends.
                    </Typography>
                    <Typography className={classes.fontHeading}  variant="h3">Our Beliefs</Typography>
                    <Typography className={classes.font} variant="body1">
                     We believe in free and open communication which can be more productive.
                     To mix and mash all the elements with your calendar, so that you can get to the point.
                    </Typography>
                    <Typography className={classes.fontHeading} variant="h3">About the Founder</Typography>
                    <Typography className={classes.font} variant="body1">
                    Hi , I am Sahil. I created this application to improve communication and scheduling without the ever-increasing advertisements on our social media applications.
                    </Typography>
                </Paper>
                <Paper className={classes.secondary}>
                <Typography variant="h3" className={classes.title}>Send us a Message</Typography>
                {error && <Typography variant="body2" className={classes.error}>{error}</Typography>}
                <form className={classes.form} onSubmit={handleSignin} method="POST">
                    <TextField
                        className={classes.inputField}
                        label="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <TextField
                        className={classes.textArea}
                        multiline
                        type="text"
                        rows={5}
                        value={message}
                        autoComplete="off"
                        label="Message"
                        onChange={({ target }) => setMessage(target.value)} 
                    />
                    <Button className={classes.button} disabled={isInvalid} type="submit">
                        Sumbit
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
