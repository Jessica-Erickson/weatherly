import React from 'react';
import './SearchForm.css';

export default function SearchForm (props) {
  return (
    <form 
      className="SearchForm" 
      onSubmit={props.onLocationSubmit}
    >
      <input 
        type='text' 
        value={props.locationValue} 
        placeholder='Enter City, State or ZIP Code here!' 
        onChange={props.onLocationChange}
        list='suggestions' 
      />
      <datalist id='suggestions'>
        {props.suggestions.map((suggestion, index) => {
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