
function FiniteStateMachine(states, alphabet, initialState, acceptingStates, transitionFunction) {
    function checkInput(input) {
        let currentState = initialState;
        for (const character of input) {
            if (!alphabet.includes(character)) {
                throw new Error(`Invalid input character: ${character}`);
              }
          currentState = transitionFunction(currentState, character);
        }
        return currentState;
      }
  
    function findReminder(state) {
      return states.indexOf(state);
    }
  
    return {
      checkInput,
      findReminder
    };
  }

  export default FiniteStateMachine;