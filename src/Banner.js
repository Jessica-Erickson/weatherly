import React, { Component } from 'react';
import './Banner.css';

export default class Banner extends Component {
  constructor (props) {
    super(props);

  }

  render() {
    if (props.data.city !== undefined) {
      return (
        <header className="Banner">
          <ul>
            <li>{this.props.data.city}</li>
            <li>{this.props.data.condition}</li>
            <li>{this.props.data.temp + ' °F'}</li>
            <li>{this.props.data.weekday + ', ' + this.props.data.month + ' ' + this.props.data.date}</li>
            <li>{'High: ' + this.props.data.high + ' °F'}</li>
            <li>{'Low: ' + this.props.data.low + ' °F'}</li>
            <li>{this.props.data.summary}</li>
          </ul>
        </header>
      );
    } else {
      return (
        <header className="Banner">
          <h1>I'm sorry; I can't find any data for that location :(</h1>
        </header>
      );
    }
  }
}