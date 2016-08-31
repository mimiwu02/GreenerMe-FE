import React, { Component } from 'react';
import LoginUser from '../../utils/firebasehelper';
import { Link } from 'react-router';
import { Button, Modal, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password : "",
      displayName: window.localStorage.getItem("displayName"),
    }
  }

  signIn(event){
    event.preventDefault();
    LoginUser.logIn(this.state.email,this.state.password)
  }

  render() {
    console.log("displayName", this.state.displayName);
    return (
      <div className="logInBox">
        <Modal.Dialog className="signUpWrapper static-modal">
          <Form horizontal>
            <p className="heading">Log In</p>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>Email
              </Col>
              <Col sm={10}>
              <FormControl type="email" placeholder="Email" onChange={(event) => this.setState({email: event.target.value})}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
              <FormControl type="password" placeholder="Password" onChange={(event) => this.setState({password: event.target.value})}/>
              </Col>
            </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle="success" bsSize="small" type="submit" onClick={(event) => this.signIn(event)}><Link to="/">Go</Link></Button>
                </Col>
              </FormGroup>
            </Form>
        </Modal.Dialog>
      </div>
    )
  }
}

export default LogIn;
