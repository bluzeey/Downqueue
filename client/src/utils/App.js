import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Homepage, Dashboard, Signin, Signup, Profile ,Meet} from '../pages/index';
import './globalStyles.scss'
import * as ROUTES from '../constants/routes';
require('dotenv').config()

function App(){
  return <>
         <Switch>
            <Route exact path={ROUTES.SIGN_IN}>
              <Signin/>
            </Route>
            <Route exact path={ROUTES.HOME}>
              <Homepage/>
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
              <Signup/>
            </Route>
            <Route path={ROUTES.DASHBOARD}>
              <Dashboard/>
            </Route>
            <Route path={ROUTES.PROFILE}>
              <Profile/>
            </Route>
            <Route path={ROUTES.MEET}>
              <Meet/>
            </Route>
         </Switch>
         </>;
}
export default App;
