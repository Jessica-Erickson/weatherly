import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Controls from './Controls';
import Forecast10Day from './Forecast10Day';
import ForecastHourly from './ForecastHourly';
import key from './key';
import largestCities from './largestCities';
import Trie from 'boilerplate';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      locationValue: '',
      locationFinal: '',
      conditionsData: {},
      forecastData: [],
      hourlyData: [],
      didSearch: false,
      suggestions: []
    };

    this.trie = new Trie();

    this.trie.populate(largestCities);

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
  }

  componentDidMount () {
    let location;
    if (localStorage.getItem('locationFinal') !== null) {
      this.setState({locationFinal: localStorage.getItem('locationFinal')});
      location = localStorage.getItem('locationFinal');
    } else {
      location = 'Denver, CO';
    }
    fetch('http://api.wunderground.com/api/' + key + '/conditions/forecast10day/hourly/q/' + location + '.json')
      .then(response => response.json())
      .then(response => {
        this.getConditionsData(response);
        this.getForecastData(response);
        this.getHourlyData(response);
      })
  }

  getConditionsData (data) {
    if (data.current_observation !== undefined) {
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
    } else {
      this.setState({conditionsData: 'error'});
    }
  }

  getForecastData (data) {
    if (data.forecast !== undefined) {
      const imgArray = data.forecast.txt_forecast.forecastday.reduce((acc, period, index) => {
        if (index % 2) {
        acc[acc.length - 1] = Object.assign(acc[acc.length - 1], {night: period.icon_url, night_alt: period.fcttext})
        } else {
          acc.push({day: period.icon_url, day_alt: period.fcttext});
        }
        return acc;
      }, []);    
      const smallForecast = data.forecast.simpleforecast.forecastday.map((day, index) => {
        return {
          day: day.date.weekday, 
          high: day.high.fahrenheit, 
          low: day.low.fahrenheit, 
          day_img: imgArray[index].day, 
          night_img: imgArray[index].night,
          day_alt: imgArray[index].day_alt,
          night_alt: imgArray[index].night_alt
      }});
      this.setState({forecastData: smallForecast});
    } else {
      this.setState({forecastData: 'error'});
    }
  }

  getHourlyData (data) {
    if (data.hourly_forecast !== undefined) {
      const smallHours = data.hourly_forecast.slice(0, 7).map(hour => {
        return {
          hour: hour.FCTTIME.civil, 
          img: hour.icon_url, 
          temp: hour.temp.english, 
          alt: hour.condition}
      })
      this.setState({hourlyData: smallHours});
    } else {
      this.setState({hourlyData: 'error'});
    }
  }

  handleLocationChange (event) {
    event.preventDefault();
    this.setState({locationValue: event.target.value});
    if (event.target.value !== '') {
      this.setState({suggestions: this.state.trie.suggest(event.target.value).slice(0, 10)});
    } else {
      this.setState({suggestions: []});
    }
  }

  handleLocationSubmit (event) {
    event.preventDefault();
    this.setState({locationFinal: this.state.locationValue});
    localStorage.setItem('locationFinal', this.state.locationValue);
    fetch('http://api.wunderground.com/api/' + key + '/conditions/forecast10day/hourly/q/' + this.state.locationValue + '.json')
      .then(response => response.json())
      .then(response => {
        this.getConditionsData(response);
        this.getForecastData(response);
        this.getHourlyData(response);
      })
    this.setState({locationValue: ''});
    this.setState({didSearch: true});
  }

  render () {
    return (
      <div className="App">
        <Banner data={this.state.conditionsData} />
        <Controls 
          onLocationSubmit={this.handleLocationSubmit} 
          onLocationChange={this.handleLocationChange} 
          locationValue={this.state.locationValue}
          didSearch={this.state.didSearch} 
          suggestions={this.state.suggestions}
        />
        <Forecast10Day data={this.state.forecastData} />
        <ForecastHourly data={this.state.hourlyData} /> 
      </div>
    );
  }
}