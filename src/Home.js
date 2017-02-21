import React, { Component } from 'react';
import './Home.css';
import SearchContainer from './SearchContainer';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Hello World</h1>
        <hr />
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
