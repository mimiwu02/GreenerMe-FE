import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import SearchPost from '../utils/helpers';

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

  render() {
    const postings = this.state.response;
    return(
      <div>
        <p>Search by zipcode:</p>
        <input onChange={this.handleChange.bind(this)} />

        <Button bsStyle="primary" bsSize="small" onClick={this.handleSearch.bind(this)}>search</Button>
        <h3>{this.state.searchText}</h3>
        <ul>
        {postings.map(function (posting, _id){
          return (
            <li key={_id}>
              <p>Name: {posting.name}</p>
              <p>Email: {posting.email}</p>
              <p>Zip: {posting.zip}</p>
              <p>Title: {posting.title}</p>
              <p>Post: {posting.content}</p>
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
}

 Search.defaultProps = {
 results: "loading..."
};

export default Search;
