import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { timesReducer } from './App';
 




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



test('timesReducer returns correct times for the given date', () => {
  const date = new Date('2026-04-11'); // April 11, 2026 is a Saturday
  const currentState = [];
  const action = { type: 'update', date: '2026-04-11' };
  const expectedState = (date.getDay() === 0 || date.getDay() === 6)
    ? ["18:00", "19:00", "20:00", "21:00"]
    : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  
  const newState = timesReducer(currentState, action);
  expect(newState).toEqual(expectedState);
});