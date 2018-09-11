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
    this.getConditionsData();
    this.getForecastData();
    this.getHourlyData();
  }

  getConditionsData () {
    const smallConditions = {
      city: data.current_observation.display_location.full,
      condition: data.current_observation.weather,
      temp: data.current_observation.temp_f,
      weekday: data.forecast.simpleforecast.forecastday[0].date.weekday,
      month: data.forecast.simpleforecast.forecastday[0].date.monthname,
      date: data.forecast.simpleforecast.forecastday[0].date.day,
      high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext
    }
    this.setState({conditionsData: smallConditions});
  }

  getForecastData () {
    const imgArray = data.forecast.txt_forecast.forecastday.reduce((acc, period, index) => {
      if (index % 2) {
        acc[acc.length - 1] = Object.assign(acc[acc.length - 1], {night: period.icon_url})
      } else {
        acc.push({day: period.icon_url});
      }
      return acc;
    }, []);    
    const smallForecast = data.forecast.simpleforecast.forecastday.map((day, index) => {
      return {
        day: day.date.weekday, 
        high: day.high.fahrenheit, 
        low: day.low.fahrenheit, 
        day_img: imgArray[index].day, 
        night_img: imgArray[index].night}
    });
    this.setState({forecastData: smallForecast});
  }

  getHourlyData () {
    const smallHours = data.hourly_forecast.slice(0, 7).map(hour => {
      return {hour: hour.FCTTIME.civil, img: hour.icon_url, temp: hour.temp.english}
    })
    this.setState({hourlyData: smallHours});
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
        <Banner data={this.state.conditionsData} />
        <UI 
          onLocationSubmit={this.handleLocationSubmit} 
          onLocationChange={this.handleLocationChange} 
          locationValue={this.state.locationValue} 
        />
        <Forecast10Day data={this.state.forecastData} />
        <ForecastHourly data={this.state.hourlyData} /> 
      </div>
    );
  }
}