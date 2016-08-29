import React, {Component} from 'react';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      zip: '',
      email: '',
      password: '',
    }
  }

  handleEmailValidation() {
    const emailLength = this.state.email.length;
    if (emailLength < 4) {
      alert('Please enter a valid email address.');
    }
  }

  handlePasswordValidation() {
    const passwordLength = this.state.password.length;
    if (passwordLength < 4) {
      alert('Please enter a password');
    }
  }

  handleZipValidation() {
    const zipLength = this.state.zip.length;
    if (zipLength < 5) {
      alert('Please enter a valid zip');
    }
  }

  render() {
    return(
      <div>
        <p> Sign Up</p>



      </div>
    );
  }
}


export default SignUp;
