import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
import '../styles/homepage.css';

class Homepage extends Component {
  render() {
    return(
      <div>
        <div className="nav">
          <Link to='/login'>
            <Button className="loginBtn" bsStyle="primary" bsSize="small" block>Log In</Button>
          </Link>
          <Link to='/signup'>
            <Button className="signupBtn" bsStyle="primary" bsSize="small" block>Sign Up</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
