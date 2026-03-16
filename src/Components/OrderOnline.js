import React from "react";
import './OrderOnline.css';
import heroimage from '../assets/heroimage.jpg';
import  bikeicon2 from '../assets/bikeicon2.png';

function OrderOnline () {

    return (

    <main className='order-online'>
      
      <div className="specials">
        <div className="title"><h1>This week's specials!</h1></div>
        <div className='onlineMenu-btn'><button>Online Menu</button></div>
      </div>

      <div className="container swiper mySwiper">

        <div className="card card1 swiper-slide">

          <img src={heroimage} width = "160px" alt="Placeholder image"/>
          <h3>Greek Salad1 -- $14.99</h3>
          <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          <div className="cardButton">
            <button class="btn">Order a delivery</button>
          </div>
          <div className="cardIcon">
            <img src={bikeicon2} alt="bike icon"/>
          </div>
        </div>

        <div className="card card2 swiper-slide">

          <img src={heroimage} width = "160px" alt="Placeholder image"/>
          <h3>Greek Salad1 -- $14.99</h3>
          <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          <div className="cardButton">
            <button class="btn">Order a delivery</button>
          </div>
          <div className="cardIcon">
            <img src={bikeicon2} alt="bike icon"/>
          </div>
        </div>

        <div className="card card3 swiper-slide">

          <img src={heroimage} width = "160px" alt="Placeholder image"/>
          <h3>Greek Salad1 -- $14.99</h3>
          <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          <div className="cardButton">
            <button class="btn">Order a delivery</button>
          </div>
          <div className="cardIcon">
            <img src={bikeicon2} alt="bike icon"/>
          </div>
        </div>

</div>
    </main>

    );
}


export default OrderOnline;
