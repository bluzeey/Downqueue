import React, { useState } from 'react';
import  Form  from '../components/form';
import Footer from '../components/footer';
import TopNav from '../components/topNav';
export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = password === '' | emailAddress === '';
    
    const handleSignin = (event) => {
        event.preventDefault();
        
        // call in here to firebase to authenticate the user
        // if there's an error, populate the error state
    }
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
                <Form.Base onSubmit={handleSignin} method="POST">
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