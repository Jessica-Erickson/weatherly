import React, { Component } from 'react';
import './HourCard.css';

export default class HourCard extends Component {
  render() {
    return (
      <article className="HourCard">
        <h3>8:00 AM</h3>
        <img src='imgsrc' />
        <h1>72 °F</h1>
      </article>
    );
  }
}