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

handleClickMessage(event){
  event.preventDefault();
  browserHistory.push('/message');
}

  render() {
    const postings = this.state.response;
    const index = 0;
    return(
      <div>
        <Button className="viewBtn" bsStyle="primary" bsSize="small" onClick={this.handleClick.bind(this)}>View Lastest Posts</Button>
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
                    <Button className='messageBtn' bsStyle="link" bsSize="small" value={posting.id} onClick={e => this.handleClickMessage(event, posting.id)}>Message</Button>
                  </div>
                </ListGroupItem>
              })}

          </ListGroup>
      </div>
    );
  }
}


export default Dashboard;
