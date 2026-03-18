import logo from '../assets/logo.png';
import { Routes, Route, Link } from "react-router-dom";
import "./Footer.css";
import { useRef } from "react";
import About from "../Components/About";
import Menu from "../Components/Menu";
import Reservations from "../Components/Reservations";
import Home from "../Components/Home";
import OrderOnline from "../Components/OrderOnline";


function Footer() {

    return (
    <footer className='App-footer'>
  
        <Link to="/home">
          <img
            className="header_logo"
            src={logo}
            alt="header_logo"
          />
        </Link>


      <nav className='footerNav'>       
          <Link to="/" className="nav-item"><p>Home</p></Link>
          <Link to="/About" className="nav-item">About</Link>
          <Link to="/Menu" className="nav-item">Menu</Link>
          <Link to="/Reservations" className="nav-item">Reservations</Link>
          <Link to="/OrderOnline" className="nav-item">Order online</Link>
          <Link to="/Login" className="nav-item">Login</Link>
      </nav>


      <div className='footerContact'>
        <p>Contact Address</p>
        <p>Phone number </p>
        <p>Email</p>
      </div>


      <div className='footerSocial'>
        <p>Social Links</p>
      </div>


      <div className='footerCopyright'>
      <p>Copyright © 2026 Little Lemon Restaurant</p>
      </div>

  </footer>
  );
  }

export default Footer;




