import React, { Component } from 'react';
import './Banner.css';

export default class Banner extends Component {
  constructor (props) {
    super(props);

  }

  render() {
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
  }
}