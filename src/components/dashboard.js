import React, {Component} from 'react';
import "../styles/dashboard.css";
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
        <p>Lastest Postings</p>
        <button onClick={this.handleClick.bind(this)}>View Posts</button>
          <hr></hr>
          <ul>
              {postings.map(function (posting, index) {
                return <li key={index}>Name: {posting.name} Email: {posting.email} Zip: {posting.zip} Title: {posting.title} Post: {posting.content} Posted: <Timestamp time={posting.created_at} format='full'/></li>
              })}
          </ul>
      </div>
    );
  }
}


export default Dashboard;
