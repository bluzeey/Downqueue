import React,{useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Homepage from './HomePage'
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './dashboard'
import Profile from './profile'
import Meet from './Meet'
import * as ROUTES from './constants/routes';
import './App.css';
require('dotenv').config()

function App(){
  const [profileData, setProfileData] = useState({
        Fullname:'',city:'',country:'',emailAddress:'',Bio:'',Tag:''
    })
  const [userUid,setUserUid]=useState()
  return <>
         <Switch>
            <Route exact path={ROUTES.HOME}>
              <Homepage/>
            </Route>
            <Route exact path={ROUTES.SIGN_IN}>
              <Signin setUserUid={setUserUid} setProfileData={setProfileData} />
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
              <Signup setUserUid={setUserUid} setProfileData={setProfileData} profileData={profileData}/>
            </Route>
            <Route path={ROUTES.DASHBOARD}>
              <Dashboard/>
            </Route>
            <Route path={ROUTES.PROFILE}>
              <Profile profileData={profileData} setProfileData={setProfileData} userUid={userUid}/>
            </Route>
            <Route path={ROUTES.MEET}>
              <Meet profileData={profileData} setProfileData={setProfileData}/>
            </Route>
            <Route path={ROUTES.ABOUT}>
              <About/>
            </Route>
         </Switch>
         </>;
}
export default App;