import React from "react";
import "./search-box.css";

const SearchBox = (props) => {
  return (
    <input
      className="search-box"
      id="email"
      type="search"
      placeholder="Search Monsters"
      onChange={props.onSearchChange}
    />
  );
};

export default SearchBox;
