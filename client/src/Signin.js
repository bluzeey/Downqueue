import React, { useState,useContext} from 'react';
import { useHistory } from 'react-router';
import  Form  from './components/form';
import Footer from './components/footer';
import { FirebaseContext } from './context/firebase';
import TopNav from './components/topNav';
import * as ROUTES from './constants/routes'


export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = password === '' | emailAddress === '';
    
    const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(()=>{
            history.push(ROUTES.DASHBOARD)
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
            <Form>
                <Form.Title>Log In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignin} method="POST">
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
                        Sign In
                    </Form.Submit>
                    
                    <Form.Text>
                        New to Downqueue? <Form.Link to="/signup"> Sign up now.</Form.Link>
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