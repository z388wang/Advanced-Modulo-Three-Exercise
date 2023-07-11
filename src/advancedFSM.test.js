import { finiteStateMachine } from './modThreeCalculator';

test('Testcase 1101', function() {
  const inputString = '1101';
  const resultState = finiteStateMachine.checkInput(inputString);
  const reminder = finiteStateMachine.findReminder(resultState);
  expect(reminder).toBe(1);
  expect(resultState).toBe('S1');
});

test('Testcase 1110', function() {
  const inputString = '1110';
  const resultState = finiteStateMachine.checkInput(inputString);
  const reminder = finiteStateMachine.findReminder(resultState);
  expect(reminder).toBe(2);
  expect(resultState).toBe('S2');
  
});

test('Testcase 1111', function() {
  const inputString = '1111';
  const resultState = finiteStateMachine.checkInput(inputString);
  const reminder = finiteStateMachine.findReminder(resultState);
  expect(reminder).toBe(0);
  expect(resultState).toBe('S0');
  
});