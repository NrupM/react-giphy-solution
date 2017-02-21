import React, { Component } from 'react';
import Search from './Search';

class SearchContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      query: ''
    }
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    // setState is inherited from the Component class
    event.preventDefault();
    console.log(`searched! ${this.state.query}`);
  }

  render() {
    return (
      <Search
        handleSubmit={(event) => this.handleSubmit(event)}
        handleChange={(event) => this.handleChange(event)}
        query={this.state.query}
      />
    );
  }
}

export default SearchContainer;
