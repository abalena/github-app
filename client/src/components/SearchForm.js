import React from 'react';

export default class SearchForm extends React.Component {

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <div className='SearchForm'>
        <form onSubmit={this.handleSubmit} >
          <input type="search"
                 onChange={this.onSearchChange}
                 name="search"
                 ref={(input) => this.query = input}
                 placeholder="Search..." />
        </form>
      </div>
    );
  }
}
