import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './utils/App.js';
import { firebase } from './lib/firebase.prod.js';
import {FirebaseContext} from '../src/context/firebase'

ReactDOM.render(<FirebaseContext.Provider value={{firebase}}>
                <Router>
                <App/>
                </Router>
                </FirebaseContext.Provider>,document.getElementById('root'));

