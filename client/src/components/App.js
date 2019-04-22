import React from 'react';
import axios from 'axios';
import ListOfUsers from './ListOfUsers.js';
import SearchForm from './SearchForm.js';
import * as api from '../api/index.js';

import '../style.css'

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
    api.searchUsersByLocation(query)
    .then(response => {
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
        <div className='content'>
          {
            (!this.state.query)
            ?<p>Loading...</p>
            : <div>{this.state.query}
             <ListOfUsers data={this.state.users} />
             </div>
          }
        </div>
      </div>
    );
  }
}
