import React, {Component} from 'react';
import "../styles/dashboard.css";
import { Button } from 'react-bootstrap';
import UpdateEntry from '../utils/helpers';


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
        <form>
          Name: <br/> <input placeholder="new name"
            onChange={(event) => this.updateName(event)} /><br/>
          Email: <br/><input placeholder="new email"
            onChange={(event) => this.updateEmail(event)} /><br/>
          Zip: <br/><input placeholder="new zip"
            onChange={(event) => this.updateZip(event)} /><br/>
          Title: <br/><input placeholder="new title"
            onChange={(event) => this.updateTitle(event)} /><br/>
          Post: <br/><textarea placeholder="fruits or vegetables you want to exchange"
            onChange={(event) => this.updateContent(event)} /><br/>
          <Button type="button" bsStyle="warning" bsSize="small" onClick={e=>this.handleClickUpdate(event)}>update</Button>
        </form>
    </div>
  )
  }
}



export default UpdatePost;
