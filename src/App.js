import './App.css';
import './Components/Navbar.css';
import './Components/Header/heroSection.css';
import Navbar from './Components/Navbar';
/* import HeroSection from './Components/Header/HeroSection';
 */import OrderOnline from './Components/OrderOnline';
import Footer from './Components/Footer';
/* import Testimonials from './Components/Testimonials'; */
import About from './Components/About';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations';
import Home from './Components/Home';
import Login from './Components/Login';
import BookingPage from './Components/BookingPage';
/* import BookingForm from './Components/BookingForm';
 *//* import { Signup } from './Components/Signup';
import { Login2 } from './Components/Login2';*/
import React, { useState } from 'react';
import { useReducer } from 'react'; 
import { Routes, Route } from "react-router-dom";


//code for  static times array, which is now replaced by the initializeTimes function that generates the available times based on the date selected by the user.
/* export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
} */



  //this is the function that initializes the available times for the booking form. It returns an array of time slots based on the date selected by the user. If the date falls on a weekend (Saturday or Sunday), it returns a different set of time slots compared to weekdays.
  export function initializeTimes(dateString) {
  const date = new Date(dateString);
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday

  if (day === 0 || day === 6) {
    // Weekend times
    return ["18:00", "19:00", "20:00", "21:00"];
  } else {
    // Weekday times
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
}



export function timesReducer(state, action) {
  switch (action.type) {
    case "update":
      return initializeTimes(action.date) || state; // In a real app, you'd fetch available times based on the date selected
    default:
      return state;
  }
}

function App() {
    const [availableTimes, dispatch] = React.useReducer(timesReducer, [], initializeTimes);



  return (
    <div className="AppWrapper">

      <Navbar />
         
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bookingpage" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />

    </div>
  
  );
}

export default App;
