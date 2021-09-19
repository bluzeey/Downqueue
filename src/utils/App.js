import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Signin from '../Signin';
import Homepage from "../HomePage";
import MyCalendar from '../components/Calendar';
import Signup from '../Signup';
import "./globalStyles.scss"

function App(){
  return <>
         <Switch>
            <Route exact path="/login">
              <Signin/>
            </Route>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/login/calendar">
              <MyCalendar/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
         </Switch>
         </>;
}
export default App;
