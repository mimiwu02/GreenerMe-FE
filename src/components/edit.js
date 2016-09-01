import React, {Component} from 'react';
import "../styles/dashboard.css";
import { Button, FormControl } from 'react-bootstrap';
import UpdateEntry from '../utils/helpers';
import '../styles/updatepost.css';

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      response: [],
      name: "",
      email: "",
      zip: "",
      title: "",
      content: "",
      id: "",
      timestamp: ""
    };
  }

updateName(event) {
  this.setState({name:event.target.value})
}

updateEmail(event) {
  this.setState({email: event.target.value})
}

updateZip(event) {
  this.setState({zip: event.target.value})
}

updateTitle(event) {
  this.setState({title: event.target.value})
}

updateContent(event) {
  this.setState({content: event.target.value})
}


handleClickUpdate(event){
  event.preventDefault();
  UpdateEntry.update(this.state).then((res => {
    console.log("updated", res);
    console.log(this.state.id);
  }))
}

render() {
  const posts= this.state.response
  console.log(posts);
  return(
    <div className="UpdatePost">
      <p className="desc">Update your post here:</p>
        <form className="updatePostForm">
          <h5>Name:</h5><FormControl className="updateInput" placeholder="new name"
            onChange={(event) => this.updateName(event)} /><br/>
          <h5>Email:</h5><FormControl className="updateInput" placeholder="new email"
            onChange={(event) => this.updateEmail(event)} /><br/>
          <h5>Zip:</h5><FormControl className="updateInput" placeholder="new zip"
            onChange={(event) => this.updateZip(event)} /><br/>
          <h5>Title:</h5><FormControl className="updateInput" placeholder="new title"
            onChange={(event) => this.updateTitle(event)} /><br/>
          <h5>Post:</h5><textarea className="updateTextArea" placeholder="fruits or vegetables you want to exchange"
            onChange={(event) => this.updateContent(event)} /><br/>
          <Button className="updateButton" type="button" bsStyle="link" bsSize="small" value={posts.id} onClick={e=>this.handleClickUpdate(event)}>update</Button>
        </form>
    </div>
  )
  }
}



export default UpdatePost;
