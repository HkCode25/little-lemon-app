import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
// import { Routes, Route, Link } from "react-router-dom";
// import About from "../Components/About";
// import Menu from "../Components/Menu";
// import Reservations from "../Components/Reservations";
// import OrderOnline from "../Components/OrderOnline";
// import Login from "../Components/Login";
// import App from "../App";


function Header() {
  return (
    <header className='App-header'>
      <Link to="/">
      <img className='headerLogo' src = {logo} width = "200px" alt="Little Lemon Logo" />
      </Link>

      <nav className='headerNav'>
        <ul>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/About" className="nav-item">About</Link></li>
          <li><Link to="/Menu" className="nav-item">Menu</Link></li>
          <li><Link to="/Reservations" className="nav-item">Reservations</Link></li>
          <li><Link to="/OrderOnline" className="nav-item">Order online</Link></li>
          <li><Link to="/Login" className="nav-item">Login</Link></li>
        </ul>
      </nav>

      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Order-online" element={<OrderOnline />} />
        <Route path="/Login" element={<Login />} />
      </Routes>  */}

    </header>
  );
}

export default Header;

