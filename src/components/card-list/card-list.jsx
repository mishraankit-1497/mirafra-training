import React, { Component } from "react";
import './card-list.css';
import Card from "../card/card";

export class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        <Card />
      </div>
    );
  }
}

export default CardList;
