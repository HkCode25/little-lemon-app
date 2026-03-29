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
import { Signup } from './Components/Signup';
import { Login2 } from './Components/Login2';
import React, { useState } from 'react';


function App() {
  /* const [currentForm, setCurrentForm] = useState('login'); */

 /*  const toggleForm = (formName) => {
  setCurrentForm(formName);
  } */

  return (
    
    <div className="AppWrapper">
      
      <Navbar />
     {/*  {currentForm === "login" ? <Login2 onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>} */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
  
      <Footer />
    </div>
  );
}

export default App;
