import React from 'react';
import './HourCard.css';

export default function HourCard(props) {
  return (
    <article className="HourCard">
      <h3>{props.data.hour}</h3>
      <img src={props.data.img} alt={props.data.alt} />
      <h1>{props.data.temp + ' °F'}</h1>
    </article>
  );
}