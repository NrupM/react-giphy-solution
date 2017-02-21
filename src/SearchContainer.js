import React, { Component } from 'react';
import './SearchContainer.css';
import Search from './Search';
import Results from './Results';

const searchGifs = (query) => {
  // http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
  const searchUrl = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
  let term = query.replace(/\s/, "+"); // replace any spaces with a "+"

  // fetch all gifs matching the passed in phrase
  return $.getJSON(searchUrl+term).then((response) =>
    response["Search"]
  )
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
    searchGifs(this.state.query).then((response) => {
      console.log(response);
    //   // redefine our app's state to include populated response
    //   this.setState({
    //     results: movies,
    //     query: "",
    //     searched: true // flip the switch
    //   })
    });
    this.setState({
      searched: true,
      results: searchResponse.data
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
