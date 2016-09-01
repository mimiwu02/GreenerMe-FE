import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'
import { Jumbotron } from 'react-bootstrap';
import '../styles/App.css';
import FirebaseHelper from '../utils/firebasehelper';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: window.localStorage.getItem("uid") || "",
      currentUser: ""
    };

    FirebaseHelper.getCurrentUser(window.localStorage.getItem("uid")).then(res => {
      this.setState({currentUser: res.name})
    })
  };

    handleSignOut() {
      FirebaseHelper.logOut(event);
      return browserHistory.push(isLoggedIn);
    };

  render() {

        const isLoggedIn = (
        <nav className="navigation">
          <div className="navBar">
          <div className="leftNav">
            <Link to='/dashboard' className="dashboard">All Postings</Link>
            <Link to='/new' className="newPost">New Post</Link>
            <Link to='/search' className="search">Search</Link>
            <Link to='/about' className="about">About</Link>
            <Link to="/" className="logout" onClick={e => this.handleSignOut()}>Log Out</Link>
          </div>
          </div>
        </nav>
      );
      const isLoggedOut =(
        <nav className="navigation">
          <div className="navBar">
          <div className="leftNav">
            <Link to='/login' className="login">Log In</Link>
            <Link to='/signup' className="signup">Sign Up</Link>
            <Link to='/about' className="about">About</Link>
            </div>
            </div>
          </nav>
        );

        return (
          <div className="App">
            <Jumbotron className="jumbo">
              <img src="http://i751.photobucket.com/albums/xx156/Moirae54/Homepage.jpg" alt="presentation"/>
            </Jumbotron>


          {this.state.isLoggedin.length > 0 ? isLoggedIn : isLoggedOut}

          {this.props.children}
          <p className="greetings">Hello {this.state.currentUser}</p>
      </div>
    );
  }
}

export default App;
