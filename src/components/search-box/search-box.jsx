import React, { Component } from "react";
import './search-box.css';

export class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        id="email"
        type="search"
        placeholder="Search Monsters"
      />
    );
  }
}

export default SearchBox;
