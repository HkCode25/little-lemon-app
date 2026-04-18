import "./BookingForm.css";
import React, { useState } from 'react';
import { submitAPI } from "../api";
/* import { useNavigate } from 'react-router-dom';
 */

function BookingForm({ availableTimes, dispatch }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [date, setDate] = React.useState("");
  const today = new Date().toISOString().split('T')[0];
  const [selectedTime, setSelectedTime] = useState(""); // default selected time
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!firstname || firstname.trim().length < 2) newErrors.firstname = "First name must be at least 2 characters.";
  if (!lastname || lastname.trim().length < 2) newErrors.lastname = "Last name must be at least 2 characters.";
  if (!date) newErrors.date = "Please select a date.";
  /* if (!selectedTime) newErrors.time = "Please select a time."; */
  if (!selectedTime || selectedTime === "") newErrors.time = "Please select a time";
  if (!guests || guests < 1 || guests > 10)
    newErrors.guests = "Guests must be between 1 and 10.";
  if (!occasion) newErrors.occasion = "Please select an occasion.";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};




const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "firstname") setFirstname(value);
  if (name === "lastname") setLastName(value);
  if (name === "date") setDate(value);
  else if (name === "selectedTime") setSelectedTime(value);
  else if (name === "guests") setGuests(value);
  else if (name === "occasion") setOccasion(value);
};


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
   if (!validate()) return; // Stop submission if invalid

   const formData = {
    firstname,
    lastname,
    date,
    time: selectedTime,
    guests,
    occasion,
   };

 const success = submitAPI(formData);
  if (success) {
    alert(`Booking successful! Table reserved for: ${firstname} ${lastname} on: ${date} at ${selectedTime}\nNumber of guests: ${guests}`);
    // Optionally reset form fields here
    setFirstname("");
    setLastName("");
    setDate("");
    setSelectedTime(""); // reset to default time
    setGuests("");
    setOccasion("");
  } else {
    alert("Failed to book table. Please try again.");
  }
};

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate); // update local state so input reflects the change
    dispatch({ type: 'update_times', date: selectedDate }); // update available times in parent component
  }


return (

<form onSubmit={handleSubmit} className="bookingForm">
   <>
   <h1>Reserve a Table!</h1>
   </>

   <fieldset> 

        <div className='firstName'>
           <label htmlFor="firstName">First Name</label><br />
           <input 
             id="firstName"
             type="text" 
             placeholder='First Name' 
             name='firstname' 
             value={firstname} 
             onChange={(e) => setFirstname(e.target.value)}
             minLength="2"
             required 
             />
            {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div className='lastName'>
           <label htmlFor="lastName">Last Name</label><br />
           <input 
             id="lastName"
             type="text" 
             placeholder='Last Name' 
             name='lastname' 
             value={lastname} 
             onChange={(e) => setLastName(e.target.value)}
             minLength="2"
             required
            />
            {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>

   <div className="date">
   <label htmlFor="res-date">Choose date</label>
   <input type="date" aria-label="date-input" name ="date" id="res-date" min={today} value={date} onChange={handleDateChange} required/>
   {errors.date && <p className="error">{errors.date}</p>}
   </div>

   <div className="time">
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" name="selectedTime" value={selectedTime} onChange={handleChange}>
   <option value="" disabled>Select a time</option>
   {availableTimes && availableTimes.map(time =>  (
      <option key={time} value={time}>{time}</option>
   ))}
   </select>
   {errors.time && <p className="error">{errors.time}</p>}
   </div>

   <div className="guests">
   <label htmlFor="guests">Number of guests</label>
   <input type="number" name ="guests" placeholder="Select number of guests"  /* min="1" max="10" */ id="guests" value={guests} onChange={handleChange}/>
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

   <button type="submit" disabled={!date}>Reserve Table</button>

   </fieldset> 

</form>

);
}
export default BookingForm;


