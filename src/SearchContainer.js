import React, { Component } from 'react';
import $ from 'jquery';
import './SearchContainer.css';
import Search from './Search';
import Results from './Results';

const searchGifs = (query) => {
  // http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
  const giphyApi = {
    baseUrl: 'http://api.giphy.com',
    searchEndpoint: '/v1/gifs/search',
    publicApiKey: 'dc6zaTOxFJmzC'
  }

  return $.ajax({
    url: giphyApi.baseUrl + giphyApi.searchEndpoint,
    method: 'GET',
    data: {
      api_key: giphyApi.publicApiKey,
      q: query
    }
  }).then((response) =>
    response['data']
  );
};

class SearchContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      query: '',
      searched: false,
      results: []
    }
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`searched! ${this.state.query}`);
    searchGifs(this.state.query).then((gifs) => {
      console.log('gifs from search resposne', gifs);
      // redefine our app's state to include populated response
      this.setState({
        results: gifs,
        searched: true // flip the switch
      });
    });
  }

  render() {
    return (
      <div className="SearchContainer">
        <Search
          handleSubmit={(event) => this.handleSubmit(event)}
          handleChange={(event) => this.handleChange(event)}
          query={this.state.query}
        />
        <Results
          searchResults={this.state.results}
        />
      </div>
    );
  }
}

export default SearchContainer;
