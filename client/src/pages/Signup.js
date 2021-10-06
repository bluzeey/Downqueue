import React, { useState,useContext} from 'react';
import { useHistory } from 'react-router';
import  Form  from '../components/form';
import Footer from '../components/footer';
import TopNav from '../components/topNav';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes'

export default function Signup() {
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
            history.push(ROUTES.DASHBOARD)
            console.log(cred)
            const db=firebase.firestore()
            db.settings({timestampsinSnapshots:true});
            const createUserEventDoc=db.collection("User-events").doc(cred.user.uid).collection("events").add({
                Start:'',
                End:'',
                Title:'',
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
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={({ target }) => setPassword(target.value)} 
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>
                    
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
