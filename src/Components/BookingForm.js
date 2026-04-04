import "./BookingForm.css";
import React, { useState } from 'react';



function BookingForm({ availableTimes, dispatch }) {
  function handleDateChange(event) {
    const selectedDate = event.target.value;
    dispatch({ type: "update", date: selectedDate });
  }

   const [date, setDate] = useState("");
   const today = new Date().toISOString().split('T')[0];
   /* const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00", 
   ]); */
   const [selectedTime, setSelectedTime] = useState("17:00"); // default selected time
   const [guests, setGuests] = useState("1");
   const [occasion, setOccasion] = useState("");
   const [errors, setErrors] = useState({});


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


/*    const handleChange = (e) => {
    setDate(e.target.value);
    setAvailableTimes(e.target.value);
    setGuests(e.target.value);
    setOccasion(e.target.value);
  }; */

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "date") setDate(value);
  else if (name === "availableTimes") setSelectedTime(value);
  else if (name === "guests") setGuests(value);
  else if (name === "occasion") setOccasion(value);
};


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
   if (!validate()) return; // Stop submission if invalid

   const formData = {
    date,
    time: selectedTime,
    guests,
    occasion,
   };


   try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking successful! Table reserved on:\n" + date + "at" + selectedTime + "\nNumber of guests: " + guests);
        // Optionally reset form fields here
        setDate("");
        setSelectedTime("17:00");
        setGuests("1");
        setOccasion("");
      } else {
        alert("Failed to book table. Please try again.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
   /*  console.log(formData); */
/*     const formData = new FormData(e.target);
 */
    // You can access the 'name' state here to send to an API or for validation
/*     alert(`Table reserved on ${date}, at ${availableTimes}, for ${guests}`); */
/*     alert("Table reserved on:\n" + date + "at" + selectedTime + "\nNumber of guests: " + guests); */
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
   {/* <ul>
        {availableTimes.map((time) => (
          <li key={time}>{time}</li>
        ))}
   </ul> */}
   {errors.date && <p className="error">{errors.date}</p>}
   </div>

   <div className="time">
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" name="availableTimes" value={selectedTime} onChange={handleChange} required>
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


