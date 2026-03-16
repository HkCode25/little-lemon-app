import './App.css';
import './Components/Navbar.css';
import './Components/Header/heroSection.css';
/* import logo from './assets/logo.png'; */
import Navbar from './Components/Navbar';
import HeroSection from './Components/Header/HeroSection';
import OrderOnline from './Components/OrderOnline';
import Footer from './Components/Footer';
import React from 'react';
import Testimonials from './Components/Testimonials';
import About from './Components/About';

function App() {
  return (
    <div className="AppWrapper">
        <Navbar />
        <HeroSection />
        <OrderOnline />
        {/* <Testimonials />
        <About /> 
        <Footer />*/}
    </div>
  );
}

export default App;
