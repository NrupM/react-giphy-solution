import React, { Component } from 'react';
import './SearchContainer.css';
import Search from './Search';
import Results from './Results';

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
    let searchResponse = { "data": [
        {
          "type": "gif",
          "id": "iuHaJ0D7macZq",
          "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
          "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
          "rating": "pg",
          "images": {
            "fixed_height": {
              "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
            }
          }
        },
        {
          "type": "gif",
          "id": "Z1kpfgtHmpWHS",
          "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
          "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
          "rating": "g",
          "images": {
            "fixed_height": {
              "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
            }
          }
        }
      ],
      "meta": {
        "status": 200,
        "msg": "OK"
      },
      "pagination": {
        "total_count": 1947,
        "count": 25,
        "offset": 0
      }
    };
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
