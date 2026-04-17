import React from "react";
import './Testimonials.css';
import annaPersona from '../assets/annaPersona.png';

function Testimonials() {


return (

    <main className='testimonials'>

      <h1 className="title">Testimonials</h1>

      <div className="container">

        <div className="card card1">
          <img src={annaPersona} alt="Picture of Anna"/>
          <h3>Anna</h3>
          <h4>Teacher</h4>
          <p className="starRating">
          <span className="sr-only">4 out of 5 stars</span>
          <span aria-hidden="true">★★★★☆</span>
          </p>
          <p>Great food, service and the staff! Long time neighborhood restaurant.</p>
        </div>

        <div className="card card2">
          <img src={annaPersona} alt="Picture of Anna"/>
          <h3>Anna</h3>
          <h4>Teacher</h4>
          <p className="starRating">
          <span className="sr-only">4 out of 5 stars</span>
          <span aria-hidden="true">★★★★☆</span>
          </p>
          <p>Great food, service and the staff! Long time neighborhood restaurant.</p>
        </div>

        <div className="card card3">
          <img src={annaPersona} alt="Picture of Anna"/>
          <h3>Anna</h3>
          <h4>Teacher</h4>
          <p className="starRating">
          <span className="sr-only">5 out of 5 stars</span>
          <span aria-hidden="true">★★★★★</span>
          </p>
          <p>Great food, service and the staff! Long time neighborhood restaurant.</p>
        </div>

        <div className="card card1">
          <img src={annaPersona} alt="Picture of Anna"/>
          <h3>Anna</h3>
          <h4>Teacher</h4>
          <p className="starRating">
          <span className="sr-only">5 out of 5 stars</span>
          <span aria-hidden="true">★★★★★</span>
          </p>
          <p>Great food, service and the staff! Long time neighborhood restaurant.</p>
        </div>


    </div>
  </main>

);
}

export default Testimonials;
