import React,{useState,useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './HomePage'
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './dashboard'
import Profile from './profile'
import Meet from './Meet'
import * as ROUTES from './constants/routes';
require('dotenv').config()

function App(){
  const [profileData, setProfileData] = useState({
        Fullname:'',city:'',country:'',emailAddress:'',Bio:'',Tag:'',setProfile:false
    })
  const [user,setUser]=useState({})
  return <>
         <Switch>
            <Route exact path={ROUTES.HOME}>
              <Homepage/>
            </Route>
            <Route exact path={ROUTES.SIGN_IN}>
              <Signin setUser={setUser}/>
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
              <Signup setUser={setUser}/>
            </Route>
            <Route path={ROUTES.DASHBOARD}>
              <Dashboard/>
            </Route>
            <Route path={ROUTES.PROFILE}>
              <Profile profileData={profileData} setProfileData={setProfileData}/>
            </Route>
            <Route path={ROUTES.MEET}>
              <Meet profileData={profileData} setProfileData={setProfileData}/>
            </Route>
         </Switch>
         </>;
}
export default App;