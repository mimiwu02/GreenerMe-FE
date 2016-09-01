import React, {Component} from 'react';
import { Button, FormControl } from 'react-bootstrap';
import NewPosting from '../utils/helpers';
import { browserHistory } from 'react-router';
import '../styles/newpost.css';



class NewPost extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      name: "",
      email: "",
      zip: "",
      title: "",
      content: "",
    };
  };

  handleNewName(event) {
    this.setState({name: event.target.value})
  }

  handleNewEmail(event) {
    this.setState({email: event.target.value})
  }

  handleNewZip(event) {
    this.setState({zip: event.target.value})
  }

  handleNewTitle(event) {
    this.setState({title: event.target.value})
  }

  handleNewContent(event) {
    this.setState({content: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    NewPosting.addPost(this.state).then((res) => {
      this.setState({
        response: res.data
      })
    })
    return browserHistory.push("/dashboard");
  }



  render() {
    return(
      <div>
        <p className="desc">Let others know what is in your inventory and what you would like in exchange</p>
        <form className="newPostForm" onSubmit={(event) => this.handleSubmit(event)}>
          <h5>Name:</h5><FormControl className="newInput" placeholder="full name"
            onChange={(event) => this.handleNewName(event)} />
          <h5>Email:</h5><FormControl className="newInput" placeholder="example@example.com"
            onChange={(event) => this.handleNewEmail(event)} />
          <h5>Zip:</h5> <FormControl className="newInput" placeholder="zipcode"
            onChange={(event) => this.handleNewZip(event)} />
          <h5>Title:</h5> <FormControl className="newInput"  placeholder="title"
            onChange={(event) => this.handleNewTitle(event)} />
          <h5>Post:</h5><textarea className="newTextArea" placeholder="fruits or vegetables you want to exchange"
            onChange={(event) => this.handleNewContent(event)} /><br/>

          <Button className="submitButton" type="submit" bsStyle="link" bsSize="small">submit</Button>
        </form>
      </div>
    );
  }
}


export default NewPost;
