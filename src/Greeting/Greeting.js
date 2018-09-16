import React from 'react';
import './Greeting.css';

export default function Greeting(props) {
  let greeting;

  if (props.didSearch && !props.hadName) {
    greeting = 'Ok! Here is the weather you asked for :) (You can still tell me your name whenever you are comfortable doing so!)';
  } else if (props.hadName && !props.changeName) {
    greeting = 'Ok! What should I call you?';
  } else if (!props.hadName) {
    greeting = 'Hi! My name is Weatherly! I don\'t need to know your name to show you the weather, but telling me what your name is first is the polite thing to do. ;)';
  } else if (props.gaveName) {
    greeting = 'Hi, ' + props.user + '!';
  } else {
    greeting = 'Welcome back, ' + props.user + '!';
  }

  return <h1 className='Greeting'>{greeting}</h1>;
}