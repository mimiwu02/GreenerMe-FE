import React, {Component} from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import SearchPost from '../utils/helpers';
import Timestamp from 'react-timestamp';

class Search extends Component {
  constructor(props){
    super(props);
      console.log(props);
      this.state = {
        searchText: "",
        response:  []
      };
    }

  handleSearch(event) {
    SearchPost.findPost(this.state.searchText).then((res) => {
      this.setState({
        response:res
      })
    })
  }

  handleChange(event){
    this.setState({ searchText: event.target.value})
  }

  onClick(event){
    SearchPost.delete(event.target.value).then(res => {
      console.log("Deleted!");
    });
  }

  render() {
    const postings = this.state.response;
    return(
      <div>
        <p>Search for others who are trading in your area by zipcode:</p>
        <input onChange={this.handleChange.bind(this)} />

        <Button bsStyle="primary" bsSize="small" onClick={this.handleSearch.bind(this)}>search</Button>
        <h3>{this.state.searchText}</h3>
        <ListGroup>
        {postings.map((posting, _id) => {
          return (
            <ListGroupItem key={_id}>
              <p><b><Timestamp time={posting.created_at} format='full'/></b></p>
              <p>Name: {posting.name}</p>
              <p>Email: {posting.email}</p>
              <p>Zip: {posting.zip}</p>
              <p>Title: {posting.title}</p>
              <p>Post: {posting.content}</p>
              <Button bsStyle="danger" bsSize="small" className='deleteBtn' value={posting.id} onClick={(event) => this.onClick(event)}>Delete</Button>
            </ListGroupItem>
          );
        })}
        </ListGroup>
      </div>
    );
  }
}

 Search.defaultProps = {
 results: "loading..."
};

export default Search;
