import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Signin from '../pages/Signin';
import Homepage from "../pages/HomePage";
import Signup from '../pages/Signup';
import "./globalStyles.scss"
import Dashboard from '../pages/dashboard';

function App(){
  return <>
         <Switch>
            <Route exact path="/login">
              <Signin/>
            </Route>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
         </Switch>
         </>;
}
export default App;
