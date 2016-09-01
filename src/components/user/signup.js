import React, {Component} from 'react';
import makeUser from '../../utils/firebasehelper';
import {browserHistory} from 'react-router';
import { Button, FormControl, Modal } from 'react-bootstrap';
import '../../styles/signup.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      zip: '',
      email: '',
      password: '',
    }
  }

  createUser(event){
      event.preventDefault();

      let data= {
        name: this.state.name,
        zip: this.state.zip
      }
      console.log(this.state.email,this.state.password);
      makeUser.signUp(this.state.email,this.state.password,data)
      return browserHistory.push("/login");
    }


  render() {
    return(
      <div>
        <Modal.Dialog className="signUpWrapper static-modal">
          <div className="signUpContainer">
          <form action="" className="signUpInput" onSubmit={e => this.handleSubmit(e)}>
          <div className="fieldContainer">
            <p className="heading">Sign Up</p>
            <h5>Name</h5><FormControl type="text" placeholder="name" onChange={event => this.setState({name: event.target.value})} />
            <h5>Email</h5><FormControl type="email" placeholder="email" onChange={event => this.setState({email: event.target.value})} />
            <h5>Password</h5><FormControl type="password" placeholder="password" onChange={event => this.setState({password: event.target.value})} />
            <h5>Zip</h5><FormControl type="integer" placeholder="zip code" onChange={event => this.setState({zip: event.target.value})} />
          </div>
            <Button type="submit" className="signUpBtn" bsStyle="success" bsSize="small" onClick={(event) => this.createUser(event)}>Go</Button>
          </form>
          </div>
        </Modal.Dialog>
      </div>
    );
  }
}


export default SignUp;
