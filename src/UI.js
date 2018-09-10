import React, { Component } from 'react';
import './UI.css';
import Greeting from './Greeting';
import NameForm from './NameForm';
import SearchForm from './SearchForm';

export default class UI extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nameValue: '',
      userName: '',
      gaveName: false
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }

  componentDidMount () {
    if (localStorage.getItem('userName') !== null) {
      this.setState({userName: localStorage.getItem('userName')}); 
    }
  }

  handleNameChange (event) {
    event.preventDefault();
    this.setState({nameValue: event.target.value});
  }

  handleNameSubmit (event) {
    event.preventDefault();
    this.setState({userName: this.state.nameValue, gaveName: true});
    localStorage.setItem('userName', this.state.nameValue);
  }

  render() {
    return (
      <aside className="UI">
        <Greeting 
          user={this.state.userName}
          gaveName={this.state.gaveName} 
        />
        {this.state.userName === '' && <NameForm 
          onNameSubmit={this.handleNameSubmit} 
          onNameChange={this.handleNameChange} 
          nameValue={this.state.nameValue} 
        />}
        <SearchForm 
          onLocationSubmit={this.props.onLocationSubmit} 
          onLocationChange={this.props.onLocationChange}
          locationValue={this.props.locationValue}
        />
      </aside>
    );
  }
}