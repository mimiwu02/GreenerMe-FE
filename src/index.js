import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import Homepage from './components/homepage';
import SignUp from './components/signup';
import LogIn from './components/login';
import Dashboard from './components/dashboard';
import Grow from './components/grow';
import Trade from './components/trade';
import Profile from './components/profile';
import EditProfile from './components/editProfile';
import About from './components/about';
import HowTo from './components/howitworks';
import './styles/index.css';

/* browserHistory keeps track of where you are on the App */
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/homepage' component={Homepage} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/dashboard' component={Dashboard}>
              <Route path='/dashboard/grow' component={Grow}/>
              <Route path='/dashboard/trade' component={Trade}/>
            </Route>
            <Route path='/profile' component={Profile}/>
            <Route path='/edit' component={EditProfile}/>
            <Route path='/about' component={About}/>
            <Route path='/howto' component={HowTo}/>
        </Route>
    </Router>
    , document.getElementById('root')
);
