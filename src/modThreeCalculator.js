import React, { useState } from 'react';
import './modThreeCalculator.css';
import FiniteStateMachine from './advancedFSM';

// Generating a FiniteStateMachine using the imported module
export const finiteStateMachine = new FiniteStateMachine(
  ['S0', 'S1', 'S2'],    
  ['0', '1'],             
  'S0',                   
  ['S0', 'S1', 'S2'],     
  (state, symbol) => {    
      switch(state) {
          case 'S0': 
              return symbol === '0' ? 'S0' : 'S1';
          case 'S1':
              return symbol === '0' ? 'S2' : 'S0';
          case 'S2':
              return symbol === '0' ? 'S1' : 'S2';
          default: 
              break;
      }
  }
);

function ModThreeCalculator() {

  const [inputString, setInputString] = useState('');
  const [reminder, setReminder] = useState('N/A');
  const [stateValue, setStateValue] = useState('N/A');

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const resultState = finiteStateMachine.checkInput(inputString);
    const reminder = finiteStateMachine.findReminder(resultState);
    setReminder(reminder);
    setStateValue(resultState);
  };

  return (
    <div className="fsm-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputString}
          onChange={handleInputChange}
          placeholder="Enter binary (e.g. 1101)"
        />
        <button type="submit">Calculate</button>
      </form>
        <p>Result State is {stateValue} and reminder is {reminder}</p>
    </div>
  );
}

export default ModThreeCalculator;