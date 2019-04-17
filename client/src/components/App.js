import React from 'react';
import axios from 'axios';
import ListOfUsers from './ListOfUsers.js';
import SearchForm from './SearchForm.js';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [],
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
    axios.get(`https://api.github.com/search/users?q=location:${query}&per_page=10`)
      .then(response => {
        console.log(response.data.items)
        this.setState({
          query: query,
          users: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={this.performSearch} />
        <div>
          {
            (this.state.loading)
            ?<p>Loading...</p>
            : <div><h2>{this.state.query}</h2>
             <ListOfUsers data={this.state.users} />
             </div>
          }
        </div>
      </div>
    );
  }
}
