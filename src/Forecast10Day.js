import React from 'react';
import './Forecast10Day.css';
import DayCard from './DayCard';

export default function Forecast10Day(props) {
  return (
    <main className="Forecast10Day">
      {props.data !== 'error' && props.data.map(datum => {
        return <DayCard data={datum} />
      })}
    </main>
  );
}