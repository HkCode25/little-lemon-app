import React from "react";
import "./BookingForm.css";
import BookingForm from "./BookingForm";


function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className="bookingpage">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}
export default BookingPage;

