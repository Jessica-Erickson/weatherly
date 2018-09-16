import React from 'react';
import './ForecastHourly.css';
import HourCard from './HourCard';

export default function ForecastHourly (props) {
  return (
    <aside className="ForecastHourly">
      {props.data !== 'error' && props.data.map((datum, index) => {
        return <HourCard data={datum} key={index} />
      })}
    </aside>
  );
}
