import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'
import { Jumbotron } from 'react-bootstrap';
import Helpers from '../utils/helpers';
import '../styles/App.css';
import FirebaseHelper from '../utils/firebasehelper';


class App extends Component {
  constructor(props) {
    this.state= {
      isLoggedin: window.localStorage.getItem("uid") || "",
      currentUser: ""
    };

    Helpers.getCurrentUser(window.localStorage.getItem("uid")).then(res => {
      this.setState({currentUser: res.name})
    })
  };

    handleSignOut() {
      FirebaseHelper.logOut();
      return browserHistory.push("/");
    };
    
  render() {
    return (
      <div className="App">
        <Jumbotron className="jumbo">
          <img src="http://i751.photobucket.com/albums/xx156/Moirae54/Homepage.jpg" alt="presentation"/>
        </Jumbotron>

        <nav className="navigation">
          <div className="navBar">
            <div className="leftNav">
              <Link to='/dashboard' className="dashboard">All Postings</Link>
              <Link to='/new' className="newPost">New Post</Link>
              <Link to='/search' className="search">Search</Link>
              <Link to='/about' className="about">About</Link>
              <Link to='/signup' className="signup">Sign Up</Link>
              <Link to='/login' className="login">Log In</Link>
              </div>
          </div>
        </nav>

        {this.props.children}

      </div>
    );
  }
}

export default App;
