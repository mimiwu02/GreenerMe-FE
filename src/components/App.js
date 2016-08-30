import React, { Component } from 'react';
import { Link } from 'react-router'
import { Jumbotron } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {
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
              </div>
          </div>
        </nav>

        {this.props.children}

      </div>
    );
  }
}

export default App;
