import React, { Component } from 'react';
import './Controls.css';
import Greeting from './Greeting';
import NameForm from './NameForm';
import SearchForm from './SearchForm';

export default class Controls extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nameValue: '',
      userName: '',
      gaveName: false,
      changeName: false,
      hadName: false
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  componentDidMount () {
    if (localStorage.getItem('userName') !== null) {
      this.setState({userName: localStorage.getItem('userName'), changeName: true, hadName: true}); 
    }
  }

  handleNameChange (event) {
    event.preventDefault();
    this.setState({nameValue: event.target.value});
  }

  handleNameSubmit (event) {
    event.preventDefault();
    if (this.state.nameValue !== '') {
      this.setState({userName: this.state.nameValue, gaveName: true, changeName: true, hadName: true, nameValue: ''});
      localStorage.setItem('userName', this.state.nameValue);
    }
  }

  handleChangeName (event) {
    event.preventDefault();
    this.setState({userName: '', changeName: false});
  }

  render() {
    return (
      <aside className="Controls">
        <Greeting 
          user={this.state.userName}
          gaveName={this.state.gaveName}
          changeName={this.state.changeName}
          hadName={this.state.hadName}
          didSearch={this.props.didSearch}
        />
        {this.state.changeName && 
          <input 
            type='submit' 
            value='Change my name.'
            onClick={this.handleChangeName}
        />}
        {this.state.userName === '' && 
          <NameForm 
            onNameSubmit={this.handleNameSubmit} 
            onNameChange={this.handleNameChange} 
            nameValue={this.state.nameValue} 
        />}
        <SearchForm 
          onLocationSubmit={this.props.onLocationSubmit} 
          onLocationChange={this.props.onLocationChange}
          locationValue={this.props.locationValue}
          suggestions={this.props.suggestions}
        />
      </aside>
    );
  }
}