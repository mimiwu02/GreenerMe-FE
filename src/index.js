import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import Dashboard from './components/dashboard';
import NewPost from './components/newpost';
import Search from './components/search';
import About from './components/about';
import EditPost from './components/edit';
import SignUp from './components/user/signup';
import LogIn from './components/user/login';
import Message from './components/message';
import MyPosts from './components/myPosts';
import Weather from './components/weather';
import './styles/index.css';



/* browserHistory keeps track of where you are on the App */
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/new' component={NewPost}/>
            <Route path='/search' component={Search}/>
            <Route path='/about' component={About}/>
            <Route path='/edit' component={EditPost}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/message' component={Message}/>
            <Route path='/mypost' component={MyPosts}/>
            <Route path='/weather' component={Weather}/>
        </Route>
    </Router>
    , document.getElementById('root')
);
