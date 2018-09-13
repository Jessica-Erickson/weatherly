import React from 'react';
import './Greeting.css';

export default function Greeting(props) {
   let greeting;

   if (props.didSearch && props.user === '') {
      greeting = 'Ok! Here is the weather you asked for :) (You can still tell me your name whenever you arecomfortable doing so!)';
   } else if (props.user === '') {
      greeting = 'Hi! My name is Weatherly! I don\'t need to know your name to show you the weather, buttelling me what your name is first is the polite thing to do. ;)';
   } else if (props.gaveName) {
     greeting = 'Hi, ' + props.user + '!';
   } else {
     greeting = 'Welcome back, ' + props.user + '!';
   }

   return <h1 className='Greeting'>{greeting}</h1>;
}