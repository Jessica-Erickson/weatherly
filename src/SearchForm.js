import React, { Component } from 'react';
import './SearchForm.css';
import TextInput from './TextInput';
import Suggestions from './Suggestions';
import SubmitButton from './SubmitButton';

export default class SearchForm extends Component {
  render() {
    return (
      <form className="SearchForm" onSubmit={this.props.onSearchSubmit}>
        
      </form>
    );
  }
}