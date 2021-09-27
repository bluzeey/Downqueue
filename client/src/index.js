import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './utils/App.js';
import { firebase } from './lib/firebase.prod.js';
import {FirebaseContext} from '../src/context/firebase'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
const store=createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(<FirebaseContext.Provider value={{firebase}}>
                <Provider store={store}>
                <Router>
                <App/>
                </Router>
                </Provider>
                </FirebaseContext.Provider>,document.getElementById('root'));

