import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import UI from './UI';
import Forecast10Day from './Forecast10Day';
import ForecastHourly from './ForecastHourly';

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
    if (!localStorage.getItem('locationFinal')) {
      this.setState({locationFinal: localStorage.getItem('locationFinal')}); 
    }
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