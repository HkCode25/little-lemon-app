import { render, screen, fireEvent, userEvent } from '@testing-library/react';
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
  expect(button).toBeDisabled();
});




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



{/* <div className="occasion">
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" name ="occasion" value={occasion} onChange={handleChange}>
      <option value="" disabled>
            Select an occasion
      </option>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Celebration</option>
      <option>No occasion</option>
   </select>
   {errors.occasion && <p className="error">{errors.occasion}</p>}
   </div> */}