import React, {Component} from 'react';
import "../styles/dashboard.css";
import {browserHistory} from 'react-router';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import AllPosts from '../utils/helpers';
import Timestamp from 'react-timestamp';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: "",
      response: [],
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
    console.log("id", res[0].id);
    let postId = res[0].id;
    if(postId){
     window.localStorage.setItem("item", postId);
    }
    console.log(postId);
  })
}

handleDeleteClick(event){
  event.preventDefault();
  AllPosts.delete(event.target.value).then(res => {
    console.log("Deleted!", res);
  });
}


handleClickEdit(event, id){
  // let fromStorage = window.localStorage.getItem("item");
  //   if (fromStorage){
  //     console.log("edit",fromStorage);
  //   }
  // this.setState({
  //   id: fromStorage
  // })
  console.log("clicked");
  event.preventDefault();
  return browserHistory.push('/edit')
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
                  <Button className='deleteBtn' bsStyle="danger" bsSize="small" value={posting.id} onClick={(event) => this.handleDeleteClick(event)}>Delete</Button>
                  <Button className='updateBtn' bsStyle="warning" bsSize="small" value={posting.id} onClick={e => this.handleClickEdit(event, posting.id)}>Edit</Button>
        </ListGroupItem>
              })}

          </ListGroup>
      </div>
    );
  }
}


export default Dashboard;
