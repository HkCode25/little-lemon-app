import "./BookingForm.css";
import React, { useState } from 'react';
import { submitAPI } from "../api";
import { useNavigate } from 'react-router-dom';


function BookingForm({ availableTimes, dispatch }) {
   const [date, setDate] = React.useState("");
   const today = new Date().toISOString().split('T')[0];
   const [selectedTime, setSelectedTime] = useState("17:00"); // default selected time
   const [guests, setGuests] = useState("1");
   const [occasion, setOccasion] = useState("");
   const [errors, setErrors] = useState({});
   



    function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate); // update local state so input reflects the change
    dispatch({ type: "update", date: selectedDate });
  }


const validate = () => {
  const newErrors = {};
  if (!date) newErrors.date = "Please select a date.";
  if (!selectedTime) newErrors.time = "Please select a time.";
  if (!guests || guests < 1 || guests > 10)
    newErrors.guests = "Guests must be between 1 and 10.";
  if (!occasion) newErrors.occasion = "Please select an occasion.";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};



const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "date") setDate(value);
  else if (name === "SelectedTime") setSelectedTime(value);
  else if (name === "guests") setGuests(value);
  else if (name === "occasion") setOccasion(value);
};


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
   if (!validate()) return; // Stop submission if invalid

   const formData = {
    date,
    time: selectedTime,
    guests,
    occasion,
   };


 const success = submitAPI(formData);
  if (success) {
    alert(`Booking successful! Table reserved on: ${date} at ${selectedTime}\nNumber of guests: ${guests}`);
    // Optionally reset form fields here
    setDate("");
    setSelectedTime("17:00");
    setGuests("1");
    setOccasion("");
  } else {
    alert("Failed to book table. Please try again.");
  }
};




return (

<form onSubmit={handleSubmit} className="bookingForm">
   <>
   <h1>Reserve a Table!</h1>
   </>

   <fieldset> 

   <div className="date">
   <label htmlFor="res-date">Choose date</label>
   <input type="date" name ="date" id="res-date" min={today} value={date} onChange={handleDateChange} required/>
   {errors.date && <p className="error">{errors.date}</p>}
   </div>

   <div className="time">
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" name="SelectedTime" value={selectedTime} onChange={handleChange} required>
   {availableTimes && availableTimes.map(time =>  (
      <option key={time} value={time}>{time}</option>
   ))}
   </select>
   {errors.time && <p className="error">{errors.time}</p>}
   </div>

   <div className="guests">
   <label htmlFor="guests">Number of guests</label>
   <input type="number" name ="guests" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleChange} required/>
   {errors.guests && <p className="error">{errors.guests}</p>}
   </div>

   <div className="occasion">
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
   </div>

   <button type="submit" onSubmit={handleSubmit}>Reserve Table</button>

   </fieldset> 

</form>

);
}
export default BookingForm;


