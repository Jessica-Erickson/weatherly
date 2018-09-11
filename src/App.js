import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import UI from './UI';
import Forecast10Day from './Forecast10Day';
import ForecastHourly from './ForecastHourly';
import data from './data';
// import key from './key';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      locationValue: '',
      locationFinal: 'Denver, CO',
      conditionsData: {},
      forecastData: [],
      hourlyData: []
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
  }

  componentDidMount () {
    if (localStorage.getItem('locationFinal') !== null) {
      this.setState({locationFinal: localStorage.getItem('locationFinal')}); 
    }
  }

  getConditionsData () {
    this.setState({conditionsData: {
      city: data.response.current_observation.display_location.full
      condition: data.response.current_observation.weather
      weekday: data.response.forecast.simpleforecast.forecastday[0].date.weekday
      month: data.response.forecast.simpleforecast.forecastday[0].date.monthname
      date: data.response.forecast.simpleforecast.forecastday[0].date.day
      temp: data.response.current_observation.temperature_string
      high_f: data.response.forecast.simpleforecast.forecastday[0].high.fahrenheit
      high_c: data.response.forecast.simpleforecast.forecastday[0].high.celsius
      low_f: data.response.forecast.simpleforecast.forecastday[0].low.fahrenheit
      low_c: data.response.forecast.simpleforecast.forecastday[0].low.celsius
      summary: data.response.forecast.txt_forecast.forecastday[0].fcttext
    }});
  }

  getForecastData () {

  }

  getHourlyData () {

  }

  handleLocationChange (event) {
    event.preventDefault();
    this.setState({locationValue: event.target.value});
  }

  handleLocationSubmit (event) {
    event.preventDefault();
    this.setState({locationFinal: this.state.locationValue});
    localStorage.setItem('locationFinal', this.state.locationValue);
    this.setState({locationValue: ''});
  }

  render () {
    return (
      <div className="App">
        <Banner />
        <UI 
          onLocationSubmit={this.handleLocationSubmit} 
          onLocationChange={this.handleLocationChange} 
          locationValue={this.state.locationValue} 
        />
        <Forecast10Day />
        <ForecastHourly /> 
      </div>
    );
  }
}