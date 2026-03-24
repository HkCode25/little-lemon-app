import logo from '../assets/logo.png';
import { Routes, Route, Link } from "react-router-dom";
import "./Footer.css";
import { useRef } from "react";
import About from "../Components/About";
import Menu from "../Components/Menu";
import Reservations from "../Components/Reservations";
import Home from "../Components/Home";
import OrderOnline from "../Components/OrderOnline";
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

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
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/menu" className="nav-item">Menu</Link>
          <Link to="/reservations" className="nav-item">Reservations</Link>
          <Link to="/orderonline" className="nav-item">Order online</Link>
          <Link to="/login" className="nav-item">Login</Link>
      </nav>


      <div className='footerContact'>
        <p>Contact Address:</p>
        <p>#1014 17 St SW, Calgary, AB T2D 1T2</p>&nbsp;
        <p>Phone number: </p>
        <p>+1 (403) 012-8200 </p>&nbsp;
        <p>Email</p>
        <p>contact@little-lemon.com</p>
      </div>


      <div className='footerSocial social-icons'>
        <a className='social-icons' href="..."><FaYoutube size={24}/><p>YouTube</p></a>
        <a className='social-icons' href="..."><FaFacebook size={24}/><p>Facebook</p></a>
        <a className='social-icons' href="..."><FaInstagram size={24}/><p>Instagram</p></a>
      </div>


      <div className='footerCopyright'>
      <p>Copyright © 2026 Little Lemon Restaurant</p>
      </div>

  </footer>
  );
  }

export default Footer;




