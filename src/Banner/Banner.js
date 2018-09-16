import React from 'react';
import './Banner.css';

export default function Banner(props) {
  if (props.data !== 'error') {
    return (
      <header className="Banner">
        <ul>
          <li>{props.data.city}</li>
          <li>{props.data.condition}</li>
          <li>{props.data.temp + ' °F'}</li>
          <li>{props.data.weekday + ', ' + props.data.month + ' ' + props.data.date}</li>
          <li>{'High: ' + props.data.high + ' °F'}</li>
          <li>{'Low: ' + props.data.low + ' °F'}</li>
          <li>{props.data.summary}</li>
        </ul>
      </header>
    );
  } else {
    return (
      <header className="Banner">
        <h1>I'm sorry; I can't find any data for your last location :(</h1>
      </header>
    );
  }
}