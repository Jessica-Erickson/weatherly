import React, { Component } from 'react';
import './ForecastHourly.css';
import HourCard from './HourCard';

export default class ForecastHourly extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <aside className="ForecastHourly">
        {this.props.data.map(datum => {
          return <HourCard data={datum} />
        })}
      </aside>
    );
  }
}
