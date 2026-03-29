import React from "react";
import "./reservations.css";
import BookingForm from './BookingForm';

function Reservations() {
  return (
    <div className="reservations">
      <div className="reservations__container">
        <h1>Reserve a Table on this page.</h1>
        <BookingForm />
      </div>
    </div>
  );
}
export default Reservations;

