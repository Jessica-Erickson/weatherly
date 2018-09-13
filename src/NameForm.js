import React from 'react';
import './NameForm.css';

export default function NameForm(props) {
  return (
    <form 
      className="NameForm" 
      onSubmit={props.onNameSubmit}
    >
      <input 
        type='text' 
        value={props.nameValue} 
        placeholder='Enter your name here!' 
        onChange={props.onNameChange} 
      />
      <input 
        type='submit' 
        value='Nice to meet you!' 
      />
    </form>
  );
}