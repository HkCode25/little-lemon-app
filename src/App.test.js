import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { timesReducer } from './App';
import { LoginL } from './Components/LoginL';
import Login from './Components/Login';
import React, { useState } from 'react';

// In your Jest setup file or at the top of your test file
/* jest.mock('./path/to/image.png', () => 'mocked-image.png');
 */

console.log(LoginL);

test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText("Reserve a Table!");
  expect(linkElement).toBeInTheDocument();
});



test('renders the submit button with text "Reserve Table"', () => {
  render(<BookingForm />);
  const buttonElement = screen.getByText('Reserve Table');
  expect(buttonElement).toBeInTheDocument();
});



/* test('timesReducer returns correct times for the given date', () => {
  const date = new Date('2026-04-11'); // April 11, 2026 is a Saturday
  const currentState = [];
  const action = { type: 'update', date: '2026-04-11' };
  const expectedState = (date.getDay() === 0 || date.getDay() === 6)
    ? ["18:00", "19:00", "20:00", "21:00"]
    : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  
  const newState = timesReducer(currentState, action);
  expect(newState).toEqual(expectedState);
});  */


 test('timesReducer returns the same state for unknown action type', () => {
  const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: 'unknown' };
  const newState = timesReducer(currentState, action);
  expect(newState).toEqual(currentState);
}); 


/* test('timesReducer returns the same state when no times are provided', () => {
  const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: 'update', date: '2026-04-11' }; 
  const newState = timesReducer(currentState, action);
  expect(newState).toEqual(currentState);
});  */



test('applies correct attributes to button', () => {
  render(<BookingForm />);

  const button = screen.getByRole('button');

  expect(button).toHaveAttribute('type', 'submit');
/*   expect(button).toBeDisabled();
 */});




test('time input accepts value', () => {
  const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];
  render(<BookingForm availableTimes={availableTimes}/>);
  
  const timeSelect = screen.getByLabelText("Choose time");
  
  fireEvent.change(timeSelect, { target: { value: '17:00' } });

  expect(timeSelect.value).toBe('17:00');
});


  

test('date input accepts value', () => {
const mockDispatch = jest.fn();

render(<BookingForm dispatch={mockDispatch}/>);

  const dateInput = screen.getByLabelText('Choose date');

  fireEvent.change(dateInput, { target: { value: '2026-04-17' } });

  expect(dateInput).toHaveValue('2026-04-17');
});




test('select input changes value', () => {
  render(<BookingForm />);

  const select = screen.getByLabelText('Occasion');

  fireEvent.change(select, { target: { value: "" } });

  expect(select.value).toBe("");
});




test('guests input accepts value', () => {
  render(<BookingForm />);

  const guestsInput = screen.getByLabelText('Number of guests');

  fireEvent.change(guestsInput, { target: { value: '4' } });

  expect(guestsInput.value).toBe('4');
});



/* test('renders error messages when form is submitted with empty fields', async () => {
  render(<BookingForm />);

  const submitButton = screen.getByText('Reserve Table');
  fireEvent.click(submitButton);
  screen.debug();
  
  expect(await screen.findByText('Please select a date.')).toBeInTheDocument();
  expect(await screen.findByText('Please select a time.')).toBeInTheDocument();
  expect(await screen.findByText('Guests must be between 1 and 10.')).toBeInTheDocument();
  expect(await screen.findByText('Please select an occasion.')).toBeInTheDocument();
}); */



/* 
test('renders error messages when form is submitted with empty fields', async () => {
  render(<LoginL />);

  const submitButton = screen.getByText('Login');
  fireEvent.click(submitButton);
  

  await userEvent.click(submitButton);
  
  expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  expect(screen.getByText('Please enter a password')).toBeInTheDocument();
}); */


test('renders error messages when form is submitted with empty fields', async () => {
  render(<LoginL />);

  const submitButton = screen.getByRole('button', { name: /Login/i });
  fireEvent.click(submitButton);

  expect(await screen.findByText('Please enter a valid email.')).toBeInTheDocument();
  expect(await screen.findByText('Please enter a password.')).toBeInTheDocument();
});



test('renders error messages when form is submitted with empty fields', async () => {
  render(<BookingForm />);

  // Get the submit button
  const submitButton = screen.getByRole('button', { name: /Reserve Table/i });

  // If button is disabled, enable it for the test
  if (submitButton.disabled) {
    submitButton.removeAttribute('disabled');
  }

  // Click submit without filling fields
  fireEvent.click(submitButton);

  // Assert error messages appear
  expect(await screen.findByText(/Please select a date/i)).toBeInTheDocument();
/*    expect(await screen.findByText(/Please select a time/i)).toBeInTheDocument();
 */  expect(await screen.findByText(/Guests must be between 1 and 10/i)).toBeInTheDocument();
  expect(await screen.findByText(/Please select an occasion/i)).toBeInTheDocument();
});







//This test is similar to the previous one but it also simulates changing the time select to an empty value before submitting, to ensure that the time validation error is triggered as well.
/* test('renders error messages when form is submitted with empty fields', async () => {
  render(<BookingForm />);

  const submitButton = screen.getByRole('button', { name: /Reserve Table/i });

  if (submitButton.disabled) {
    submitButton.removeAttribute('disabled');
  }

  fireEvent.click(submitButton);

  expect(await screen.findByText(/Please select a date/i)).toBeInTheDocument();
  expect(await screen.findByText(/Please select a time/i)).toBeInTheDocument();
  expect(await screen.findByText(/Guests must be between 1 and 10/i)).toBeInTheDocument();
  expect(await screen.findByText(/Please select an occasion/i)).toBeInTheDocument();
}); */


//This test is similar to the previous one but it also simulates changing the time select to an empty value before submitting, to ensure that the time validation error is triggered as well.
test('renders error messages when form is submitted with empty fields', async () => {
  render(<BookingForm />);

  const submitButton = screen.getByRole('button', { name: /Reserve Table/i });

  if (submitButton.disabled) {
    submitButton.removeAttribute('disabled');
  }

  const timeSelect = screen.getByLabelText(/choose time/i);
  fireEvent.change(timeSelect, { target: { value: '' } });

  fireEvent.click(submitButton);

  expect(await screen.findByText(/Please select a date/i)).toBeInTheDocument();
  expect(await screen.findByText(/Please select a time/i)).toBeInTheDocument();
  expect(await screen.findByText(/Guests must be between 1 and 10/i)).toBeInTheDocument();
  expect(await screen.findByText(/Please select an occasion/i)).toBeInTheDocument();
});
