import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import NewPosting from '../utils/helpers';



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
  }


  render() {
    return(
      <div>
        <p>Let others know what's in your inventory and what you need in exchange</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          Name: <br/> <input placeholder="full name"
            onChange={(event) => this.handleNewName(event)} /><br/>
          Email: <br/> <input placeholder="example@example.com"
            onChange={(event) => this.handleNewEmail(event)} /><br/>
          Zip: <br/> <input placeholder="zipcode"
            onChange={(event) => this.handleNewZip(event)} /><br/>
          Title: <br/> <input placeholder="title"
            onChange={(event) => this.handleNewTitle(event)} /><br/>
          Post: <br/><textarea placeholder="fruits or vegetables you want to exchange"
            onChange={(event) => this.handleNewContent(event)} /><br/>

          <Button type="submit" bsStyle="success" bsSize="small">submit</Button>
        </form>
      </div>
    );
  }
}


export default NewPost;
