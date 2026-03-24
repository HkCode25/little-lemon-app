import React from "react";
import "./Home.css";
import './About.css';
import './Header/heroSection.css';
import HeroSection from './Header/HeroSection';
import OrderOnline from './OrderOnline';
import Testimonials from './Testimonials';
import About from './About';
/* import Home from './Home'; */




function Home() {
  return (
      <div className="home-container">
      <HeroSection />
      <OrderOnline />
      <Testimonials />
      <About />
      </div>
  );
}

export default Home;
