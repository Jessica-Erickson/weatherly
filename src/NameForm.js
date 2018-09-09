import React, { Component } from 'react';
import './NameForm.css';

export default class NameForm extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form 
        className="NameForm" 
        onSubmit={this.props.onNameSubmit}
      >
        <input 
          type='text' 
          value={this.props.nameValue} 
          placeholder='Enter your name here!' 
          onChange={this.props.onNameChange} 
        />
        <input 
          type='submit' 
          value='Nice to meet you!' 
        />
      </form>
    );
  }
}