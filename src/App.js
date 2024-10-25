import React, { Component } from "react";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  render() {
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;

    return (
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <SearchBox searchField={searchField}/>
        <button type="submit">Submit</button>
        <CardList monsters={monsters}/>
      </div>
    );
  }
}

export default App;
