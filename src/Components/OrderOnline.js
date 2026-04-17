import React from "react";
import './OrderOnline.css';
import heroimage from '../assets/heroimage.jpg';
import  bikeicon2 from '../assets/icons_assets/bikeicon2.png';
import pickupIcon from '../assets/icons_assets/pickupIcon.png';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";



function OrderOnline () {

    return (

    <main className='order-online'>

      <div className="specials">
        <h1 className="title">This week's specials!</h1>
        <button type="button" className='onlineMenu-btn'>Online Menu</button>
      </div>

      <div className="container">

        <div className="card card1">
          <img src={heroimage} width = "160px" aria-labelledby="greek-salad" alt="Greek Salad"/>
          <h3 id="greek-salad">Greek Salad -- $14.99</h3>
          <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          <div className="cardButton">
            <button type="button" className="btn">Order a delivery</button>
          </div>
          <div className="cardIcon">
            <button type="button">
            <img src={bikeicon2} aria-label="Select delivery" alt="" />
            </button>
            <button type="button">
            <img src={pickupIcon} aria-label="Select Pick-up" alt="" />
            </button>
          </div>
        </div> 

      <div className="card card2">
          <img src={heroimage} width = "160px" aria-labelledby="bruschetta" alt="Bruschetta"/>
          <h3 id="bruschetta">Bruschetta -- $12.99</h3>
          <p>Grilled bread topped with tomatoes, garlic, and fresh basil. </p>
          <div className="cardButton">
            <button type="button" className="btn">Order a delivery</button>
          </div>
          <div className="cardIcon">
            <button type="button">
            <img src={bikeicon2} aria-label="Select delivery" alt="" />
            </button>
            <button type="button">
            <img src={pickupIcon} aria-label="Select Pick-up" alt="" />
            </button>
          </div>
        </div>

        <div className="card card3">
          <img src={heroimage} width = "160px" aria-labelledby="grilled-fish" alt="Grilled Fish"/>
          <h3 id="grilled-fish">Grilled Fish -- $16.99</h3>
          <p>Our grilled fish is prepared with a lemon herb butter sauce and served with seasonal vegetables. </p>
          <div className="cardButton">
            <button type="button" className="btn">Order a delivery</button>
          </div>
          <div className="cardIcon">
            <button type="button">
            <img src={bikeicon2} aria-label="Select delivery" alt="" />
            </button>
            <button type="button">
            <img src={pickupIcon} aria-label="Select Pick-up" alt="" />
            </button>
          </div>
        </div>

    </div>
  </main>

);
}

export default OrderOnline;
