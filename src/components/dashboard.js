import React, {Component} from 'react';
import "../styles/dashboard.css";
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import AllPosts from '../utils/helpers';
import Timestamp from 'react-timestamp';
// import DeleteOne from './delete';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // id: "",
      response: [],
      status: [],
      name: "",
      email: "",
      zip: "",
      title: "",
      content: ""
    };
  }

handleAllPostings(event) {
  AllPosts.getAll().then((res) => {
    this.setState ({
      response: res
    })
  })
}

handleClick(event) {
  AllPosts.getAll().then((res) => {
    this.setState({
      response: res
    })
  })
}

onClick(event){
  AllPosts.delete(event.target.value).then(res => {
    console.log("Deleted!");
  });
}


  render() {
    const postings = this.state.response;
    const index = 0;
    return(
      <div>
        <Button className="viewBtn" bsStyle="success" bsSize="small" onClick={this.handleClick.bind(this)}>View Lastest Posts</Button>
          <ListGroup>
              {postings.map((posting, index) => {
                return <ListGroupItem key={index}>
                  <p><b><Timestamp time={posting.created_at} format='full'/></b></p>
                  <p>Name: {posting.name}</p>
                  <p>Email: {posting.email}</p>
                  <p>Zip: {posting.zip}</p>
                  <p>Title: {posting.title}</p>
                  <p>Post: {posting.content}</p><br/>
                  <p>id: {posting.id}</p>
                  <button className='deleteBtn' value={posting.id} onClick={(event) => this.onClick(event)}>Delete</button>
                </ListGroupItem>
              })}

          </ListGroup>
      </div>
    );
  }
}


export default Dashboard;
