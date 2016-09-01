import React, {Component} from 'react';
import "../styles/dashboard.css";
import { browserHistory } from 'react-router';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import MyPost from '../utils/helpers';
import FirebaseHelper from '../utils/firebasehelper';
import Timestamp from 'react-timestamp';


class MyPosts extends Component {
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
      content: "",
    }
    FirebaseHelper.getCurrentUser(window.localStorage.getItem("uid")).then(res => {
      this.setState({
          currentUser: res.name
        })
        console.log(res.name);
      })
  };




handleClick(event){
  MyPost.findPost(this.state.currentUser).then((res) => {
    this.setState({
      response: res
    })
  })
}


handleDeleteClick(event){
  event.preventDefault();
  MyPost.delete(event.target.value).then(res => {
    console.log("Deleted!", res);
  });
}


handleClickEdit(event, id){
  console.log("clicked");
  event.preventDefault();
  return browserHistory.push('/edit')
}


  render() {
    const postings = this.state.response;
    const index = 0;
    return(
      <div>
        <Button className="viewBtn" bsStyle="success" bsSize="small" onClick={this.handleClick.bind(this)}>My Posts</Button>
          <ListGroup>
              {postings.map((posting, index) => {
                return <ListGroupItem key={index}>
                  <p className="desc"><b><Timestamp time={posting.created_at} format='full'/></b></p>
                  <p>Name: {posting.name}</p>
                  <p>Email: {posting.email}</p>
                  <p>Zip: {posting.zip}</p>
                  <p>Title: {posting.title}</p>
                  <p>Post: {posting.content}</p><br/>
                  <div className="buttons">
                    <Button className='deleteBtn' bsStyle="link" bsSize="small" value={posting.id} onClick={(event) => this.handleDeleteClick(event)}>Delete</Button>
                    <Button className='updateBtn' bsStyle="link" bsSize="small" value={posting.id} onClick={e => this.handleClickEdit(event, posting.id)}>Edit</Button>

                  </div>
                </ListGroupItem>
              })}

          </ListGroup>
      </div>
      );
    }
  }




export default MyPosts;
