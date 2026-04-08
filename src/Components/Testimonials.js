import React from "react";
import './Testimonials.css';
import annaPersona from '../assets/annaPersona.png';

function Testimonials() {


return (

    <main className='testimonials'>

      <h1 className="title">Testimonials</h1>

      <div className="container">

        <div className="card card1">
          <img src={annaPersona} alt="Anna"/>
          <h3>Ritu Sinh</h3>
          <h4>Teacher</h4>
          <p className="starRating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </p>
          <p>Great food, service and the staff! Long time neighborhood restaurant.</p>
        </div>

        <div className="card card2">
          <img src={annaPersona} alt="Anna"/>
          <h3>Ritu Sinh</h3>
          <h4>Teacher</h4>
          <p className="starRating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </p>
          <p>Great food, service and the staff! Long time neighborhood restaurant.</p>
        </div>

        <div className="card card3">
          <img src={annaPersona} alt="Anna"/>
          <h3>Ritu Sinh</h3>
          <h4>Teacher</h4>
          <p className="starRating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </p>
          <p>Great food, service and the staff! Long time neighborhood restaurant.</p>
        </div>

        <div className="card card1">
          <img src={annaPersona} alt="Anna"/>
          <h3>Ritu Sinh</h3>
          <h4>Teacher</h4>
          <p className="starRating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </p>
          <p>Great food, service and the staff! Long time neighborhood restaurant.</p>
        </div>


    </div>
  </main>

);
}

export default Testimonials;
