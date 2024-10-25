import React, { Component } from "react";
import './card.css';

export class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img src="https://robohash.org/9?set=set2&size=180x180" alt="monster" />
        <h2>Name</h2>
        <p>Email Address</p>
      </div>
    );
  }
}

export default Card;
