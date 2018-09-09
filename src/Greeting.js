import React, { Component } from 'react';
import './Greeting.css';

export default class Greeting extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let greeting;

    if (this.props.user === '') {
      greeting = 'Hi! My name is Weatherly! I don\'t need to know your name to show you the weather, but telling me what your name is first is the polite thing to do. ;)';
    } else {
      greeting = 'Welcome back, ' + this.props.user + '!';
    }

    return <h1>{greeting}</h1>;
  }
}