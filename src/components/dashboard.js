import React, {Component} from 'react';
import "../styles/dashboard.css";
import { Button } from 'react-bootstrap';
import AllPosts from '../utils/helpers';
import Timestamp from 'react-timestamp';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      response: []
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

  render() {
    const postings = this.state.response;
    const index = 0;
    return(
      <div>
        <Button className="viewBtn" bsStyle="success" bsSize="small" onClick={this.handleClick.bind(this)}>View Lastest Posts</Button>
          <hr></hr>
          <ul>
              {postings.map(function (posting, index) {
                return <li key={index}>
                  <p><b><Timestamp time={posting.created_at} format='full'/></b></p>
                  <p>Name: {posting.name}</p>
                  <p>Email: {posting.email}</p>
                  <p>Zip: {posting.zip}</p>
                  <p>Title: {posting.title}</p>
                  <p>Post: {posting.content}</p><br/>
                </li>
              })}
          </ul>
      </div>
    );
  }
}


export default Dashboard;
