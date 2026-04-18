import React, { useState } from 'react';
import "./Login.css";
import emailIcon from '../assets/icons_assets/New Folder With Items/emailIcon.png';
import lockIcon from '../assets/icons_assets/New Folder With Items/lockIcon.png';
import nameIcon from '../assets/icons_assets/New Folder With Items/nameIcon.png'; 
/* import Login from './Login'; */

export const Signup = (props) =>{
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const [action, setAction] = useState("Login"); */



   const handleSubmit = (e) => {
     e.preventDefault();
     setFirstname("");
     setLastName("");
     setEmail("");
     setPassword("");
     console.log("Form submitted");
     alert(`Hello, ${firstname}`);
   };



return(

  <div className='loginForm'>

    <div className="signup">Sign Up</div>

    <form onSubmit={handleSubmit}>
        <div className='firstName'>
          <img src={nameIcon} alt="" width="30rem"/>
           <label htmlFor="firstName">First Name</label><br />
           <input 
             id="firstName"
             type="text" 
             placeholder='First Name' 
             name='firstname' 
             value={firstname} 
             onChange={(e) => setFirstname(e.target.value)}
             minLength="2"
             required
           />
         </div>
          <div className='lastName'>
           <img src={nameIcon} alt="" width="30rem"/>
           <label htmlFor="lastName">Last Name</label><br />
           <input 
             id="lastName"
             type="text" 
             placeholder='Last Name' 
             name='lastname' 
             value={lastname} 
             onChange={(e) => setLastName(e.target.value)}
             minLength="2"
             required
           />
         </div>
         <div className='email'>
          <img src={emailIcon} alt="" width="30rem"/>
           <label htmlFor="email">Email</label><br />
           <input 
             id="email"
             type="email" 
             placeholder='Email' 
             name='email' 
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
             required
           />
         </div>
         <div className='signup-password'>
          <img src={lockIcon} alt="" width="30rem"/>
           <label htmlFor="password">Password</label><br />
           <input 
             id="password"
             type="password" 
             placeholder='********' 
             name='password' 
             value={password} 
             onChange={(e) => setPassword(e.target.value)}
             minLength="8"
             required
           />
         </div>
          <div className='signup-password'>
          <img src={lockIcon} alt="" width="30rem"/>
           <label htmlFor="password">Confirm Password</label><br />
           <input 
             id="password"
             type="password" 
             placeholder='********' 
             name='password' 
             value={password} 
             onChange={(e) => setPassword(e.target.value)}
             minLength="8"
             required
           />
         </div>
                  
         <div className="submit-container">

          <button
          disabled={!firstname} 
          type='submit'>
          Sign Up
          </button>

         </div>
         

    </form>
          <button className='switchform-btn'
          onClick={() => props.onFormSwitch('login')}
          type='button'>
          Already have an account? Login!
          </button>

  </div>

);
}