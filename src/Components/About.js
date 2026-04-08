
import React from "react";
import heroimage from '../assets/heroimage.jpg';
import "./About.css";



function About() {
  return (
    <div className="about">

    <h1>About</h1>

      <div className="about-container1">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </div>

      <div className="about-container2">
        <h3>Mario</h3>
        <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <img src={heroimage} width = "160px" alt="Mario"/>
      </div>

      <div className="about-container3">
        <h3>Adrian</h3>
        <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <img src={heroimage} width = "160px" alt="Adrian"/>
      </div>

    </div>
  );
}
export default About;