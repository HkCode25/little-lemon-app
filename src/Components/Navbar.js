import React from "react";
import logo from '../assets/logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";



/* import { FaBars, FaTimes } from "react-icons/fa";
 *//* import { useRef } from "react"; */
/* import About from "../Components/About";
import Menu from "../Components/Menu";
import Reservations from "../Components/Reservations";
import Home from "../Components/Home";
import OrderOnline from "../Components/OrderOnline"; */
// import Login from "../Components/Login";
// import App from "../App";
/* import hamburgerIcon from '../../assets/icons_assets/hamburgerIcon.png'; */




function Navbar() {

  return (
    <div className="navbar">
      <header>
        <Link to="/">
          <img
            className="header_logo"
            src={logo}
            alt="Little Lemon logo"
          />
        </Link>

        <nav>
          <ul>
            <li><Link to="/" className="nav-element active">Home</Link></li>
            <li><Link to="/about" className="nav-element">About</Link></li>
            <li><Link to="/menu" className="nav-element">Menu</Link></li>
            <li><Link to="/bookingpage" className="nav-element">Reservations</Link></li>
            <li><Link to="/orderonline" className="nav-element">Order online</Link></li>
            <li><Link to="/login"><div className="signin_but">Login</div></Link></li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;

