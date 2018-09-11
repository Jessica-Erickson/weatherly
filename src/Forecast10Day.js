import React, { Component } from 'react';
import './Forecast10Day.css';
import DayCard from './DayCard'

export default class Forecast10Day extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <main className="Forecast10Day">
        {this.props.data.map(datum => {
          return <DayCard data={datum} />
        })}
      </main>
    );
  }
}