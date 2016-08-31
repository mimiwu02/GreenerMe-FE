import React, {Component} from 'react';
import makeUser from '../../utils/firebasehelper';
import { Link } from 'react-router';
import { Button, FormControl, Modal } from 'react-bootstrap';


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
    }


  render() {
    return(
      <div>
        <Modal.Dialog className="SignUpWrapper static-modal">
          <div className="SignUpContainer">
          <form action="" className="SingupInput" onSubmit={e => this.handleSubmit(e)}>
              <div className="tagContainer">
                <h5>Name</h5>
                <h5>Email</h5>
                <h5>Password</h5>
                <h5>Zip</h5>
              </div>
          <div className="fieldContainer">
            <FormControl type="text" placeholder="name" onChange={event => this.setState({name: event.target.value})} />
            <FormControl type="email" placeholder="email" onChange={event => this.setState({email: event.target.value})} />
            <FormControl type="password" placeholder="password" onChange={event => this.setState({password: event.target.value})} />
            <FormControl type="integer" placeholder="zip code" onChange={event => this.setState({zip: event.target.value})} />
          </div>
            <Button type="submit" className="signUpBtn" bsStyle="primary" bsSize="small"><Link to="/login">Sign Up</Link></Button>
          </form>
          </div>
        </Modal.Dialog>
      </div>
    );
  }
}


export default SignUp;
