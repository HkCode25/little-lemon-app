import React, { useState } from 'react';
import './Menu.css';


export default function Menu() { 

 return(

  <section className='menu'>

  <h1>Little Lemon Menu</h1>

  <div className='menuDescription'>
  <p>Our menu features a variety of Mediterranean dishes, including fresh salads, flavorful pastas, and delicious seafood. We use only the freshest ingredients and traditional recipes to create authentic flavors that will transport you to the Mediterranean coast.</p>
  <p>Whether you're in the mood for a light lunch or a hearty dinner, our menu has something for everyone. We also offer vegetarian and gluten-free options, so everyone can enjoy our delicious food.</p>
  <p>Come visit us and experience the taste of the Mediterranean at Little Lemon!</p>
  </div>

  <div className='menuSpecials'>
    <h2>Specials</h2>
  </div>

  <div className='item1'>
    <h3>BEET + FETA SALAD ------- $17</h3> 
    <p>Beets, arugula, feta, red onions, tomatoes and house vinaigrette dressing</p>
  </div>

  <div className='item2'>
    <h3>CAPRESE SALAD ------- $15</h3> 
    <p>Fior di latte, tomatoes, house made basil pesto, mixed greens and balsamic reduction</p>
  </div>

  <div className='item3'>
    <h3>GREEK SALAD ------- $14.99</h3> 
    <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
  </div>

  </section>

 );
 }


