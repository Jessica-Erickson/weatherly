import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import UI from './UI';
import Forecast10Day from './Forecast10Day';
import ForecastHourly from './ForecastHourly';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <UI />
        <Forecast10Day />
        <ForecastHourly /> 
      </div>
    );
  }
}