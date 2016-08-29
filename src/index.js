import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import Dashboard from './components/dashboard';
import NewPost from './components/newpost';
import Search from './components/search';
import About from './components/about';
import './styles/index.css';

// const config= {
//     apiKey: "AIzaSyBxV9GN_N-QjF9NqMULFAHD9Y_mX9KUPgo",
//     authDomain: "greenerme-99b95.firebaseapp.com",
//     databaseURL: "https://greenerme-99b95.firebaseio.com",
//     storageBucket: "greenerme-99b95.appspot.com",
//   };
//   firebase.initializeApp(config);


/* browserHistory keeps track of where you are on the App */
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/new' component={NewPost}/>
            <Route path='/search' component={Search}/>
            <Route path='/about' component={About}/>
        </Route>
    </Router>
    , document.getElementById('root')
);
