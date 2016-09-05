import React, {Component} from 'react';
import { Button, ListGroup, ListGroupItem, FormControl } from 'react-bootstrap';
import SearchPost from '../utils/helpers';
import Timestamp from 'react-timestamp';
import "../styles/search.css";

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
    SearchPost.findByZip(this.state.searchText).then((res) => {
      this.setState({
        response:res
      })
    })
  }

  handleChange(event){
    this.setState({ searchText: event.target.value})
  }

  handleClickMessage(event){
    event.preventDefault();
    browserHistory.push('/message');
  }
  
  render() {
    const postings = this.state.response;
    return(
      <div>
        <p className="desc">Search for others who are trading in your area by zip code:</p>
        <FormControl className="zipSearch" placeholder="zip code" onChange={this.handleChange.bind(this)} />

        <Button className="searchButton" bsStyle="warning" bsSize="small" onClick={this.handleSearch.bind(this)}>search</Button>
        <h3>{this.state.searchText}</h3>
        <ListGroup>
        {postings.map((posting, _id) => {
          return (
            <ListGroupItem key={_id}>
              <p className="desc"><b><Timestamp time={posting.created_at} format='full'/></b></p>
              <p>Name: {posting.name}</p>
              <p>Email: {posting.email}</p>
              <p>Zip: {posting.zip}</p>
              <p>Title: {posting.title}</p>
              <p>Post: {posting.content}</p>
              <div className="buttons">
                  <Button className='messageBtn' bsStyle="link" bsSize="small" value={posting.id} onClick={e => this.handleClickMessage(event, posting.id)}>Message</Button>
              </div>
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
