import React from 'react';
import './DayCard.css';

export default function DayCard(props) {
  return (
    <article className="DayCard">
      <h2>{props.data.day}</h2>
      <img src={props.data.day_img} alt={props.data.day_alt} />
      <h3>{'HIGH: ' + props.data.high + ' °F'}</h3>
      <h3>{'LOW: ' + props.data.low + ' °F'}</h3>
      <img src={props.data.night_img} alt={props.data.night_alt} />
    </article>
  );
}
