import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  // constructor (props) {
  //   super()
  //   this.state = {
  //     query: ''
  //   }
  // }
  //
  // handleChange(event) {
  //   this.setState({query: event.target.value});
  // }
  //
  // handleSubmit(event) {
  //   // setState is inherited from the Component class
  //   event.preventDefault();
  //   console.log(`searched! ${this.state.query}`);
  // }

  render() {
    return (
      <div className="Search">
        <form className="Search-form" onSubmit={this.props.handleSubmit}>
          <input type="text"
                 value={this.props.query}
                 onChange={this.props.handleChange}
                 placeholder="enter search term" />
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
    // return (
    //   <div className="Search">
    //     <form className="Search-form" onSubmit={(e) => this.handleSubmit(e)}>
    //       <input type="text"
    //                 value={this.state.query}
    //                 onChange={(e) => this.handleChange(e)}
    //                 placeholder="enter search term" />
    //       <br />
    //       <input type="submit" />
    //     </form>
    //   </div>
    // );
  }
}

export default Search;
