import React, { Component } from 'react';
import './SearchForm.css';

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form 
        className="SearchForm" 
        onSubmit={this.props.onLocationSubmit}
      >
        <input 
          type='text' 
          value={this.props.locationValue} 
          placeholder='Enter City, State or ZIP Code here!' 
          onChange={this.props.onLocationChange} 
        />
        <input 
          type='submit' 
          value='GO!' 
        />
      </form>
    );
  }
}