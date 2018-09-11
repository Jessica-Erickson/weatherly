import React, { Component } from 'react';
import './DayCard.css';

export default class DayCard extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <article className="DayCard">
        <h2>{this.props.data.day}</h2>
        <img src={this.props.data.day_img} alt={this.props.data.day_alt} />
        <h3>{'HIGH: ' + this.props.data.high + ' °F'}</h3>
        <h3>{'LOW: ' + this.props.data.low + ' °F'}</h3>
        <img src={this.props.data.night_img} alt={this.props.data.night_alt} />
      </article>
    );
  }
}
