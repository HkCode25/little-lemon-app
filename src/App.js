import './App.css';
import './Components/Navbar.css';
import './Components/Header/heroSection.css';
/* import logo from './assets/logo.png'; */
import Navbar from './Components/Navbar';
import HeroSection from './Components/Header/HeroSection';
import MainApp from './Components/Main';
import Footer from './Components/Footer';
import React from 'react';



function App() {
  return (
    <div className="AppWrapper">
        <Navbar />
        <HeroSection />
        <MainApp />
        <Footer />
    </div>
  );
}

export default App;
