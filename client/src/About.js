import TopNav from "./components/topNav"
import Footer from "./components/footer"
import { Paper, Typography } from "@mui/material"
import useStyles from './components/form/styles'

const About = () => {
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
            </div>
            <Footer/>
        </>
    )
}

export default About
