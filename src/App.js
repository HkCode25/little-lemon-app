import './App.css';
import './Components/Navbar.css';
import './Components/Header/heroSection.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Header/HeroSection';
import OrderOnline from './Components/OrderOnline';
import Footer from './Components/Footer';
import React from 'react';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Menu from "./Components/Menu";
import Reservations from "./Components/Reservations";
import Home from "./Components/Home";
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="AppWrapper">
      <Navbar />
      <HeroSection />
      <OrderOnline />
      <Testimonials />
      <About />

      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/menu" element={Menu} />
        <Route path="/reservations" element={Reservations} />
        <Route path="/order-online" element={OrderOnline} />
      </Routes>

        <Footer />
    </div>
  );
}

export default App;
