import React, { Component } from 'react';
import './SearchForm.css';
import largestCities from './largestCities';
import Trie from '@jessica-erickson/complete-me'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      trie: new Trie()
    }

    this.state.trie.populate(largestCities);
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
          list='suggestions' 
        />
        <datalist id='suggestions'>
          {this.state.trie.suggestions(this.props.locationValue).slice(0, 10).map((suggestion, index) => {
            return <option value={suggestion} key={index} />
          })}
        </datalist>
        <input 
          type='submit' 
          value='GO!' 
        />
      </form>
    );
  }
}