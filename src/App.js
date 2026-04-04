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
import {Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import BookingPage from './Components/BookingPage';
/* import BookingForm from './Components/BookingForm';
 *//* import { Signup } from './Components/Signup';
import { Login2 } from './Components/Login2';*/
import React, { useState } from 'react';
import { useReducer } from 'react'; 


function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function timesReducer(state, action) {
  switch (action.type) {
    case "update":
      return initializeTimes();
    default:
      return state;
  }
}

function App() {
    const [availableTimes, dispatch] = React.useReducer(timesReducer, [], initializeTimes);

/* const [availableTimes, setAvailableTimes] = React.useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00", 
   ]); */



  return (
    <div className="AppWrapper">

      <Navbar />
     {/*  {currentForm === "login" ? <Login2 onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>} */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bookingpage" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      
      <Footer />

    </div>
  
  );
}

export default App;
