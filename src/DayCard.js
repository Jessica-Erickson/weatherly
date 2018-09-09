import React, { Component } from 'react';
import './DayCard.css';

export default class DayCard extends Component {
  render() {
    return (
      <article className="DayCard">
        <h3>Saturday</h3>
        <img src='imgsrc' />
        <h3>HIGH: <span>82 °F</span></h3>
        <h3>LOW: <span>64 °F</span></h3>
        <img src='imgsrc' />
      </article>
    );
  }
}