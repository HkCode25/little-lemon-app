import React from "react";
import logo from '../assets/logo.png';
import { Routes, Route, Link } from "react-router-dom";
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import About from "../Components/About";
import Menu from "../Components/Menu";
import Reservations from "../Components/Reservations";
import Home from "../Components/Home";
// import OrderOnline from "../Components/OrderOnline";
// import Login from "../Components/Login";
// import App from "../App";
/* import hamburgerIcon from '../../assets/icons_assets/hamburgerIcon.png'; */




function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <header>
        <Link to="/home">
          <img
            className="header_logo"
            src={logo}
            alt="header_logo"
          />
        </Link>

        <nav ref={navRef}>
          <Link onClick={showNavbar} to="/home" className="nav-element">
            <p>Home</p>
          </Link>

          <Link onClick={showNavbar} to="/menu" className="nav-element">
            <p>Menu</p>
          </Link>

          <Link onClick={showNavbar} to="/reservations" className="nav-element">
            <p>Reservations</p>
          </Link>

          <Link onClick={showNavbar} to="/about" className="nav-element">
            <p>About</p>
          </Link>

          <Link onClick={showNavbar} to="/profile" className="nav-element">
            <p>Profile</p>
          </Link>

          {/* <Link to="/login" className="nav-element">
            <div className="signin_but">
              <p>Sign In</p>
            </div>
          </Link> */}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>

      <Routes> 
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes>

      </header>
    </div>
  );
}

export default Header;

