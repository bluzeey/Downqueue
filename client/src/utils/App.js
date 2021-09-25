import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Homepage, Dashboard, Signin, Signup } from '../pages/index';
import "./globalStyles.scss"
import * as ROUTES from '../constants/routes';


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
         </Switch>
         </>;
}
export default App;
