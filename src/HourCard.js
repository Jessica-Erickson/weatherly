import React, { Component } from 'react';
import './HourCard.css';

export default class HourCard extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <article className="HourCard">
        <h3>{this.props.data.hour}</h3>
        <img src={this.props.data.img} alt={this.props.data.alt} />
        <h1>{this.props.data.temp + ' °F'}</h1>
      </article>
    );
  }
}